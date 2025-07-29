import React, { useState, useEffect } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import { Link } from 'wouter';
import { Moon, Sun, Globe } from 'lucide-react'; // Import icons
import logoSvg from '@assets/logo.svg'; // Import logo

// Translation object (copied from home.tsx for consistency)
const translations = {
  ko: {
    title: "RunLevel",
    subtitle: "내 러닝 등급은?",
    // ... other translations as needed
  },
  en: {
    title: "RunLevel",
    subtitle: "What's My Running Grade?",
    // ... other translations as needed
  }
};

const PaceCalculatorPage: React.FC = () => {
  const [distance, setDistance] = useState<string>('');
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [paceMinutes, setPaceMinutes] = useState<string>('');
  const [paceSeconds, setPaceSeconds] = useState<string>('');

  const [result, setResult] = useState<string>('');
  const [calculatedTotalSeconds, setCalculatedTotalSeconds] = useState<number | null>(null);
  const [calculatedPaceInSeconds, setCalculatedPaceInSeconds] = useState<number | null>(null);
  const [calculationMode, setCalculationMode] = useState<'pace' | 'time' | 'distance'>('pace');
  const [gender, setGender] = useState<'남성' | '여성'>('남성'); // Gender state

  const [language, setLanguage] = useState<'ko' | 'en'>('ko'); // Language state
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Theme state

  // Theme management (copied from home.tsx)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  const t = translations[language]; // Get current translations

  useEffect(() => {
    resetFields();
  }, [calculationMode]);

  const resetFields = () => {
    setDistance('');
    setHours('');
    setMinutes('');
    setSeconds('');
    setPaceMinutes('');
    setPaceSeconds('');
    setResult('');
    setCalculatedTotalSeconds(null);
    setCalculatedPaceInSeconds(null);
    setGender('남성');
  };

  const calculatePace = () => {
    const dist = parseFloat(distance);
    const h = parseFloat(hours || '0');
    const m = parseFloat(minutes || '0');
    const s = parseFloat(seconds || '0');

    if (isNaN(dist) || dist <= 0) {
      setResult('유효한 거리를 입력해주세요.');
      return;
    }

    const totalSeconds = h * 3600 + m * 60 + s;
    if (totalSeconds <= 0) {
      setResult('유효한 시간을 입력해주세요.');
      return;
    }

    const paceInSecondsPerKm = totalSeconds / dist;
    const paceMin = Math.floor(paceInSecondsPerKm / 60);
    const paceSec = Math.round(paceInSecondsPerKm % 60);

    setResult(`예상 페이스: ${paceMin}분 ${paceSec}초/km`);
    setCalculatedTotalSeconds(null);
    setCalculatedPaceInSeconds(paceInSecondsPerKm);
  };

  const calculateTime = () => {
    const dist = parseFloat(distance);
    const pMin = parseFloat(paceMinutes || '0');
    const pSec = parseFloat(paceSeconds || '0');

    if (isNaN(dist) || dist <= 0) {
      setResult('유효한 거리를 입력해주세요.');
      return;
    }

    const paceInSecondsPerKm = pMin * 60 + pSec;
    if (paceInSecondsPerKm <= 0) {
      setResult('유효한 페이스를 입력해주세요.');
      return;
    }

    const totalSeconds = dist * paceInSecondsPerKm;
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = Math.round(totalSeconds % 60);

    setResult(`예상 시간: ${h}시간 ${m}분 ${s}초`);
    setCalculatedTotalSeconds(totalSeconds);
    setCalculatedPaceInSeconds(null);
  };

  const calculateDistance = () => {
    const h = parseFloat(hours || '0');
    const m = parseFloat(minutes || '0');
    const s = parseFloat(seconds || '0');
    const pMin = parseFloat(paceMinutes || '0');
    const pSec = parseFloat(paceSeconds || '0');

    const totalSeconds = h * 3600 + m * 60 + s;
    if (totalSeconds <= 0) {
      setResult('유효한 시간을 입력해주세요.');
      return;
    }

    const paceInSecondsPerKm = pMin * 60 + pSec;
    if (paceInSecondsPerKm <= 0) {
      setResult('유효한 페이스를 입력해주세요.');
      return;
    }

    const calculatedDistance = totalSeconds / paceInSecondsPerKm;
    setResult(`예상 거리: ${calculatedDistance.toFixed(2)} km`);
    setCalculatedTotalSeconds(null);
    setCalculatedPaceInSeconds(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors">
      {/* Header (copied from home.tsx) */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="relative flex items-center justify-center">
            {/* Central content - Clickable to go home */}
            <Link href="/" className="text-center cursor-pointer">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <img src={logoSvg} alt="RunLevel Logo" className="mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{t.title}</h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">{t.subtitle}</p>
            </Link>
            
            {/* Buttons positioned absolutely to the right */}
            <div className="absolute right-0 flex items-center gap-1 sm:gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs sm:text-sm px-2 sm:px-3"
              >
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden xs:inline">{language === 'ko' ? 'EN' : '한글'}</span>
                <span className="xs:hidden">{language === 'ko' ? 'EN' : '한'}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 sm:px-3"
              >
                {theme === 'light' ? <Moon className="h-3 w-3 sm:h-4 sm:w-4" /> : <Sun className="h-3 w-3 sm:h-4 sm:w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="flex justify-center mb-6">
          <button onClick={resetFields} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-gray-600 dark:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-ccw mr-2 h-4 w-4"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>다시 측정하기</button>
        </div>

        <Card className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">성별 선택</CardTitle>
          </CardHeader>
          <CardContent>
            <ToggleGroup type="single" value={gender} onValueChange={(value: "남성" | "여성") => setGender(value)} className="grid grid-cols-2 gap-2">
              <ToggleGroupItem value="남성" aria-label="남성" className="h-12 text-base data-[state=on]:bg-blue-500 data-[state=on]:text-white">
                남성
              </ToggleGroupItem>
              <ToggleGroupItem value="여성" aria-label="여성" className="h-12 text-base data-[state=on]:bg-pink-500 data-[state=on]:text-white">
                여성
              </ToggleGroupItem>
            </ToggleGroup>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">계산 모드 선택</CardTitle>
          </CardHeader>
          <CardContent>
            <ToggleGroup type="single" value={calculationMode} onValueChange={(value: "pace" | "time" | "distance") => setCalculationMode(value)} className="grid grid-cols-3 gap-2">
              <ToggleGroupItem value="pace" aria-label="페이스 계산" className="h-12 text-base data-[state=on]:bg-green-500 data-[state=on]:text-white">
                페이스 계산
              </ToggleGroupItem>
              <ToggleGroupItem value="time" aria-label="시간 계산" className="h-12 text-base data-[state=on]:bg-green-500 data-[state=on]:text-white">
                시간 계산
              </ToggleGroupItem>
              <ToggleGroupItem value="distance" aria-label="거리 계산" className="h-12 text-base data-[state=on]:bg-green-500 data-[state=on]:text-white">
                거리 계산
              </ToggleGroupItem>
            </ToggleGroup>
          </CardContent>
        </Card>

        {calculationMode === 'pace' && (
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">페이스 계산</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div>
              <Label htmlFor="distance" className="text-gray-700 dark:text-gray-300">거리 (km)</Label>
              <Input id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="예: 10" className="mt-1 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
            </div>
            <div>
              <Label className="text-gray-700 dark:text-gray-300">시간</Label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <Input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="시" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                <Input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="분" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                <Input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} placeholder="초" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
              </div>
            </div>
            <Button onClick={calculatePace} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">계산하기</Button>
            {result && (
              <>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-800 dark:text-blue-200 font-medium flex items-center justify-between">
                  <span>{result}</span>
                  {renderBadges(gender)}
                </div>
                {renderGradeTable(gender)}
              </>
            )}
          </CardContent>
          </Card>
        )}

        {calculationMode === 'time' && (
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">시간 계산</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="distance" className="text-gray-700 dark:text-gray-300">거리 (km)</Label>
                <Input id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="예: 10" className="mt-1 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
              </div>
              <div>
                <Label className="text-gray-700 dark:text-gray-300">페이스 (분/km)</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Input type="number" value={paceMinutes} onChange={(e) => setPaceMinutes(e.target.value)} placeholder="분" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  <Input type="number" value={paceSeconds} onChange={(e) => setPaceSeconds(e.target.value)} placeholder="초" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                </div>
              </div>
              <Button onClick={calculateTime} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">계산하기</Button>
              {result && (
                <>
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-800 dark:text-blue-200 font-medium flex items-center justify-between">
                    <span>{result}</span>
                    {renderBadges(gender)}
                  </div>
                  {renderGradeTable(gender)}
                </>
              )}
            </CardContent>
          </Card>
        )}

        {calculationMode === 'distance' && (
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">거리 계산</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-700 dark:text-gray-300">시간</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <Input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="시" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  <Input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="분" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  <Input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} placeholder="초" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div>
                <Label className="text-gray-700 dark:text-gray-300">페이스 (분/km)</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Input type="number" value={paceMinutes} onChange={(e) => setPaceMinutes(e.target.value)} placeholder="분" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  <Input type="number" value={paceSeconds} onChange={(e) => setPaceSeconds(e.target.value)} placeholder="초" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                </div>
              </div>
              <Button onClick={calculateDistance} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">계산하기</Button>
              {result && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-800 dark:text-blue-200 font-medium">
                  {result}
                </div>
              )}
            </CardContent>
          </Card>
        )}
        
      </main>
    </div>
  );
};

export default PaceCalculatorPage;