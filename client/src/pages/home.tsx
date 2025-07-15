import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Timer, Route, Trophy, RotateCcw, Lightbulb } from "lucide-react";

interface GradeInfo {
  color: string;
  textColor: string;
  message: string;
  advice: string;
  pace: number;
}

const gradeDefinitions: Record<string, GradeInfo> = {
  'SS': {
    color: 'grade-ss',
    textColor: 'text-white',
    message: '경이로운 러닝 실력! 당신은 러닝 머신 그 자체입니다! 계속해서 한계를 뛰어넘어보세요!',
    advice: '이미 최상급이시군요! 이제는 기록 단축뿐 아니라 부상 방지를 위한 스트레칭과 코어 운동을 루틴에 더하고, 마라톤 등 장거리 도전을 통해 더 큰 성취를 목표로 해보세요.',
    pace: 4.0
  },
  'S': {
    color: 'grade-s',
    textColor: 'text-white',
    message: '환상적인 기록! 당신은 S급 러너입니다! 조금만 더 노력하면 SS 등급도 꿈이 아닙니다!',
    advice: '훌륭한 페이스를 유지하고 계십니다. 이제는 인터벌 트레이닝이나 템포 런을 주 1-2회 추가하여 심폐 지구력과 속도 지속 능력을 강화해보세요. 꾸준한 보강 운동도 잊지 마세요.',
    pace: 4.33
  },
  'A': {
    color: 'grade-a',
    textColor: 'text-white',
    message: '멋진 러너! A 등급에 오신 것을 환영합니다! 목표를 향해 순항 중이시네요!',
    advice: '기본기가 탄탄한 A 등급이십니다. 앞으로는 주 1회 정도 "조금 더 빨리" 달리는 훈련을 추가해 보세요. 예를 들어, 1km 질주 후 1분 휴식하는 인터벌 훈련이나, 꾸준히 같은 페이스를 유지하는 템포 런이 도움이 됩니다.',
    pace: 4.67
  },
  'B': {
    color: 'grade-b',
    textColor: 'text-white',
    message: '꾸준히 달리는 당신이 챔피언! B 등급은 곧 다음 레벨로 나아갈 준비가 되어 있다는 뜻입니다!',
    advice: '페이스 유지가 중요합니다. "일정한 속도로 달리기" 훈련에 집중해 보세요. 짧은 거리를 조금 더 빠르게 달려보거나, 천천히 달리는 시간을 늘려 유산소 능력을 키우는 것도 좋습니다. 주 2-3회 꾸준히 달리는 습관을 들이세요.',
    pace: 5.0
  },
  'C': {
    color: 'grade-c',
    textColor: 'text-white',
    message: '대단해요! C 등급은 러닝의 재미를 알아가고 있다는 증거! 한 걸음씩 나아가면 됩니다!',
    advice: '꾸준히 달리는 것이 가장 중요합니다. 무리하지 않고 "걷기-뛰기"를 반복하는 인터벌 훈련부터 시작해 보세요. 처음에는 20~30분 정도라도 좋습니다. 러닝 전후 스트레칭은 필수!',
    pace: 5.5
  },
  'D': {
    color: 'grade-d',
    textColor: 'text-white',
    message: '러닝을 시작한 당신은 이미 승자! D 등급은 앞으로의 성장이 더 기대되는 출발점입니다!',
    advice: '가장 중요한 것은 "꾸준함"입니다. 주 2회 정도, 15~20분이라도 좋으니 규칙적으로 달리세요. 처음에는 걷는 시간이 많아도 괜찮습니다. 러닝화 선택 등 기본적인 준비도 중요합니다!',
    pace: 6.0
  },
  'F': {
    color: 'grade-f',
    textColor: 'text-white',
    message: '괜찮아요! 러닝은 언제든 시작할 수 있습니다! 지금이 바로 당신의 러닝 여정의 첫 페이지입니다!',
    advice: '무리하지 않는 것이 가장 중요합니다. 걷기부터 시작해서 점차 걷는 시간을 줄이고 뛰는 시간을 늘려보세요. 10분 걷고 1분 뛰는 것부터 시작해서 점차 러닝 시간을 늘려나가는 것을 추천합니다. 러닝의 즐거움을 느껴보세요!',
    pace: Infinity
  }
};

const gradeTable = [
  { grade: 'SS', range: '4:00/km 이하', color: 'grade-ss' },
  { grade: 'S', range: '4:01 ~ 4:20/km', color: 'grade-s' },
  { grade: 'A', range: '4:21 ~ 4:40/km', color: 'grade-a' },
  { grade: 'B', range: '4:41 ~ 5:00/km', color: 'grade-b' },
  { grade: 'C', range: '5:01 ~ 5:30/km', color: 'grade-c' },
  { grade: 'D', range: '5:31 ~ 6:00/km', color: 'grade-d' },
  { grade: 'F', range: '6:01/km 이상', color: 'grade-f' }
];

export default function Home() {
  const [distance, setDistance] = useState<string>('');
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [results, setResults] = useState<{
    pace: number;
    grade: string;
    formattedPace: string;
  } | null>(null);

  const calculatePace = (distance: number, totalMinutes: number): number => {
    return totalMinutes / distance;
  };

  const determineGrade = (pacePerKm: number): string => {
    if (pacePerKm <= 4.0) return 'SS';
    if (pacePerKm <= 4.33) return 'S';
    if (pacePerKm <= 4.67) return 'A';
    if (pacePerKm <= 5.0) return 'B';
    if (pacePerKm <= 5.5) return 'C';
    if (pacePerKm <= 6.0) return 'D';
    return 'F';
  };

  const formatPace = (paceInMinutes: number): string => {
    const minutes = Math.floor(paceInMinutes);
    const seconds = Math.round((paceInMinutes - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const distanceNum = parseFloat(distance);
    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;
    const secondsNum = parseInt(seconds) || 0;

    if (!distanceNum || distanceNum <= 0) {
      alert('올바른 거리를 입력해주세요.');
      return;
    }

    if (minutesNum === 0 && secondsNum === 0 && hoursNum === 0) {
      alert('올바른 시간을 입력해주세요.');
      return;
    }

    const totalMinutes = (hoursNum * 60) + minutesNum + (secondsNum / 60);
    
    if (totalMinutes <= 0) {
      alert('올바른 시간을 입력해주세요.');
      return;
    }

    const pace = calculatePace(distanceNum, totalMinutes);
    const grade = determineGrade(pace);
    const formattedPace = formatPace(pace);

    setResults({
      pace,
      grade,
      formattedPace
    });
  };

  const resetForm = () => {
    setDistance('');
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
                {/* Distance Input */}
                <div>
                  <Label htmlFor="distance" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Route className="inline text-blue-600 mr-2 h-4 w-4" />
                    총 거리 (km)
                  </Label>
                  <Input 
                    type="number" 
                    id="distance" 
                    step="0.1" 
                    min="0.1" 
                    max="100"
                    className="w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 text-lg"
                    placeholder="예: 5.0"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    required
                  />
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
            {/* Pace Display */}
            <Card className="rounded-2xl shadow-lg p-8 text-center">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">당신의 평균 페이스</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{results.formattedPace}</div>
                <p className="text-gray-600">분/km</p>
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
        <Card className="rounded-2xl shadow-lg p-8 mt-8">
          <CardContent className="p-0">
            <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">러닝 등급 기준표</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gradeTable.map((item, index) => (
                <div 
                  key={item.grade} 
                  className={`${item.color} p-4 rounded-xl text-center ${
                    item.grade === 'F' ? 'md:col-span-1 lg:col-span-3' : ''
                  }`}
                >
                  <div className="text-2xl font-bold mb-2">{item.grade}</div>
                  <div className="text-sm">{item.range}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
