import fs from 'fs';
import path from 'path';

// 데이터 구조 정의
export interface WeeklySchedule {
  day: string;
  type: string;
  content: string;
  tips: string;
}

export interface TrainingPlan {
  title: string;
  target: string;
  schedule: WeeklySchedule[];
}

// 텍스트 파일에서 모든 계획을 파싱하는 내부 함수
function parseTrainingFile(fileContent: string): TrainingPlan[] {
  const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line);
  const plans: TrainingPlan[] = [];
  let currentPlan: TrainingPlan | null = null;
  let scheduleStarted = false;

  for (const line of lines) {
    if (line.match(/^\d+\./)) { // "1.", "2." 등 새로운 훈련 계획 시작
      if (currentPlan) {
        plans.push(currentPlan);
      }
      const titleMatch = line.match(/^\d+\.\s*(.*?)(?:을 위한|목표)/);
      const targetMatch = line.match(/목표:\s*(.*)/);
      
      currentPlan = {
        title: titleMatch ? titleMatch[1].trim() : '소제목 없음',
        target: targetMatch ? targetMatch[1].trim() : '목표 없음',
        schedule: [],
      };
      scheduleStarted = false;
    } else if (line.startsWith('요일')) {
      scheduleStarted = true;
    } else if (currentPlan && scheduleStarted && !line.includes('Workout Type')) {
      const parts = line.split('\t').map(p => p.trim()).filter(p => p);
      if (parts.length >= 3) {
        currentPlan.schedule.push({
          day: parts[0],
          type: parts[1],
          content: parts[2],
          tips: parts[3] || '',
        });
      }
    }
  }

  if (currentPlan) {
    plans.push(currentPlan);
  }
  return plans;
}

// 특정 레벨에 맞는 훈련 계획 하나만 가져오는 함수
export function getTargetedTrainingPlan(
  gender: 'male' | 'female',
  distance: '10km' | 'Half Marathon' | 'Full Marathon',
  level: 'belowAverage' | 'average' | 'aboveAverage'
): TrainingPlan | null {
  const genderMap = { male: '남성', female: '여성' };
  const distanceMap = { '10km': '10km', 'Half Marathon': '하프', 'Full Marathon': '풀코스' };

  const filename = `${genderMap[gender]} ${distanceMap[distance]} 한글.txt`;
  const filePath = path.join(process.cwd(), '훈련 프로그램 데이터', filename);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const allPlans = parseTrainingFile(fileContent);

    const levelIndexMap = {
      belowAverage: 0, // D,C 등급은 첫번째 플랜
      average: 1,      // B 등급은 두번째 플랜
      aboveAverage: 2  // A,S 등급은 세번째 플랜
    };

    const planIndex = levelIndexMap[level];
    
    return allPlans[planIndex] || null;

  } catch (error) {
    console.error(`Error reading or parsing file ${filename}:`, error);
    return null;
  }
}