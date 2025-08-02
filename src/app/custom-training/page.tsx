import Link from 'next/link';
import { Home } from 'lucide-react';
import ClientComponent from './client-page';
import { Suspense } from 'react';

export const metadata = {
  title: '서울 러닝 코스 추천 | RunLevel',
  description: '서울의 구별 러닝 코스를 확인하고 나에게 맞는 코스를 찾아보세요.',
};

// Page component (Server Component)
export default function CustomTrainingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">서울 러닝 코스 추천</h1>
          <Link href="/" className="p-2 rounded-md hover:bg-gray-100">
            <Home className="h-6 w-6 text-gray-600" />
            <span className="sr-only">홈으로</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ClientComponent />
        </Suspense>
      </main>
    </div>
  );
}