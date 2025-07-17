import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Timer, Route, Trophy, RotateCcw, Lightbulb, BarChart3, User } from "lucide-react";

interface GradeInfo {
  color: string;
  textColor: string;
  message: string;
  advice: string;
}

const gradeDefinitions: Record<string, GradeInfo> = {
  'SS': {
    color: 'grade-ss',
    textColor: 'text-white',
    message: '믿을 수 없는 기록! 당신은 SS급 엘리트 러너입니다! 프로 수준의 실력을 보여주셨네요!',
    advice: 'SS급 엘리트 러너로서 기록 단축뿐만 아니라 부상 방지를 위한 스트레칭과 코어 운동, 회복 훈련에 집중하세요.'
  },
  'S': {
    color: 'grade-s',
    textColor: 'text-white',
    message: '대단한 기록! S급 상위권 실력입니다! 정말 자랑스러운 결과네요!',
    advice: 'S급 상위권 러너로서 인터벌 트레이닝과 템포 런을 활용해 더 높은 수준을 목표로 해보세요.'
  },
  'A+': {
    color: 'grade-a-plus',
    textColor: 'text-white',
    message: '훌륭한 기록! A+ 상급자 실력입니다! 뛰어난 러닝 능력을 보여주셨네요!',
    advice: 'A+ 상급자로서 고강도 인터벌 훈련을 통해 한계를 돌파해보세요.'
  },
  'A': {
    color: 'grade-a',
    textColor: 'text-white',
    message: '좋은 기록! A급 중상위권 실력을 가지고 계시네요! 꾸준한 노력의 결과입니다!',
    advice: 'A급 중상위권 러너로서 주 1-2회 속도 훈련을 추가해보세요.'
  },
  'B+': {
    color: 'grade-b-plus',
    textColor: 'text-white',
    message: '괜찮은 기록! B+ 중급자 실력입니다! 꾸준히 향상되고 있어요!',
    advice: 'B+ 중급자로서 페이스 런과 템포 런을 병행하여 지구력을 늘려보세요.'
  },
  'B': {
    color: 'grade-b',
    textColor: 'text-white',
    message: '준수한 기록! B급 평균 수준의 러너 실력을 보여주고 계세요!',
    advice: 'B급 평균 수준에서 일정한 페이스 유지 훈련에 집중하세요.'
  },
  'C+': {
    color: 'grade-c-plus',
    textColor: 'text-white',
    message: '발전하고 있어요! C+ 초중급자로 실력이 늘고 있는 단계네요!',
    advice: 'C+ 초중급자로서 규칙적인 운동 루틴을 만들어 기초 체력을 더욱 향상시켜보세요.'
  },
  'C': {
    color: 'grade-c',
    textColor: 'text-white',
    message: '괜찮은 시작! C급으로 러닝에 익숙해지고 있는 단계네요!',
    advice: 'C급에서 기초 체력 향상에 집중하세요. 걷기와 가벼운 조깅을 번갈아 해보세요.'
  },
  'D+': {
    color: 'grade-d-plus',
    textColor: 'text-white',
    message: '괜찮은 성과! D+ 초급자로 꾸준히 노력하고 있어요!',
    advice: 'D+ 초급자로서 기초 체력을 꾸준히 늘려가세요. 걷기와 가벼운 조깅을 병행해보세요.'
  },
  'D': {
    color: 'grade-f',
    textColor: 'text-white',
    message: '첫 걸음을 내디뎠군요! D급이지만 도전하신 것 자체가 멋집니다!',
    advice: 'D급에서는 우선 완주에 의미를 두세요. 걷기 운동부터 시작해서 체력을 기르세요.'
  }
};

// 거리별 기준 시간 (초 단위)
// 거리별 기준 시간과 통계 정보
const distanceStandards = {
  male: {
    '10km': {
      name: '10km',
      mean: 58 * 60,              // 평균: 58분 (남성 기준)
      sigma: 10 * 60,              // 표준편차: 10분
      standards: {
        'SS': 40 * 60,             // ~ 40분
        'S': 44 * 60,              // 40:01 ~ 44분
        'A+': 48 * 60,             // 44:01 ~ 48분
        'A': 52 * 60,              // 48:01 ~ 52분
        'B+': 56 * 60,             // 52:01 ~ 56분
        'B': 60 * 60,              // 56:01 ~ 1시간
        'C+': 65 * 60,             // 1:00:01 ~ 1시간 5분
        'C': 70 * 60,              // 1:05:01 ~ 1시간 10분
        'D+': 75 * 60,             // 1:10:01 ~ 1시간 15분
        'D': Infinity              // 1시간 15분 초과
      }
    },
    '하프마라톤': {
      name: '하프마라톤 (21.1km)',
      mean: 2 * 3600 + 2 * 60,    // 평균: 2시간 2분 (남성 기준)
      sigma: 20 * 60,              // 표준편차: 20분
      standards: {
        'SS': 90 * 60,             // ~ 1시간 30분
        'S': 98 * 60,              // 1:30:01 ~ 1시간 38분
        'A+': 106 * 60,            // 1:38:01 ~ 1시간 46분
        'A': 114 * 60,             // 1:46:01 ~ 1시간 54분
        'B+': 122 * 60,            // 1:54:01 ~ 2시간 2분
        'B': 130 * 60,             // 2:02:01 ~ 2시간 10분
        'C+': 140 * 60,            // 2:10:01 ~ 2시간 20분
        'C': 150 * 60,             // 2:20:01 ~ 2시간 30분
        'D+': 165 * 60,            // 2:30:01 ~ 2시간 45분
        'D': Infinity              // 2시간 45분 초과
      }
    },
    '풀마라톤': {
      name: '풀마라톤 (42.2km)',
      mean: 4 * 3600 + 14 * 60,   // 평균: 4시간 14분 (남성 기준)
      sigma: 28 * 60,              // 표준편차: 28분
      standards: {
        'SS': 3 * 3600,           // ~ 3시간 (서브-3)
        'S': 3 * 3600 + 20 * 60,  // 3:00:01 ~ 3시간 20분
        'A+': 3 * 3600 + 40 * 60, // 3:20:01 ~ 3시간 40분
        'A': 4 * 3600,            // 3:40:01 ~ 4시간 (서브-4)
        'B+': 4 * 3600 + 15 * 60, // 4:00:01 ~ 4시간 15분
        'B': 4 * 3600 + 30 * 60,  // 4:15:01 ~ 4시간 30분
        'C+': 5 * 3600,           // 4:30:01 ~ 5시간 (서브-5)
        'C': 5 * 3600 + 30 * 60,  // 5:00:01 ~ 5시간 30분
        'D+': 6 * 3600,           // 5:30:01 ~ 6시간
        'D': Infinity              // 6시간 초과
      }
    }
  },
  female: {
    '10km': {
      name: '10km',
      mean: 67 * 60,              // 평균: 1시간 7분 (여성 기준)
      sigma: 12 * 60,              // 표준편차: 12분
      standards: {
        'SS': 47 * 60,             // ~ 47분
        'S': 52 * 60,              // 47:01 ~ 52분
        'A+': 57 * 60,             // 52:01 ~ 57분
        'A': 60 * 60,              // 57:01 ~ 1시간 (서브-1시간)
        'B+': 67 * 60,             // 1:00:01 ~ 1시간 7분
        'B': 72 * 60,              // 1:07:01 ~ 1시간 12분
        'C+': 78 * 60,             // 1:12:01 ~ 1시간 18분
        'C': 85 * 60,              // 1:18:01 ~ 1시간 25분
        'D+': 90 * 60,             // 1:25:01 ~ 1시간 30분
        'D': Infinity              // 1시간 30분 초과
      }
    },
    '하프마라톤': {
      name: '하프마라톤 (21.1km)',
      mean: 2 * 3600 + 22 * 60,   // 평균: 2시간 22분 (여성 기준)
      sigma: 25 * 60,              // 표준편차: 25분
      standards: {
        'SS': 105 * 60,            // ~ 1시간 45분
        'S': 115 * 60,             // 1:45:01 ~ 1시간 55분
        'A+': 125 * 60,            // 1:55:01 ~ 2시간 5분 (서브-2)
        'A': 135 * 60,             // 2:05:01 ~ 2시간 15분
        'B+': 142 * 60,            // 2:15:01 ~ 2시간 22분
        'B': 150 * 60,             // 2:22:01 ~ 2시간 30분 (서브-230)
        'C+': 160 * 60,            // 2:30:01 ~ 2시간 40분
        'C': 170 * 60,             // 2:40:01 ~ 2시간 50분
        'D+': 180 * 60,            // 2:50:01 ~ 3시간
        'D': Infinity              // 3시간 초과
      }
    },
    '풀마라톤': {
      name: '풀마라톤 (42.2km)',
      mean: 4 * 3600 + 42 * 60,   // 평균: 4시간 42분 (여성 기준)
      sigma: 32 * 60,              // 표준편차: 32분
      standards: {
        'SS': 3 * 3600 + 30 * 60, // ~ 3시간 30분 (보스턴 퀸)
        'S': 3 * 3600 + 50 * 60,  // 3:30:01 ~ 3시간 50분
        'A+': 4 * 3600,           // 3:50:01 ~ 4시간 (서브-4)
        'A': 4 * 3600 + 20 * 60,  // 4:00:01 ~ 4시간 20분
        'B+': 4 * 3600 + 42 * 60, // 4:20:01 ~ 4시간 42분
        'B': 5 * 3600,            // 4:42:01 ~ 5시간
        'C+': 5 * 3600 + 30 * 60, // 5:00:01 ~ 5시간 30분 (서브-5)
        'C': 6 * 3600,            // 5:30:01 ~ 6시간
        'D+': 6 * 3600 + 30 * 60, // 6:00:01 ~ 6시간 30분
        'D': Infinity              // 6시간 30분 초과
      }
    }
  }
};

export default function Home() {
  const [selectedDistance, setSelectedDistance] = useState<string>('');
  const [gender, setGender] = useState<string>('male'); // 성별 선택 추가
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [results, setResults] = useState<{
    totalSeconds: number;
    grade: string;
    formattedTime: string;
    distanceName: string;
    gender: string;
  } | null>(null);

  const determineGrade = (totalSeconds: number, distance: string, gender: string): string => {
    if (!distance || !distanceStandards[gender as keyof typeof distanceStandards] || 
        !distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']]) return 'D';

    const standards = distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']].standards;

    if (totalSeconds > standards['D+']) return 'D';
    if (totalSeconds > standards['C']) return 'D+';
    if (totalSeconds > standards['C+']) return 'C';
    if (totalSeconds > standards['B']) return 'C+';
    if (totalSeconds > standards['B+']) return 'B';
    if (totalSeconds > standards['A']) return 'B+';
    if (totalSeconds > standards['A+']) return 'A';
    if (totalSeconds > standards['S']) return 'A+';
    if (totalSeconds > standards['SS']) return 'S';
    return 'SS';
  };

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDistance) {
      alert('거리를 선택해주세요.');
      return;
    }

    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;
    const secondsNum = parseInt(seconds) || 0;

    if (minutesNum === 0 && secondsNum === 0 && hoursNum === 0) {
      alert('올바른 시간을 입력해주세요.');
      return;
    }

    const totalSeconds = (hoursNum * 3600) + (minutesNum * 60) + secondsNum;

    if (totalSeconds <= 0) {
      alert('올바른 시간을 입력해주세요.');
      return;
    }

    const grade = determineGrade(totalSeconds, selectedDistance, gender);
    const formattedTime = formatTime(totalSeconds);
    const distanceName = distanceStandards[gender as keyof typeof distanceStandards][selectedDistance as keyof typeof distanceStandards['male']].name;

    setResults({
      totalSeconds,
      grade,
      formattedTime,
      distanceName,
      gender
    });
  };

  const resetForm = () => {
    setSelectedDistance('');
    setGender('male');
    setHours('');
    setMinutes('');
    setSeconds('');
    setResults(null);
  };

  const handleNumberInput = (value: string, setter: (value: string) => void, max?: number) => {
    const num = parseInt(value);
    if (value === '' || (!isNaN(num) && num >= 0 && (!max || num <= max))) {
      setter(value);
    }
  };

  // 정규분포 그래프를 위한 함수들
  const generateNormalDistribution = (mean: number, sigma: number, userTime?: number) => {
    const points = [];
    const range = 4 * sigma; // ±4σ 범위
    const start = mean - range;
    const end = mean + range;
    const step = range / 100;

    for (let x = start; x <= end; x += step) {
      const y = Math.exp(-0.5 * Math.pow((x - mean) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI));
      points.push({ x, y, time: x });
    }

    return points;
  };

  // erf 함수 구현 (브라우저 호환성)
  const erf = (x: number): number => {
    // Abramowitz and Stegun approximation
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;

    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
  };

  const getGradeTimeRange = (grade: string, distance: string, gender: string) => {
    if (!distance || !distanceStandards[gender as keyof typeof distanceStandards] || 
        !distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']]) return null;

    const standards = distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']].standards;
    
    // 데이터에 맞는 정확한 시간 구간 반환
    if (grade === 'SS') {
      return {
        minTime: null,
        maxTime: formatTime(standards[grade]),
        range: `~ ${formatTime(standards[grade])}`
      };
    } else if (grade === 'D') {
      return {
        minTime: formatTime(standards['D+'] + 1),
        maxTime: null,
        range: `${formatTime(standards['D+'] + 1)} ~`
      };
    } else {
      // 다른 등급들은 이전 등급 + 1초부터 현재 등급까지
      const gradeOrder = ['SS', 'S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D'];
      const currentIndex = gradeOrder.indexOf(grade);
      
      if (currentIndex === -1) return null;
      
      const prevGrade = gradeOrder[currentIndex - 1];
      const minTime = standards[prevGrade] + 1;
      const maxTime = standards[grade];

      return {
        minTime: formatTime(minTime),
        maxTime: formatTime(maxTime),
        range: `${formatTime(minTime)} ~ ${formatTime(maxTime)}`
      };
    }
  };

  const getGradePosition = (time: number, distance: string, gender: string) => {
    if (!distance || !distanceStandards[gender as keyof typeof distanceStandards] || 
        !distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']]) return null;

    const { mean, sigma } = distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']];
    const zScore = (time - mean) / sigma;

    // 정규분포 누적확률 계산
    const cdf = 0.5 * (1 + erf(zScore / Math.sqrt(2)));
    // 러닝에서는 시간이 짧을수록 좋으므로 cdf를 그대로 사용 (시간이 짧으면 상위 퍼센트)
    const percentile = Math.round(cdf * 100);

    return {
      zScore,
      percentile: Math.max(0, Math.min(100, percentile))
    };
  };

  const NormalDistributionChart = ({ distance, userTime, userGrade, gender = 'male' }: { distance: string; userTime?: number; userGrade?: string; gender?: string }) => {
    if (!distance || !distanceStandards[gender as keyof typeof distanceStandards] || 
        !distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']]) return null;

    const { mean, sigma, standards } = distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']];
    const points = generateNormalDistribution(mean, sigma, userTime);
    const maxY = Math.max(...points.map(p => p.y));

    // SVG 좌표계로 변환
    const svgWidth = 800;
    const svgHeight = 200;
    const padding = 40;

    const xScale = (time: number) => {
      const minTime = mean - 4 * sigma;
      const maxTime = mean + 4 * sigma;
      // X축 반전: 빠른 시간(작은 값)이 오른쪽에 오도록
      return svgWidth - padding - ((time - minTime) / (maxTime - minTime)) * (svgWidth - 2 * padding);
    };

    const yScale = (y: number) => svgHeight - padding - (y / maxY) * (svgHeight - 2 * padding);

    // 곡선 경로 생성
    const pathData = points.map((point, index) => {
      const x = xScale(point.time);
      const y = yScale(point.y);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    // 등급 구간 표시 (CSS 색상과 동일하게 통일)
    const gradeColors = {
      'SS': 'hsl(270, 100%, 70%)',
      'S': 'hsl(45, 100%, 50%)', 
      'A+': 'hsl(290, 90%, 60%)',
      'A': 'hsl(120, 60%, 50%)',
      'B+': 'hsl(180, 80%, 55%)',
      'B': 'hsl(210, 80%, 60%)',
      'C+': 'hsl(50, 90%, 60%)',
      'C': 'hsl(30, 90%, 65%)',
      'D+': 'hsl(0, 0%, 60%)',
      'D': 'hsl(0, 0%, 50%)'
    };

    return (
      <div className="w-full">
        <svg width="100%" height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="border rounded-lg bg-white">
          {/* 등급 구간 배경 - SS급이 오른쪽 (빠른 시간)에 위치 */}
          {/* D 등급 구간 (가장 왼쪽 - 느린 시간) */}
          <rect
            x={Math.min(xScale(mean + 4 * sigma), xScale(standards['D+']))}
            y={padding}
            width={Math.abs(xScale(standards['D+']) - xScale(mean + 4 * sigma))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['D']}
            opacity={0.1}
          />

          {/* D+ 급 구간 */}
          <rect
            x={Math.min(xScale(standards['D+']), xScale(standards['C']))}
            y={padding}
            width={Math.abs(xScale(standards['C']) - xScale(standards['D+']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['D+']}
            opacity={0.1}
          />

          {/* C급 구간 */}
          <rect
            x={Math.min(xScale(standards['C']), xScale(standards['C+']))}
            y={padding}
            width={Math.abs(xScale(standards['C+']) - xScale(standards['C']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['C']}
            opacity={0.1}
          />

          {/* C+ 급 구간 */}
          <rect
            x={Math.min(xScale(standards['C+']), xScale(standards['B']))}
            y={padding}
            width={Math.abs(xScale(standards['B']) - xScale(standards['C+']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['C+']}
            opacity={0.1}
          />

          {/* B급 구간 */}
          <rect
            x={Math.min(xScale(standards['B']), xScale(standards['B+']))}
            y={padding}
            width={Math.abs(xScale(standards['B+']) - xScale(standards['B']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['B']}
            opacity={0.1}
          />

          {/* B+ 급 구간 */}
          <rect
            x={Math.min(xScale(standards['B+']), xScale(standards['A']))}
            y={padding}
            width={Math.abs(xScale(standards['A']) - xScale(standards['B+']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['B+']}
            opacity={0.1}
          />

          {/* A급 구간 */}
          <rect
            x={Math.min(xScale(standards['A']), xScale(standards['A+']))}
            y={padding}
            width={Math.abs(xScale(standards['A+']) - xScale(standards['A']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['A']}
            opacity={0.1}
          />

          {/* A+ 급 구간 */}
          <rect
            x={Math.min(xScale(standards['A+']), xScale(standards['S']))}
            y={padding}
            width={Math.abs(xScale(standards['S']) - xScale(standards['A+']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['A+']}
            opacity={0.1}
          />

          {/* S급 구간 */}
          <rect
            x={Math.min(xScale(standards['S']), xScale(standards['SS']))}
            y={padding}
            width={Math.abs(xScale(standards['SS']) - xScale(standards['S']))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['S']}
            opacity={0.1}
          />

          {/* SS급 구간 (가장 오른쪽 - 빠른 시간) */}
          <rect
            x={Math.min(xScale(mean - 4 * sigma), xScale(standards['SS']))}
            y={padding}
            width={Math.abs(xScale(standards['SS']) - xScale(mean - 4 * sigma))}
            height={svgHeight - 2 * padding}
            fill={gradeColors['SS']}
            opacity={0.1}
          />

          {/* 정규분포 곡선 */}
          <path
            d={pathData}
            fill="none"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* 사용자 위치 표시 - 등급 색상과 일치 */}
          {userTime && userGrade && (
            <>
              <line
                x1={xScale(userTime)}
                y1={padding}
                x2={xScale(userTime)}
                y2={svgHeight - padding}
                stroke={gradeColors[userGrade as keyof typeof gradeColors]}
                strokeWidth="3"
                className={userGrade && ['SS', 'S', 'A+', 'A'].includes(userGrade) ? 'animate-pulse' : ''}
              />
              {/* 정규분포 곡선과 사용자 막대의 접점 */}
              <circle
                cx={xScale(userTime)}
                cy={yScale(Math.exp(-0.5 * Math.pow((userTime - mean) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI)))}
                r="4"
                fill={gradeColors[userGrade as keyof typeof gradeColors]}
                stroke="white"
                strokeWidth="2"
                className={userGrade && ['SS', 'S', 'A+', 'A'].includes(userGrade) ? 'animate-pulse' : ''}
              />
            </>
          )}

          {/* X축 라벨 - D등급을 SS급과 대칭 위치에 추가 */}
          {Object.entries(standards).filter(([grade]) => grade !== 'D').map(([grade, time]) => (
            <g key={grade}>
              <text
                x={xScale(time)}
                y={svgHeight - 10}
                textAnchor="middle"
                fontSize="12"
                fill={gradeColors[grade as keyof typeof gradeColors]}
                fontWeight="bold"
              >
                {grade}
              </text>
            </g>
          ))}
          {/* D등급을 SS급과 대칭 위치에 표시 */}
          <g key="D">
            <text
              x={xScale(mean + (mean - standards['SS']))}
              y={svgHeight - 10}
              textAnchor="middle"
              fontSize="12"
              fill={gradeColors['D']}
              fontWeight="bold"
            >
              D
            </text>
          </g>


        </svg>

        {/* 범례 - D급부터 SS급까지 순서 */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          {['D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+', 'S', 'SS'].map((grade) => (
            <div key={grade} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded" 
                style={{ backgroundColor: gradeColors[grade as keyof typeof gradeColors], opacity: 0.7 }}
              ></div>
              <span>{grade}급</span>
            </div>
          ))}
          {userTime && userGrade && (
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-2" 
                style={{ backgroundColor: gradeColors[userGrade as keyof typeof gradeColors] }}
              ></div>
              <span>내 기록</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Timer className="text-3xl text-blue-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl font-bold text-gray-800">내 러닝 등급은?</h1>
            </div>
            <p className="text-gray-600 text-lg">당신의 러닝 실력을 측정하고 맞춤 조언을 받아보세요</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Input Form Section */}
        {!results && (
          <Card className="rounded-2xl shadow-lg p-8 mb-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">러닝 기록을 입력해주세요</h2>
                <p className="text-gray-600">거리와 시간을 입력하면 당신의 러닝 등급을 확인할 수 있습니다</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Gender Selection */}
                <div>
                  <Label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline text-blue-600 mr-2 h-4 w-4" />
                    성별
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger className="w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 text-lg">
                      <SelectValue placeholder="성별을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">남성</SelectItem>
                      <SelectItem value="female">여성</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Distance Selection */}
                <div>
                  <Label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Route className="inline text-blue-600 mr-2 h-4 w-4" />
                    러닝 거리
                  </Label>
                  <Select value={selectedDistance} onValueChange={setSelectedDistance}>
                    <SelectTrigger className="w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 text-lg">
                      <SelectValue placeholder="거리를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10km">10km</SelectItem>
                      <SelectItem value="하프마라톤">하프마라톤 (21.1km)</SelectItem>
                      <SelectItem value="풀마라톤">풀마라톤 (42.2km)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Input */}
                <div>
                  <Label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Timer className="inline text-blue-600 mr-2 h-4 w-4" />
                    총 시간
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Input 
                        type="number" 
                        min="0" 
                        max="23"
                        className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 text-lg text-center"
                        placeholder="0"
                        value={hours}
                        onChange={(e) => handleNumberInput(e.target.value, setHours, 23)}
                      />
                      <Label className="block text-xs text-gray-500 text-center mt-1">시간</Label>
                    </div>
                    <div>
                      <Input 
                        type="number" 
                        min="0" 
                        max="59"
                        className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 text-lg text-center"
                        placeholder="22"
                        value={minutes}
                        onChange={(e) => handleNumberInput(e.target.value, setMinutes, 59)}
                        required
                      />
                      <Label className="block text-xs text-gray-500 text-center mt-1">분</Label>
                    </div>
                    <div>
                      <Input 
                        type="number" 
                        min="0" 
                        max="59"
                        className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 text-lg text-center"
                        placeholder="30"
                        value={seconds}
                        onChange={(e) => handleNumberInput(e.target.value, setSeconds, 59)}
                      />
                      <Label className="block text-xs text-gray-500 text-center mt-1">초</Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  등급 확인하기
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {results && (
          <div className="space-y-6">
            {/* Time Display */}
            <Card className="rounded-2xl shadow-lg p-8 text-center">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {results.gender === 'male' ? '남성' : '여성'} · {results.distanceName} 완주 시간
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{results.formattedTime}</div>
                <p className="text-gray-600">시:분:초</p>
              </CardContent>
            </Card>

            {/* Grade Display */}
            <Card className="rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mb-6">당신의 러닝 등급</h3>
                  <div 
                    className={`inline-block px-8 py-4 rounded-2xl text-6xl font-bold shadow-xl animate-grade-reveal mb-4 ${gradeDefinitions[results.grade].color} ${gradeDefinitions[results.grade].textColor} ${
                      ['SS', 'S', 'A+', 'A'].includes(results.grade) ? 'animate-aurora' : ''
                    }`}
                  >
                    {results.grade}
                  </div>
                  <div className="text-lg font-medium text-gray-700 mb-4 animate-bounce-gentle">
                    {results.gender === 'female' && ['SS', 'S', 'A+'].includes(results.grade) 
                      ? gradeDefinitions[results.grade].message.replace('러너', '여성 러너')
                      : gradeDefinitions[results.grade].message}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Normal Distribution Chart */}
            <Card className="rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <BarChart3 className="text-blue-500 mr-3 h-5 w-5" />
                  정규분포 상에서 내 위치
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <NormalDistributionChart distance={selectedDistance} userTime={results.totalSeconds} userGrade={results.grade} gender={results.gender} />

                  {/* Statistics Info */}
                  {(() => {
                    const position = getGradePosition(results.totalSeconds, selectedDistance, results.gender);
                    const timeRange = getGradeTimeRange(results.grade, selectedDistance, results.gender);
                    const gradeColor = {
                      'SS': 'text-purple-500',
                      'S': 'text-yellow-500', 
                      'A': 'text-green-500',
                      'B': 'text-blue-500',
                      'C': 'text-orange-500',
                      'D': 'text-gray-500'
                    };

                    return position && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg">
                          <div className={`text-2xl font-bold ${gradeColor[results.grade as keyof typeof gradeColor] || 'text-purple-600'}`}>
                            {results.grade || 'N/A'}
                          </div>
                          <div className="text-sm text-gray-600">등급</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {position.percentile.toFixed(2)}%
                          </div>
                          <div className="text-sm text-gray-600">상위 퍼센트</div>
                        </div>
                        {timeRange && (
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-lg font-bold text-gray-700">
                              {timeRange.range}
                            </div>
                            <div className="text-sm text-gray-600">{results.grade}급 시간 구간</div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>

            {/* Important Notice Section */}
            <Card className="rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <Lightbulb className="text-yellow-500 mr-3 h-5 w-5" />
                  중요한 안내사항
                </h3>
                <div className="text-gray-700 leading-relaxed bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg font-semibold text-yellow-800">
                    어떤 기록이든 <span className="text-yellow-600">완주 자체만으로도 대단한 것</span>입니다! 🏃‍♀️🏃‍♂️
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Retry Button */}
            <div className="text-center">
              <Button 
                onClick={resetForm}
                className="bg-gray-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-700 transition-all duration-200"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                다시 측정하기
              </Button>
            </div>
          </div>
        )}

        {/* Grade Information Section */}
        {selectedDistance && (
          <Card className="rounded-2xl shadow-lg p-8 mt-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
                {gender === 'male' ? '남성' : '여성'} · {distanceStandards[gender as keyof typeof distanceStandards][selectedDistance as keyof typeof distanceStandards['male']]?.name} 등급 기준표
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(gradeDefinitions).map(([grade, info]) => {
                  const timeRange = getGradeTimeRange(grade, selectedDistance, gender);

                  return (
                    <div 
                      key={grade} 
                      className={`${info.color} p-4 rounded-xl text-center`}
                    >
                      <div className="text-2xl font-bold mb-2 text-white">{grade}</div>
                      <div className="text-sm text-white">
                        {timeRange ? timeRange.range : ''}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">© 2024 내 러닝 등급은? - 당신의 러닝 여정을 응원합니다!</p>
        </div>
      </footer>
    </div>
  );
}