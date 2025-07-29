// src/pages/training-programs.tsx 파일 전체를 이 코드로 교체하세요.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useRoute, useLocation } from "wouter";
import logoSvg from '@/assets/logo.svg';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { trainingData, pageTranslations } from "./trainingData";

const TrainingProgramPage = () => {
  const [match, params] = useRoute("/training-program/:distance/:gender/:gradeLevel");
  
  const distance = params?.distance || '10km';
  const gender = params?.gender || 'male';
  const gradeLevel = params?.gradeLevel || 'average';

  const [location] = useLocation();
  const queryParams = new URLSearchParams(location.split('?')[1] || '');

  const [language, setLanguage] = useState<'ko' | 'en'>(() => {
    const lang = queryParams.get('lang');
    return (lang === 'en' || lang === 'ko') ? lang : 'ko';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleLanguage = () => setLanguage(prev => (prev === 'ko' ? 'en' : 'ko'));

  const t = pageTranslations[language];
  
  const programData = trainingData[distance as keyof typeof trainingData]?.[gender as keyof typeof trainingData['10km']]?.[language];
  
  const getProgram = () => {
    if (!programData) {
      return { title: "훈련 프로그램을 찾을 수 없습니다.", goal: "", program: [] };
    }
    if (gradeLevel === 'belowAverage') {
      return { title: programData.belowAverageTitle, goal: programData.belowAverageGoal, program: programData.belowAverageProgram };
    }
    if (gradeLevel === 'average') {
      return { title: programData.averageTitle, goal: programData.averageGoal, program: programData.averageProgram };
    }
    return { title: programData.aboveAverageTitle, goal: programData.aboveAverageGoal, program: programData.aboveAverageProgram };
  };

  const { title, goal, program } = getProgram();

 

  // 거리별/성별 특별 안내 문구
  const getSpecificGuide = () => {
    if (gender === 'female') return t.femaleRunnerGuide;
    if (distance === 'Full Marathon') return t.fullMarathonGuide;
    if (distance === 'Half Marathon') return t.halfMarathonGuide;
    return t.generalGuide;
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="relative flex items-center justify-center">
            <Link href={`/?lang=${language}`} className="text-center cursor-pointer">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <img src={logoSvg} alt="RunLevel Logo" className="mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{t.title}</h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">{t.subtitle}</p>
            </Link>
          
            <div className="absolute right-0 flex items-center gap-1 sm:gap-2">
              <Button variant="outline" size="sm" onClick={toggleLanguage} className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs sm:text-sm px-2 sm:px-3">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden xs:inline">{language === 'ko' ? 'EN' : '한글'}</span>
                <span className="xs:hidden">{language === 'ko' ? 'EN' : '한'}</span>
              </Button>
              <Button variant="outline" size="sm" onClick={toggleTheme} className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 sm:px-3">
                {theme === 'light' ? <Moon className="h-3 w-3 sm:h-4 sm:w-4" /> : <Sun className="h-3 w-3 sm:h-4 sm:w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* src/pages/training-programs.tsx 파일 */}

      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white text-center">{t.trainingGuideTitle}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-12">
              
              {/* --- 등급별 훈련 계획 섹션 --- */}
              <section>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center mb-6">
                  <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{goal}</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">{t.weekdays.mon.substring(0,1)}</th>
                                <th scope="col" className="py-3 px-6">{t.trainingType}</th>
                                <th scope="col" className="py-3 px-6">{t.trainingContent}</th>
                                <th scope="col" className="py-3 px-6">{t.detailsAndTips}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {program.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{t.weekdays[item.day as keyof typeof t.weekdays]}</td>
                                    <td className="py-4 px-6">{item.type}</td>
                                    <td className="py-4 px-6">{item.content}</td>
                                    <td className="py-4 px-6">{item.tips}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-xs text-center text-gray-500 dark:text-gray-400 pt-4 mt-4 border-t dark:border-gray-600">
                  <p>{getSpecificGuide()}</p>
                </div>
              </section>

            </div>
          </CardContent>
        </div>

        {/* --- 공통 가이드 카드 --- */}
        <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">{t.commonGuide.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-gray-600 dark:text-gray-300">{t.commonGuide.intro}</p>
            <div className="space-y-4">
              {t.commonGuide.principles.map((principle, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100">{principle.title}</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{principle.content}</p>
                  <p 
                    className="mt-3 text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line"
                    style={{ fontStyle: 'italic' }}
                  >
                    {principle.application}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TrainingProgramPage;