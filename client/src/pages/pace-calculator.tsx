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

  const renderBadges = () => {
    if (calculationMode === 'time' && distance === '42.195' && calculatedTotalSeconds !== null) {
      if (calculatedTotalSeconds >= 7200 && calculatedTotalSeconds < 10800) {
        return (
          <span className="ml-4 px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
            Sub-3
          </span>
        );
      } else if (calculatedTotalSeconds >= 10800 && calculatedTotalSeconds < 14400) {
        return (
          <span className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
            Sub-4
          </span>
        );
      }
    }

    if (calculationMode === 'pace' && distance === '42.195' && calculatedPaceInSeconds !== null) {
      const paceInSeconds = calculatedPaceInSeconds;
      const sub4MinPace = 4 * 60 + 16;
      const sub4MaxPace = 5 * 60 + 41;

      if (paceInSeconds < sub4MinPace) {
        return (
          <span className="ml-4 px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
            Sub-3
          </span>
        );
      } else if (paceInSeconds >= sub4MinPace && paceInSeconds <= sub4MaxPace) {
        return (
          <span className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
            Sub-4
          </span>
        );
      }
    }

    return null;
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
        <div className="flex justify-center space-x-4 mb-6">
          <Button variant="outline" onClick={resetFields}>초기화</Button>
        </div>
        <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">러닝 계산기</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 계산 모드 선택 */}
            <div className="flex justify-center mb-4">
              <ToggleGroup type="single" value={calculationMode} onValueChange={(value: 'pace' | 'time' | 'distance') => value && setCalculationMode(value)}>
                <ToggleGroupItem value="pace">페이스 계산</ToggleGroupItem>
                <ToggleGroupItem value="time">시간 계산</ToggleGroupItem>
                <ToggleGroupItem value="distance">거리 계산</ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 거리 입력 */}
            {(calculationMode === 'pace' || calculationMode === 'time') && (
              <div className="space-y-2">
                <Label htmlFor="distance">거리 (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="예: 10"
                />
                {(calculationMode === 'pace' || calculationMode === 'time') && (
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" onClick={() => setDistance('42.195')}>풀코스</Button>
                    <Button variant="outline" onClick={() => setDistance('21.1')}>하프</Button>
                    <Button variant="outline" onClick={() => setDistance('10')}>10km</Button>
                    <Button variant="outline" onClick={() => setDistance('5')}>5km</Button>
                  </div>
                )}
              </div>
            )}

            {/* 시간 입력 */}
            {(calculationMode === 'pace' || calculationMode === 'distance') && (
              <div className="space-y-2">
                <Label>시간</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="시"
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    placeholder="분"
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    placeholder="초"
                    className="w-1/3"
                  />
                </div>
              </div>
            )}

            {/* 페이스 입력 */}
            {(calculationMode === 'time' || calculationMode === 'distance') && (
              <div className="space-y-2">
                <Label>페이스 (분:초/km)</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={paceMinutes}
                    onChange={(e) => setPaceMinutes(e.target.value)}
                    placeholder="분"
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    value={paceSeconds}
                    onChange={(e) => setPaceSeconds(e.target.value)}
                    placeholder="초"
                    className="w-1/2"
                  />
                </div>
              </div>
            )}

            <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="flex justify-center space-x-4 mb-6">
          <Button variant="outline" onClick={resetFields}>초기화</Button>
        </div>
        <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">러닝 계산기</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 계산 모드 선택 */}
            <div className="flex justify-center mb-4">
              <ToggleGroup type="single" value={calculationMode} onValueChange={(value: 'pace' | 'time' | 'distance') => value && setCalculationMode(value)}>
                <ToggleGroupItem value="pace">페이스 계산</ToggleGroupItem>
                <ToggleGroupItem value="time">시간 계산</ToggleGroupItem>
                <ToggleGroupItem value="distance">거리 계산</ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 거리 입력 */}
            {(calculationMode === 'pace' || calculationMode === 'time') && (
              <div className="space-y-2">
                <Label htmlFor="distance">거리 (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="예: 10"
                />
                {(calculationMode === 'pace' || calculationMode === 'time') && (
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" onClick={() => setDistance('42.195')}>풀코스</Button>
                    <Button variant="outline" onClick={() => setDistance('21.1')}>하프</Button>
                    <Button variant="outline" onClick={() => setDistance('10')}>10km</Button>
                    <Button variant="outline" onClick={() => setDistance('5')}>5km</Button>
                  </div>
                )}
              </div>
            )}

            {/* 시간 입력 */}
            {(calculationMode === 'pace' || calculationMode === 'distance') && (
              <div className="space-y-2">
                <Label>시간</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="시"
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    placeholder="분"
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    placeholder="초"
                    className="w-1/3"
                  />
                </div>
              </div>
            )}

            {/* 페이스 입력 */}
            {(calculationMode === 'time' || calculationMode === 'distance') && (
              <div className="space-y-2">
                <Label>페이스 (분:초/km)</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={paceMinutes}
                    onChange={(e) => setPaceMinutes(e.target.value)}
                    placeholder="분"
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    value={paceSeconds}
                    onChange={(e) => setPaceSeconds(e.target.value)}
                    placeholder="초"
                    className="w-1/2"
                  />
                </div>
              </div>
            )}

            <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="flex justify-center mb-6">
          <button onClick={resetFields} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-gray-600 dark:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-ccw mr-2 h-4 w-4"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>다시 측정하기</button>
        </div>
        <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">러닝 계산기</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 계산 모드 선택 */}
            <div className="flex justify-center mb-4">
              <ToggleGroup type="single" value={calculationMode} onValueChange={(value: 'pace' | 'time' | 'distance') => value && setCalculationMode(value)}>
                <ToggleGroupItem value="pace">페이스 계산</ToggleGroupItem>
                <ToggleGroupItem value="time">시간 계산</ToggleGroupItem>
                <ToggleGroupItem value="distance">거리 계산</ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 거리 입력 */}
            {(calculationMode === 'pace' || calculationMode === 'time') && (
              <div className="space-y-2">
                <Label htmlFor="distance">거리 (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="예: 10"
                />
                {(calculationMode === 'pace' || calculationMode === 'time') && (
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" onClick={() => setDistance('42.195')}>풀코스</Button>
                    <Button variant="outline" onClick={() => setDistance('21.1')}>하프</Button>
                    <Button variant="outline" onClick={() => setDistance('10')}>10km</Button>
                    <Button variant="outline" onClick={() => setDistance('5')}>5km</Button>
                  </div>
                )}
              </div>
            )}

            {/* 시간 입력 */}
            {(calculationMode === 'pace' || calculationMode === 'distance') && (
              <div className="space-y-2">
                <Label>시간</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="시"
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    placeholder="분"
                    className="w-1/3"
                  />
                  <Input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    placeholder="초"
                    className="w-1/3"
                  />
                </div>
              </div>
            )}

            {/* 페이스 입력 */}
            {(calculationMode === 'time' || calculationMode === 'distance') && (
              <div className="space-y-2">
                <Label>페이스 (분:초/km)</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={paceMinutes}
                    onChange={(e) => setPaceMinutes(e.target.value)}
                    placeholder="분"
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    value={paceSeconds}
                    onChange={(e) => setPaceSeconds(e.target.value)}
                    placeholder="초"
                    className="w-1/2"
                  />
                </div>
              </div>
            )}

            {/* 계산 버튼 */}
            <div className="flex justify-center space-x-4">
              {calculationMode === 'pace' && <Button onClick={calculatePace}>페이스 계산</Button>}
              {calculationMode === 'time' && <Button onClick={calculateTime}>시간 계산</Button>}
              {calculationMode === 'distance' && <Button onClick={calculateDistance}>거리 계산</Button>}
            </div>

            {/* 결과 표시 */}
            {result && (
              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-lg font-semibold flex items-center justify-center">
                {result}
                {renderBadges()}
              </div>
            )}
          </CardContent>
        </Card>
  );
};

export default PaceCalculatorPage;