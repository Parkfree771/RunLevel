
import { getCustomTrainingData, CustomTrainingData, TrainingPlan } from '@/lib/customTrainingParser';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ClientComponent from './client-page';

export const metadata = {
  title: '맞춤 훈련 프로그램 | RunLevel',
  description: '주간 맞춤 훈련 프로그램을 확인하세요.',
};

// Page component (Server Component)
export default function CustomTrainingPage() {
  const trainingData = getCustomTrainingData();

  if (!trainingData || trainingData.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">훈련 데이터를 불러올 수 없습니다.</h1>
        <p>데이터 파일을 확인해주세요.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">맞춤 훈련 프로그램</h1>
          <Link href="/" className="p-2 rounded-md hover:bg-gray-100">
            <Home className="h-6 w-6 text-gray-600" />
            <span className="sr-only">홈으로</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <ClientComponent trainingData={trainingData} />
      </main>
    </div>
  );
}
