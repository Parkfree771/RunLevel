import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Timer, Route, Trophy, RotateCcw, Lightbulb, BarChart3, User, Moon, Sun, Globe } from "lucide-react";
import logoSvg from '@assets/logo.svg';

interface GradeInfo {
  color: string;
  textColor: string;
  message: string;
  advice: string;
}

const gradeDefinitions = {
  'SS': { color: 'bg-gradient-to-r from-purple-600 to-purple-400' },
  'S': { color: 'bg-gradient-to-r from-yellow-500 to-yellow-400' },
  'A+': { color: 'bg-gradient-to-r from-purple-500 to-pink-400' },
  'A': { color: 'bg-gradient-to-r from-green-500 to-green-400' },
  'B+': { color: 'bg-gradient-to-r from-cyan-500 to-blue-400' },
  'B': { color: 'bg-gradient-to-r from-blue-500 to-blue-400' },
  'C+': { color: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
  'C': { color: 'bg-gradient-to-r from-orange-500 to-orange-400' },
  'D+': { color: 'bg-gradient-to-r from-gray-500 to-gray-400' },
  'D': { color: 'bg-gradient-to-r from-gray-600 to-gray-500' }
};

// 거리별, 성별별 러너 특징 (ver. Natural Pride)
const runnerProfiles = {
  male: {
    '10km': {
      'SS': '각종 대회의 시상대를 노리는, 아마추어 최상위 그룹의 실력자.',
      'S': '수많은 땀으로 40분 초반대 기록을 달성한, 동호회 최상급 러너.',
      'A+': '50분이라는 상징적인 기록을 가뿐히 넘어선, 누구나 인정하는 실력파.',
      'A': '꾸준한 훈련이 만들어낸 결과. 안정적인 페이스를 유지하는 베테랑 러너.',
      'B+': '기록 단축의 재미를 아는 단계. 어제의 나를 이기며 성장하는 열정적인 주자.',
      'B': '대한민국 남성 러너의 가장 중심. 건강한 열정을 가진 기분 좋은 평균.',
      'C+': '1시간의 기록을 넘어선, 자신의 한계를 처음으로 돌파한 성공적인 도전자.',
      'C': '달리기의 즐거움에 눈뜨다. 이제 막 심장이 뛰기 시작한, 가능성으로 가득 찬 러너.',
      'D+': '포기하지 않는 마음. 10km라는 거리를 처음으로 몸에 새긴 입문자.',
      'D': '기록을 넘어 10km를 완주한, 자신과의 싸움에서 승리한 주자.'
    },
    '하프마라톤': {
      'SS': '아마추어의 한계를 넘어선 기록. 대회 연령별 시상식의 단골 주인공.',
      'S': '100분 이내 완주는 기본. 더 높은 경지를 향해 나아가는 최상급 러너.',
      'A+': '강철 심장. 21.1km를 지배하는 압도적인 페이스 컨트롤 능력을 갖춘 고수.',
      'A': '2시간 이내 완주라는, 러너들의 보편적인 꿈을 현실로 만든 실력자.',
      'B+': '2시간 완주를 목표로, 자신의 한계에 끊임없이 도전하는 집념의 러너.',
      'B': '하프 마라토너라는 이름의 자격. 2시간 넘게 뛸 수 있는 강인함을 갖춘 평균의 주자.',
      'C+': '나만의 리듬을 찾아서. 긴 호흡 속에서 달리기의 희열을 만끽하는 단계.',
      'C': '21.1km 완주 성공. 긴 여정의 즐거움을 깨닫고 더 큰 세상을 향해 나아가는 탐험가.',
      'D+': '두려움을 용기로 바꾼 도전자. 21.1km의 거리가 발아래 놓이기 시작했다.',
      'D': '완주의 경험 자체가 위대한 훈장. 인내의 가치를 아는 당신.'
    },
    '풀마라톤': {
      'SS': '모든 아마추어 러너의 경외를 받는 \'서브-3\'의 주인공. 재능과 노력이 빚어낸 최고의 경지.',
      'S': '초인적인 의지력으로 3시간 초반의 기록을 달성하는, 레이스 전체를 읽는 전략가.',
      'A+': '고통을 즐기는 단계. 42.195km의 모든 순간을 통제하는 레이스의 베테랑.',
      'A': '\'서브-4\', 이 목표의 무게를 아는 모든 이들의 존경을 받는 진정한 마라토너.',
      'B+': '대한민국 평균을 넘어, 풀코스 주자들 사이에서도 빛나는 실력을 갖춘 러너.',
      'B': '강인한 정신력의 소유자. 42.195km를 완주한 당신은 이미 보통 사람이 아니다.',
      'C+': '5시간 이내 완주 성공. 후반의 고비를 이겨내고 한계를 돌파한, 불굴의 의지.',
      'C': '5시간의 사투. 그 긴 시간 동안 포기하지 않은 스스로에게 박수를 보낼 자격이 있다.',
      'D+': '움직이는 모든 순간이 감동. 제한 시간을 향해 달려가는, 드라마의 주인공.',
      'D': '42.195km. 숫자만으로도 경이로운 이 거리를 두 발로 완주한 위대한 영웅.'
    }
  },
  female: {
    '10km': {
      'SS': '대회 시상대 단골. 재능과 노력이 빚어낸, 여성 아마추어 최상급 실력.',
      'S': '50분 이내 기록을 가뿐히 달성하는, 동호회에서도 손꼽히는 에이스.',
      'A+': '꾸준함으로 일궈낸 결실. 안정적인 페이스로 주로 위를 우아하게 달리는 실력자.',
      'A': '1시간이라는 상징적인 기록을 돌파한, 성실함과 꾸준함의 아이콘.',
      'B+': '1시간 완주를 목표로, 어제보다 나은 나를 만들어가는 긍정적인 러너.',
      'B': '달리기를 진정으로 즐기는 당신. 건강한 열정으로 가득 찬, 가장 아름다운 주자.',
      'C+': '성장의 기쁨. 땀방울 속에서 피어나는, 더 강해진 나를 만나는 시간.',
      'C': '10km 완주를 통해 무엇이든 할 수 있다는 자신감을 얻은, 멋진 도전자.',
      'D+': '달리기에 재미를 붙이며 10km 도전을 시작하는, 용기 있는 입문자.',
      'D': '자신과의 약속을 지킨 당신. 10km 완주 메달은 그 무엇과도 바꿀 수 없는 훈장.'
    },
    '하프마라톤': {
      'SS': '존경을 부르는 기록. 강인함과 아름다움을 모두 갖춘, 주로 위의 강자.',
      'S': '안정적인 1시간대 기록을 보유한, 주변의 부러움을 사는 뛰어난 실력자.',
      'A+': '2시간 이내 완주라는, 많은 노력을 통해 꿈의 목표를 현실로 만든 주인공.',
      'A': '2시간 완주를 목표로, 꾸준한 훈련을 통해 자신을 단련하는 성실한 러너.',
      'B+': '평균보다 앞서, 자신만의 레이스를 훌륭하게 펼쳐내는 꾸준함의 아이콘.',
      'B': '하프 코스를 완주할 수 있는 강인함을 갖춘, 가장 많은 여성 러너들의 평균.',
      'C+': '페이스 조절의 즐거움을 느끼며, 더 긴 거리에 대한 자신감을 얻는 단계.',
      'C': '21.1km의 긴 호흡 속에서 진정한 나를 만나는 시간.',
      'D+': '3시간 이내 완주를 목표로, 자신과의 싸움을 이겨내는 강인한 도전자.',
      'D': '완주, 그 자체가 감동. 모든 걸음이 모여 만들어낸 위대한 드라마의 주인공.'
    },
    '풀마라톤': {
      'SS': '보스턴 마라톤 참가 자격을 획득한, 모든 여성 러너들의 선망과 존경의 대상.',
      'S': '\'서브-4\'를 넘어, 더 높은 경지를 추구하는 엘리트 동호인.',
      'A+': '\'서브-4\' 달성. 강철같은 의지로 42.195km를 완주한 진정한 마라토너.',
      'A': '\'서브-4\'라는 위대한 성취를 향해 나아가는, 강한 정신력의 소유자.',
      'B+': '대한민국 여성 평균을 뛰어넘는 실력. 당신의 꾸준함이 만들어낸 자랑스러운 결과.',
      'B': '풀코스를 완주하는 강인함을 증명한, 존중받아 마땅한 진정한 주자.',
      'C+': '5시간 이내 완주 성공. 긴 사투를 이겨내고 한계를 돌파한, 불굴의 아이콘.',
      'C': '5시간이 넘는 긴 시간 동안 포기하지 않은, 스스로에게 박수받을 자격이 있는 러너.',
      'D+': '도전하는 모든 순간이 아름다운 당신. 완주 메달이 그 무엇보다 값진 이유.',
      'D': '메달의 무게보다 더 값진 감동의 드라마를 쓴, 이 시대의 가장 아름다운 도전자.'
    }
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

// Translation object for Korean/English support
const translations = {
  ko: {
    title: "RunLevel",
    subtitle: "내 러닝 등급은?",
    inputTitle: "러닝 기록을 입력해주세요",
    inputDesc: "거리와 시간을 입력하면 당신의 러닝 등급을 확인할 수 있습니다",
    gender: "성별",
    male: "남성",
    female: "여성",
    distance: "러닝 거리",
    totalTime: "총 시간",
    hours: "시간",
    minutes: "분",
    seconds: "초",
    checkGrade: "등급 확인하기",
    yourGrade: "당신의 러닝 등급",
    normalDist: "나는 어디쯤 달리고 있을까?",
    myRecord: "내 기록",
    retryButton: "다시 측정하기",
    disclaimer: "※ 재미로만 확인해주세요!",
    disclaimerText: "본 등급은 수많은 러너들의 평균적인 기록을 바탕으로 한 참고 자료예요. 개인의 나이, 컨디션, 코스 난이도 등 다양한 변수는 담겨있지 않답니다. 숫자 등급보다 중요한 건, 어제의 나보다 성장하는 즐거움이니까요! 😊",
    footer: "© 2025 RunLevel - 당신의 러닝 여정을 응원합니다!",
    selectGender: "성별을 선택하세요",
    selectDistance: "거리를 선택하세요",
    gradeTable: "등급 기준표"
  },
  en: {
    title: "RunLevel", 
    subtitle: "What's My Running Grade?",
    inputTitle: "Enter Your Running Record",
    inputDesc: "Enter distance and time to check your running grade",
    gender: "Gender",
    male: "Male",
    female: "Female", 
    distance: "Running Distance",
    totalTime: "Total Time",
    hours: "Hours",
    minutes: "Minutes", 
    seconds: "Seconds",
    checkGrade: "Check Grade",
    yourGrade: "Your Running Grade",
    normalDist: "Where am I running among others?",
    myRecord: "My Record",
    retryButton: "Try Again",
    disclaimer: "※ For entertainment purposes only!",
    disclaimerText: "This grade is based on average records of many runners. Individual factors like age, condition, course difficulty are not included. What matters more than the grade is the joy of growing better than yesterday! 😊",
    footer: "© 2025 RunLevel - Supporting your running journey!",
    selectGender: "Select gender",
    selectDistance: "Select distance", 
    gradeTable: "Grade Standards"
  }
};

export default function Home() {
  const [selectedDistance, setSelectedDistance] = useState<string>('');
  const [gender, setGender] = useState<string>('male'); // 성별 선택 추가
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [results, setResults] = useState<{
    totalSeconds: number;
    grade: string;
    formattedTime: string;
    distanceName: string;
    gender: string;
  } | null>(null);

  const t = translations[language];

  // Theme management
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

    // 결과 섹션으로 스크롤
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
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
    const range = 3.5 * sigma; // ±3.5σ 범위로 확대하여 등급 간격 개선
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
      // D등급의 시간 범위를 더 명확하게 표시
      const dStartTime = standards['D+'] + 1;
      const dEndTime = dStartTime + (standards['D+'] - standards['C']) * 0.8; // 적당한 범위 설정
      return {
        minTime: formatTime(dStartTime),
        maxTime: formatTime(dEndTime),
        range: `${formatTime(dStartTime)} ~`
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
    const percentile = cdf * 100;

    return {
      zScore,
      percentile: Math.max(0, Math.min(100, percentile))
    };
  };

  const PyramidChart = ({ distance, userTime, userGrade, gender = 'male' }: { distance: string; userTime?: number; userGrade?: string; gender?: string }) => {
    if (!distance || !distanceStandards[gender as keyof typeof distanceStandards] || 
        !distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']]) return null;

    const { standards } = distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']];
    
    // 피라미드 데이터 (B/B+가 가장 길고 계단식으로 감소)
    const pyramidData = [
      { grade: 'SS', percentage: 8, color: 'hsl(270, 100%, 70%)' },
      { grade: 'S', percentage: 12, color: 'hsl(45, 100%, 50%)' },
      { grade: 'A+', percentage: 16, color: 'hsl(290, 90%, 60%)' },
      { grade: 'A', percentage: 18, color: 'hsl(120, 60%, 50%)' },
      { grade: 'B+', percentage: 22, color: 'hsl(180, 80%, 55%)' },  // 가장 긴 막대
      { grade: 'B', percentage: 22, color: 'hsl(210, 80%, 60%)' },   // 가장 긴 막대
      { grade: 'C+', percentage: 18, color: 'hsl(50, 90%, 60%)' },
      { grade: 'C', percentage: 14, color: 'hsl(30, 90%, 65%)' },
      { grade: 'D+', percentage: 10, color: 'hsl(0, 0%, 60%)' },
      { grade: 'D', percentage: 6, color: 'hsl(0, 0%, 50%)' }        // D+와 다른 길이
    ];

    const maxWidth = 300;
    const blockHeight = 35;
    const spacing = 2;

    return (
      <div className="w-full flex flex-col items-center">
        <div className="space-y-1">
          {pyramidData.map((item, index) => {
            const width = (item.percentage / 20) * maxWidth; // 20%가 최대 너비
            const isUserGrade = userGrade === item.grade;
            const timeRange = getGradeTimeRange(item.grade, distance, gender);
            
            return (
              <div key={item.grade} className="flex items-center">
                <div 
                  className={`flex items-center justify-center text-white font-bold text-sm rounded transition-all duration-300 ${
                    isUserGrade ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' : ''
                  }`}
                  style={{ 
                    backgroundColor: item.color,
                    width: `${width}px`,
                    height: `${blockHeight}px`,
                    minWidth: '80px'
                  }}
                >
                  <span className="text-xs font-bold">{item.grade}</span>
                </div>
                <div className="ml-3 text-xs text-gray-600 dark:text-gray-400">
                  {timeRange?.range || ''}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* 사용자 기록 표시 */}
        {userTime && userGrade && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <div 
                className="w-4 h-4 rounded" 
                style={{ backgroundColor: pyramidData.find(p => p.grade === userGrade)?.color }}
              ></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">{t.myRecord}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const NormalDistributionChart = ({ distance, userTime, userGrade, gender = 'male' }: { distance: string; userTime?: number; userGrade?: string; gender?: string }) => {
    if (!distance || !distanceStandards[gender as keyof typeof distanceStandards] || 
        !distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']]) return null;

    const { mean, sigma, standards } = distanceStandards[gender as keyof typeof distanceStandards][distance as keyof typeof distanceStandards['male']];
    const points = generateNormalDistribution(mean, sigma, userTime);
    const maxY = Math.max(...points.map(p => p.y));

    // SVG 좌표계로 변환 - 모바일에서 더 큰 크기
    const svgWidth = 800;
    const svgHeight = 300; // 높이 증가
    const padding = 40;

    const xScale = (time: number) => {
      // 실제 등급 시간 범위를 기준으로 X축 범위 설정
      const minTime = standards['SS'] - sigma * 0.5; // SS급보다 조금 빠른 시간
      const maxTime = standards['D+'] + sigma * 0.5; // D+급보다 조금 느린 시간
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
        <svg 
          width="100%" 
          height={svgHeight} 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
          className="border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 min-h-[280px] sm:min-h-[350px]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* 등급 구간 배경 - SS급이 오른쪽 (빠른 시간)에 위치 */}
          {/* D 등급 구간 (가장 왼쪽 - 느린 시간) */}
          <rect
            x={padding}
            y={padding}
            width={Math.abs(xScale(standards['D+']) - padding)}
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
            x={xScale(standards['SS'])}
            y={padding}
            width={Math.abs((svgWidth - padding) - xScale(standards['SS']))}
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
          {/* D등급 라벨 */}
          <g key="D">
            <text
              x={(padding + xScale(standards['D+'])) / 2}
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
              <span className="text-gray-700 dark:text-gray-300">{t.myRecord}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="relative flex items-center justify-center">
            {/* Central content */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <img src={logoSvg} alt="RunLevel Logo" className="mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{t.title}</h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">{t.subtitle}</p>
            </div>
            
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
        {/* Input Form Section */}
        {!results && (
          <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">{t.inputTitle}</h2>
                {language === 'ko' && <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t.inputDesc}</p>}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Gender Selection */}
                <div>
                  <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <User className="inline text-blue-600 dark:text-blue-400 mr-2 h-4 w-4" />
                    {t.gender}
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-base sm:text-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <SelectValue placeholder={t.selectGender} />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                      <SelectItem value="male" className="text-gray-900 dark:text-white">{t.male}</SelectItem>
                      <SelectItem value="female" className="text-gray-900 dark:text-white">{t.female}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Distance Selection */}
                <div>
                  <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Route className="inline text-blue-600 dark:text-blue-400 mr-2 h-4 w-4" />
                    {t.distance}
                  </Label>
                  <Select value={selectedDistance} onValueChange={setSelectedDistance}>
                    <SelectTrigger className="w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <SelectValue placeholder={t.selectDistance} />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                      <SelectItem value="10km" className="text-gray-900 dark:text-white">10km</SelectItem>
                      <SelectItem value="하프마라톤" className="text-gray-900 dark:text-white">{language === 'ko' ? '하프마라톤 (21.1km)' : 'Half Marathon (21.1km)'}</SelectItem>
                      <SelectItem value="풀마라톤" className="text-gray-900 dark:text-white">{language === 'ko' ? '풀마라톤 (42.2km)' : 'Full Marathon (42.2km)'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Input */}
                <div>
                  <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Timer className="inline text-blue-600 dark:text-blue-400 mr-2 h-4 w-4" />
                    {t.totalTime}
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Input 
                        type="number" 
                        min="0" 
                        max="23"
                        className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg text-center bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        placeholder="0"
                        value={hours}
                        onChange={(e) => handleNumberInput(e.target.value, setHours, 23)}
                      />
                      <Label className="block text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{t.hours}</Label>
                    </div>
                    <div>
                      <Input 
                        type="number" 
                        min="0" 
                        max="59"
                        className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg text-center bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        placeholder="22"
                        value={minutes}
                        onChange={(e) => handleNumberInput(e.target.value, setMinutes, 59)}
                        required
                      />
                      <Label className="block text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{t.minutes}</Label>
                    </div>
                    <div>
                      <Input 
                        type="number" 
                        min="0" 
                        max="59"
                        className="w-full px-3 py-3 border-2 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 text-lg text-center bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        placeholder="30"
                        value={seconds}
                        onChange={(e) => handleNumberInput(e.target.value, setSeconds, 59)}
                      />
                      <Label className="block text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{t.seconds}</Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  {t.checkGrade}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {results && (
          <div id="results-section" className="space-y-4 sm:space-y-6">
            {/* Time Display */}
            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {results.gender === 'male' ? (language === 'ko' ? '남성' : 'Male') : (language === 'ko' ? '여성' : 'Female')} · {results.distanceName} {language === 'ko' ? '완주 시간' : 'Completion Time'}
                </h3>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{results.formattedTime}</div>
                <p className="text-gray-600 dark:text-gray-400">{language === 'ko' ? '시:분:초' : 'H:M:S'}</p>
              </CardContent>
            </Card>

            {/* Grade Display */}
            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">{t.yourGrade}</h3>
                  <div 
                    className={`inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-4xl sm:text-5xl md:text-6xl font-bold shadow-xl animate-grade-reveal mb-3 sm:mb-4 ${gradeDefinitions[results.grade].color} text-white ${
                      ['SS', 'S', 'A+', 'A'].includes(results.grade) ? 'animate-aurora' : ''
                    }`}
                  >
                    {results.grade}
                  </div>
                  <div className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 animate-bounce-gentle px-2">
                    {runnerProfiles[results.gender as keyof typeof runnerProfiles][selectedDistance as keyof typeof runnerProfiles['male']][results.grade]}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Normal Distribution Chart */}
            <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                  <BarChart3 className="text-blue-500 dark:text-blue-400 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  {t.normalDist}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-xl">
                  {/* 모바일에서는 피라미드형, PC에서는 정규분포 */}
                  <div className="block md:hidden">
                    <PyramidChart distance={selectedDistance} userTime={results.totalSeconds} userGrade={results.grade} gender={results.gender} />
                  </div>
                  <div className="hidden md:block w-full min-h-[400px] md:min-h-[450px]">
                    <NormalDistributionChart distance={selectedDistance} userTime={results.totalSeconds} userGrade={results.grade} gender={results.gender} />
                  </div>

                  {/* Statistics Info - PC에서만 표시 */}
                  <div className="hidden md:block">
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
                        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-center">
                          <div className="bg-white dark:bg-gray-600 p-3 sm:p-4 rounded-lg">
                            <div className={`text-xl sm:text-2xl font-bold ${gradeColor[results.grade as keyof typeof gradeColor] || 'text-purple-600'} dark:${gradeColor[results.grade as keyof typeof gradeColor]?.replace('text-', 'text-') || 'text-purple-400'}`}>
                              {results.grade || 'N/A'}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{language === 'ko' ? '등급' : 'Grade'}</div>
                          </div>
                          <div className="bg-white dark:bg-gray-600 p-3 sm:p-4 rounded-lg">
                            <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {position.percentile.toFixed(2)}%
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{language === 'ko' ? '상위 퍼센트' : 'Top Percentile'}</div>
                          </div>
                          {timeRange && (
                            <div className="bg-white dark:bg-gray-600 p-3 sm:p-4 rounded-lg sm:col-span-2 lg:col-span-1">
                              <div className="text-base sm:text-lg font-bold text-gray-700 dark:text-gray-200">
                                {timeRange.range}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{results.grade}{language === 'ko' ? '급 시간 구간' : ' Grade Range'}</div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
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
                className="bg-gray-600 dark:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                {t.retryButton}
              </Button>
            </div>
          </div>
        )}

        {/* Grade Information Section */}
        {selectedDistance && (
          <Card className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                {gender === 'male' ? (language === 'ko' ? '남성' : 'Male') : (language === 'ko' ? '여성' : 'Female')} · {distanceStandards[gender as keyof typeof distanceStandards][selectedDistance as keyof typeof distanceStandards['male']]?.name} {t.gradeTable}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {Object.entries(gradeDefinitions).map(([grade, info]) => {
                  const timeRange = getGradeTimeRange(grade, selectedDistance, gender);

                  return (
                    <div 
                      key={grade} 
                      className={`${info.color} p-3 sm:p-4 rounded-xl text-center`}
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-white">{grade}</div>
                      <div className="text-xs sm:text-sm text-white">
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

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <Card className="rounded-2xl shadow-lg p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-0">
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2 sm:mb-3">{t.disclaimer}</h4>
              <p className="text-sm sm:text-base text-blue-700 dark:text-blue-200 leading-relaxed">
                {t.disclaimerText}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-6 sm:mt-8">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 text-center">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}