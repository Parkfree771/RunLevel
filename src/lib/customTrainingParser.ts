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

export interface CustomTrainingData {
  mainTitle: string;
  description: string;
  plans: TrainingPlan[];
}

// 텍스트 파일을 파싱하는 함수
export function parseTrainingFile(fileContent: string): CustomTrainingData {
  const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line);

  const mainTitle = lines.shift() || '제목 없음';
  const description = lines.shift() || '설명 없음';

  const plans: TrainingPlan[] = [];
  let currentPlan: TrainingPlan | null = null;
  let scheduleStarted = false;

  for (const line of lines) {
    if (line.match(/^\d+\./)) { // 새로운 훈련 계획 시작 (e.g., "1. C+, C, ...")
      if (currentPlan) {
        plans.push(currentPlan);
      }
      const titleMatch = line.match(/^\d+\.\s*(.*?)\s*목표 주간 계획/);
      const targetMatch = line.match(/목표:\s*(.*)/);
      
      currentPlan = {
        title: titleMatch ? titleMatch[1].trim() : '소제목 없음',
        target: targetMatch ? targetMatch[1].trim() : '목표 없음',
        schedule: [],
      };
      scheduleStarted = false;
    } else if (line.startsWith('요일')) { // 스케줄 테이블 헤더
      scheduleStarted = true;
    } else if (currentPlan && scheduleStarted && !line.startsWith('Weekly Customized Training Program')) { // 스케줄 내용
      const parts = line.split('\t').map(p => p.trim());
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

  // 영어 설명 부분 제거 (간단한 방식)
  const englishSectionIndex = plans.findIndex(p => p.title.toLowerCase().includes('weekly customized'));
  if (englishSectionIndex > -1) {
    plans.splice(englishSectionIndex);
  }


  return { mainTitle, description, plans };
}

// '훈련 프로그램 데이터' 디렉토리에서 모든 파일을 읽고 파싱하는 함수
export function getCustomTrainingData() {
  const dataDir = path.join(process.cwd(), '훈련 프로그램 데이터');
  try {
    const filenames = fs.readdirSync(dataDir);
    
    const allTrainingData = filenames
      .filter(filename => filename.endsWith('.txt'))
      .map(filename => {
        const filePath = path.join(dataDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const parsedData = parseTrainingFile(fileContent);
        
        return {
          id: filename.replace('.txt', ''),
          filename,
          ...parsedData,
        };
      });

    return allTrainingData;
  } catch (error) {
    console.error("Error reading custom training data:", error);
    return [];
  }
}