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
    advice: 'SS급 엘리트 러너로서 기록 단축뿐만 아니라 부상 방지를 위한 스트레칭과 코어 운동, 회복 훈련에 집중하세요. 전문적인 코칭과 함께 국제 대회 도전을 고려해보실 수 있습니다.'
  },
  'S': {
    color: 'grade-s',
    textColor: 'text-white',
    message: '대단한 기록! S급 상위권 실력입니다! 정말 자랑스러운 결과네요!',
    advice: 'S급 상위권 러너로서 인터벌 트레이닝과 템포 런을 활용해 더 높은 수준을 목표로 해보세요. 마라톤 대회 참여나 개인 기록 경신에 도전하실 때입니다.'
  },
  'A': {
    color: 'grade-a',
    textColor: 'text-white',
    message: '훌륭한 기록! A급 중상위권 실력을 가지고 계시네요! 꾸준한 노력의 결과입니다!',
    advice: 'A급 중상위권 러너로서 주 1-2회 속도 훈련을 추가해보세요. 5분 빠르게 달리고 2분 회복하는 인터벌 훈련이나 일정한 템포로 달리는 훈련이 도움됩니다.'
  },
  'B': {
    color: 'grade-b',
    textColor: 'text-white',
    message: '좋은 기록입니다! B급 평균 수준의 러너 실력을 보여주고 계세요! 꾸준히 발전하고 있어요!',
    advice: 'B급 평균 수준에서 한 단계 더 올라가려면 일정한 페이스 유지 훈련에 집중하세요. 주 2-3회 규칙적인 러닝과 함께 점진적으로 거리나 속도를 늘려보세요.'
  },
  'C': {
    color: 'grade-c',
    textColor: 'text-white',
    message: '괜찮은 시작입니다! C급으로 러닝에 익숙해지고 있는 단계네요! 조금씩 발전하고 있어요!',
    advice: 'C급에서 기초 체력 향상에 집중하세요. 걷기와 가벼운 조깅을 병행하며 점진적으로 러닝 시간을 늘려가세요. 무리하지 않는 것이 중요합니다.'
  },
  'D': {
    color: 'grade-f',
    textColor: 'text-white',
    message: '훌륭한 도전입니다! D급으로 러닝을 시작하신 것만으로도 대단해요! 앞으로 무궁무진한 발전 가능성이 있습니다!',
    advice: 'D급 초심자로서 부상 없이 꾸준히 하는 것이 가장 중요합니다. 걷기부터 시작해서 점차 러닝 비율을 늘려가세요. 올바른 러닝화와 스트레칭으로 기초를 다지세요.'
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
      'SS': 38 * 60 + 34,        // 38분 34초 미만 (평균 - 2σ 미만)
      'S': 48 * 60 + 34,         // 38분 34초 ~ 48분 34초 (평균 - 2σ ~ 평균 - 1σ)
      'A': 58 * 60 + 34,         // 48분 34초 ~ 58분 34초 (평균 - 1σ ~ 평균)
      'B': 68 * 60 + 34,         // 58분 34초 ~ 68분 34초 (평균 ~ 평균 + 1σ)
      'C': 78 * 60 + 34,         // 68분 34초 ~ 78분 34초 (평균 + 1σ ~ 평균 + 2σ)
      'D': Infinity              // 78분 34초 초과 (평균 + 2σ 이상)
    }
  },
  '하프마라톤': {
    name: '하프마라톤 (21.1km)',
    mean: 125 * 60 + 51,         // 평균: 2시간 5분 51초
    sigma: 20 * 60,              // 표준편차: 20분
    standards: {
      'SS': 85 * 60 + 51,        // 1시간 25분 51초 미만
      'S': 105 * 60 + 51,        // 1시간 25분 51초 ~ 1시간 45분 51초
      'A': 125 * 60 + 51,        // 1시간 45분 51초 ~ 2시간 5분 51초
      'B': 145 * 60 + 51,        // 2시간 5분 51초 ~ 2시간 25분 51초
      'C': 165 * 60 + 51,        // 2시간 25분 51초 ~ 2시간 45분 51초
      'D': Infinity              // 2시간 45분 51초 초과
    }
  },
  '풀마라톤': {
    name: '풀마라톤 (42.2km)',
    mean: 272 * 60 + 49,         // 평균: 4시간 32분 49초
    sigma: 35 * 60,              // 표준편차: 35분
    standards: {
      'SS': 202 * 60 + 49,       // 3시간 22분 49초 미만
      'S': 237 * 60 + 49,        // 3시간 22분 49초 ~ 3시간 57분 49초
      'A': 272 * 60 + 49,        // 3시간 57분 49초 ~ 4시간 32분 49초
      'B': 307 * 60 + 49,        // 4시간 32분 49초 ~ 5시간 7분 49초
      'C': 342 * 60 + 49,        // 5시간 7분 49초 ~ 5시간 42분 49초
      'D': Infinity              // 5시간 42분 49초 초과
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
    
    if (totalSeconds < standards['SS']) return 'SS';
    if (totalSeconds < standards['S']) return 'S';
    if (totalSeconds < standards['A']) return 'A';
    if (totalSeconds < standards['B']) return 'B';
    if (totalSeconds < standards['C']) return 'C';
    return 'D';
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
    const percentile = Math.round((1 - cdf) * 100);
    
    return {
      zScore,
      percentile: Math.max(0, Math.min(100, percentile))
    };
  };

  const NormalDistributionChart = ({ distance, userTime }: { distance: string; userTime?: number }) => {
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
      return ((time - minTime) / (maxTime - minTime)) * (svgWidth - 2 * padding) + padding;
    };
    
    const yScale = (y: number) => svgHeight - padding - (y / maxY) * (svgHeight - 2 * padding);
    
    // 곡선 경로 생성
    const pathData = points.map((point, index) => {
      const x = xScale(point.time);
      const y = yScale(point.y);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    // 등급 구간 표시
    const gradeColors = {
      'SS': '#8B5CF6',
      'S': '#F59E0B', 
      'A': '#10B981',
      'B': '#3B82F6',
      'C': '#F97316',
      'D': '#6B7280'
    };

    return (
      <div className="w-full">
        <svg width="100%" height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="border rounded-lg bg-white">
          {/* 등급 구간 배경 */}
          {Object.entries(standards).map(([grade, time]) => {
            if (grade === 'D') return null;
            const nextGrade = grade === 'SS' ? null : 
                            grade === 'S' ? 'SS' :
                            grade === 'A' ? 'S' :
                            grade === 'B' ? 'A' :
                            grade === 'C' ? 'B' : 'C';
            
            const startTime = nextGrade ? standards[nextGrade] : mean - 4 * sigma;
            const endTime = time;
            
            const x1 = xScale(startTime);
            const x2 = xScale(endTime);
            
            return (
              <rect
                key={grade}
                x={x1}
                y={padding}
                width={x2 - x1}
                height={svgHeight - 2 * padding}
                fill={gradeColors[grade as keyof typeof gradeColors]}
                opacity={0.1}
              />
            );
          })}
          
          {/* D 등급 구간 (가장 우측) */}
          <rect
            x={xScale(standards['C'])}
            y={padding}
            width={xScale(mean + 4 * sigma) - xScale(standards['C'])}
            height={svgHeight - 2 * padding}
            fill={gradeColors['D']}
            opacity={0.1}
          />
          
          {/* 정규분포 곡선 */}
          <path
            d={pathData}
            fill="none"
            stroke="#1F2937"
            strokeWidth="2"
          />
          
          {/* 평균선 */}
          <line
            x1={xScale(mean)}
            y1={padding}
            x2={xScale(mean)}
            y2={svgHeight - padding}
            stroke="#DC2626"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          
          {/* 사용자 위치 표시 */}
          {userTime && (
            <>
              <line
                x1={xScale(userTime)}
                y1={padding}
                x2={xScale(userTime)}
                y2={svgHeight - padding}
                stroke="#7C3AED"
                strokeWidth="3"
              />
              <circle
                cx={xScale(userTime)}
                cy={yScale(Math.exp(-0.5 * Math.pow((userTime - mean) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI)))}
                r="6"
                fill="#7C3AED"
              />
            </>
          )}
          
          {/* X축 라벨 */}
          {Object.entries(standards).map(([grade, time]) => (
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
          
          {/* 평균 라벨 */}
          <text
            x={xScale(mean)}
            y={25}
            textAnchor="middle"
            fontSize="12"
            fill="#DC2626"
            fontWeight="bold"
          >
            평균
          </text>
        </svg>
        
        {/* 범례 */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          {Object.entries(gradeColors).map(([grade, color]) => (
            <div key={grade} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded" 
                style={{ backgroundColor: color, opacity: 0.7 }}
              ></div>
              <span>{grade}급</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="w-4 h-2 bg-red-600" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
            <span>평균</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-2 bg-purple-600"></div>
            <span>내 기록</span>
          </div>
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
                      ['SS', 'S', 'A'].includes(results.grade) ? 'animate-aurora' : ''
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
                  <NormalDistributionChart distance={selectedDistance} userTime={results.totalSeconds} />
                  
                  {/* Statistics Info */}
                  {(() => {
                    const position = getGradePosition(results.totalSeconds, selectedDistance);
                    return position && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{results.grade}</div>
                          <div className="text-sm text-gray-600">등급</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {position.percentile}%
                          </div>
                          <div className="text-sm text-gray-600">상위 퍼센트</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {position.zScore > 0 ? '+' : ''}{position.zScore.toFixed(2)}σ
                          </div>
                          <div className="text-sm text-gray-600">표준편차</div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>

            {/* Advice Section */}
            <Card className="rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <Lightbulb className="text-yellow-500 mr-3 h-5 w-5" />
                  맞춤 러닝 조언
                </h3>
                <div className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-xl">
                  {gradeDefinitions[results.grade].advice}
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
                      timeRange = `${formatTime(nextTime)} ~ ${formatTime(currentTime)}`;
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
