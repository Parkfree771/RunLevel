import { trainingData, TrainingProgram } from '@/lib/trainingData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface TrainingProgramPageProps {
  params: {
    distance: string;
    gender: string;
    gradeLevel: string;
  };
  searchParams: {
    totalSeconds: string;
    grade: string;
    formattedTime: string;
    distanceName: string;
    selectedDistance: string;
    lang: string;
  };
}

export default function TrainingProgramPage({
  params,
  searchParams,
}: TrainingProgramPageProps) {
  const { distance, gender, gradeLevel } = params;
  const { grade, formattedTime, distanceName, lang } = searchParams;

  const programKey = distance as keyof typeof trainingData;
  const genderKey = gender as keyof typeof trainingData[typeof programKey];
  const gradeLevelKey = gradeLevel as keyof typeof trainingData[typeof programKey][typeof genderKey];

  const program: TrainingProgram | undefined = trainingData[programKey]?.[genderKey]?.[gradeLevelKey];

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md text-center p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">훈련 프로그램을 찾을 수 없습니다.</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">요청하신 조건에 맞는 훈련 프로그램이 없습니다.</p>
            <Link href="/" className="text-blue-600 hover:underline flex items-center justify-center">
              <ChevronLeft className="h-4 w-4 mr-1" /> 메인 페이지로 돌아가기
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const displayDistance = decodeURIComponent(distanceName || distance);
  const displayGender = gender === 'male' ? (lang === 'ko' ? '남성' : 'Male') : (lang === 'ko' ? '여성' : 'Female');
  const displayGrade = grade || 'N/A';
  const displayFormattedTime = formattedTime ? decodeURIComponent(formattedTime) : 'N/A';

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors p-4">
      <div className="max-w-4xl mx-auto py-8">
        <Link href="/results" className="text-blue-600 hover:underline flex items-center mb-6">
          <ChevronLeft className="h-5 w-5 mr-2" />
          <span className="text-lg">결과 화면으로 돌아가기</span>
        </Link>

        <Card className="rounded-2xl shadow-lg p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{program.title}</CardTitle>
            <p className="text-lg text-gray-600 dark:text-gray-300">{program.description}</p>
            <div className="mt-4 flex justify-center items-center space-x-2">
              <Badge variant="secondary" className="text-md px-3 py-1">{displayGender}</Badge>
              <Badge variant="secondary" className="text-md px-3 py-1">{displayDistance}</Badge>
              <Badge variant="secondary" className="text-md px-3 py-1">등급: {displayGrade}</Badge>
              {displayFormattedTime !== 'N/A' && (
                <Badge variant="secondary" className="text-md px-3 py-1">기록: {displayFormattedTime}</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">주 훈련</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {program.mainTraining.map((item, index) => (
                  <li key={index}>
                    <span className="font-medium">{item.title}:</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">보조 훈련</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">{program.subTraining.title}:</span> {program.subTraining.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="text-center mb-4">
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">중요 안내</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            <p>모든 프로그램은 일반적인 가이드라인이며, 개인의 건강 상태, 체력 수준, 출전 경험, 그리고 현재 컨디션에 따라 유연하게 조절되어야 합니다. 무엇보다 중요한 것은 부상을 예방하며 꾸준히 훈련을 이어나가는 것입니다. 몸의 신호를 항상 주시하고, 통증이 있다면 즉시 휴식을 취하거나 전문가의 도움을 받는 것을 권장합니다.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
