import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Timer, Route, Trophy, RotateCcw, Lightbulb, BarChart3 } from "lucide-react";

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
  '10km': {
    name: '10km',
    mean: 58 * 60 + 34,          // 평균: 58분 34초
    sigma: 10 * 60,              // 표준편차: 10분
    standards: {
      'SS': 40 * 60,             // 40분 미만
      'S': 45 * 60,              // 40분 ~ 45분
      'A+': 50 * 60,             // 45분 ~ 50분
      'A': 55 * 60,              // 50분 ~ 55분
      'B+': 60 * 60,             // 55분 ~ 60분
      'B': 65 * 60,              // 60분 ~ 65분
      'C+': 70 * 60,             // 65분 ~ 70분
      'C': 75 * 60,              // 70분 ~ 75분
      'D+': 80 * 60,             // 75분 ~ 80분
      'D': Infinity              // 80분 초과
    }
  },
  '하프마라톤': {
    name: '하프마라톤 (21.1km)',
    mean: 125 * 60 + 51,         // 평균: 2시간 5분 51초
    sigma: 20 * 60,              // 표준편차: 20분
    standards: {
      'SS': 90 * 60,             // 1시간 30분 미만
      'S': 100 * 60,             // 1시간 30분 ~ 1시간 40분
      'A+': 110 * 60,            // 1시간 40분 ~ 1시간 50분
      'A': 120 * 60,             // 1시간 50분 ~ 2시간
      'B+': 130 * 60,            // 2시간 ~ 2시간 10분
      'B': 140 * 60,             // 2시간 10분 ~ 2시간 20분
      'C+': 150 * 60,            // 2시간 20분 ~ 2시간 30분
      'C': 160 * 60,             // 2시간 30분 ~ 2시간 40분
      'D+': 170 * 60,            // 2시간 40분 ~ 2시간 50분
      'D': Infinity              // 2시간 50분 초과
    }
  },
  '풀마라톤': {
    name: '풀마라톤 (42.2km)',
    mean: 272 * 60 + 49,         // 평균: 4시간 32분 49초
    sigma: 35 * 60,              // 표준편차: 35분
    standards: {
      'SS': 3 * 3600 + 40 * 60 + 58,   // 3시간 40분 58초 미만
      'S': 3 * 3600 + 56 * 60 + 22,    // 3시간 40분 58초 ~ 3시간 56분 22초
      'A+': 4 * 3600 + 7 * 60 + 28,    // 3시간 56분 22초 ~ 4시간 7분 28초
      'A': 4 * 3600 + 16 * 60 + 57,    // 4시간 7분 28초 ~ 4시간 16분 57초
      'B+': 4 * 3600 + 25 * 60 + 50,   // 4시간 16분 57초 ~ 4시간 25분 50초
      'B': 4 * 3600 + 34 * 60 + 42,    // 4시간 25분 50초 ~ 4시간 34분 42초
      'C+': 4 * 3600 + 44 * 60 + 11,   // 4시간 34분 42초 ~ 4시간 44분 11초
      'C': 4 * 3600 + 55 * 60 + 17,    // 4시간 44분 11초 ~ 4시간 55분 17초
      'D+': 5 * 3600 + 10 * 60 + 41,   // 4시간 55분 17초 ~ 5시간 10분 41초
      'D': Infinity                      // 5시간 10분 41초 초과
    }
  }
};

export default function Home() {
  const [selectedDistance, setSelectedDistance] = useState<string>('');
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [results, setResults] = useState<{
    totalSeconds: number;
    grade: string;
    formattedTime: string;
    distanceName: string;
  } | null>(null);

  const determineGrade = (totalSeconds: number, distance: string): string => {
    if (!distance || !distanceStandards[distance as keyof typeof distanceStandards]) return 'D';
    
    const standards = distanceStandards[distance as keyof typeof distanceStandards].standards;
    
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

    const grade = determineGrade(totalSeconds, selectedDistance);
    const formattedTime = formatTime(totalSeconds);
    const distanceName = distanceStandards[selectedDistance as keyof typeof distanceStandards].name;

    setResults({
      totalSeconds,
      grade,
      formattedTime,
      distanceName
    });
  };

  const resetForm = () => {
    setSelectedDistance('');
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

  const getGradePosition = (time: number, distance: string) => {
    if (!distance || !distanceStandards[distance as keyof typeof distanceStandards]) return null;
    
    const { mean, sigma } = distanceStandards[distance as keyof typeof distanceStandards];
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

  const NormalDistributionChart = ({ distance, userTime, userGrade }: { distance: string; userTime?: number; userGrade?: string }) => {
    if (!distance || !distanceStandards[distance as keyof typeof distanceStandards]) return null;
    
    const { mean, sigma, standards } = distanceStandards[distance as keyof typeof distanceStandards];
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
          
          {/* X축 라벨 - SS급이 오른쪽(빠른 시간)에 위치 */}
          {[
            ['D', mean + 3.5 * sigma],
            ['D+', standards['D+']],
            ['C', standards['C']],
            ['C+', standards['C+']],
            ['B', standards['B']],
            ['B+', standards['B+']],
            ['A', standards['A']],
            ['A+', standards['A+']],
            ['S', standards['S']],
            ['SS', standards['SS']]
          ].map(([grade, time]) => (
            <g key={grade}>
              <text
                x={xScale(time as number)}
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
          

        </svg>
        
        {/* 범례 - SS급부터 D급까지 내림차순 */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          {['SS', 'S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D'].map((grade) => (
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
                <h3 className="text-xl font-semibold text-gray-700 mb-4">{results.distanceName} 완주 시간</h3>
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
                    {gradeDefinitions[results.grade].message}
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
                  <NormalDistributionChart distance={selectedDistance} userTime={results.totalSeconds} userGrade={results.grade} />
                  
                  {/* Statistics Info */}
                  {(() => {
                    const position = getGradePosition(results.totalSeconds, selectedDistance);
                    const gradeColor = {
                      'SS': 'text-purple-500',
                      'S': 'text-yellow-500', 
                      'A': 'text-green-500',
                      'B': 'text-blue-500',
                      'C': 'text-orange-500',
                      'D': 'text-gray-500'
                    };
                    
                    return position && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg">
                          <div className={`text-2xl font-bold ${gradeColor[results.grade as keyof typeof gradeColor] || 'text-purple-600'}`}>
                            {results.grade || 'N/A'}
                          </div>
                          <div className="text-sm text-gray-600">등급</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {position.percentile}%
                          </div>
                          <div className="text-sm text-gray-600">상위 퍼센트</div>
                        </div>
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
                  <p className="font-medium text-yellow-800 mb-3">📊 기록에 대한 중요한 점:</p>
                  <p className="mb-3">
                    이 기록들은 <strong>'대회에 참가하여 완주한 사람들'</strong>의 평균입니다. 
                    따라서 달리기를 전혀 하지 않는 사람들까지 포함하면 평균 기록은 훨씬 느려질 것입니다.
                  </p>
                  <p className="text-lg font-semibold text-yellow-800">
                    즉, 어떤 기록이든 <span className="text-yellow-600">완주 자체만으로도 대단한 것</span>입니다! 🏃‍♀️🏃‍♂️
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
                {distanceStandards[selectedDistance as keyof typeof distanceStandards]?.name} 등급 기준표
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(gradeDefinitions).map(([grade, info]) => {
                  const standards = distanceStandards[selectedDistance as keyof typeof distanceStandards]?.standards;
                  let timeRange = '';
                  
                  if (standards) {
                    if (grade === 'SS') {
                      timeRange = `${formatTime(standards[grade])} 미만`;
                    } else if (grade === 'D') {
                      timeRange = `${formatTime(standards['C'])} 초과`;
                    } else {
                      const currentTime = standards[grade];
                      const nextGrade = grade === 'S' ? 'SS' : 
                                       grade === 'A' ? 'S' :
                                       grade === 'B' ? 'A' : 
                                       grade === 'C' ? 'B' : 'C';
                      const nextTime = standards[nextGrade];
                      timeRange = `${formatTime(currentTime)} ~ ${formatTime(nextTime)}`;
                    }
                  }
                  
                  return (
                    <div 
                      key={grade} 
                      className={`${info.color} p-4 rounded-xl text-center`}
                    >
                      <div className="text-2xl font-bold mb-2 text-white">{grade}</div>
                      <div className="text-sm text-white">{timeRange}</div>
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
