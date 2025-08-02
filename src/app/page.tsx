import React, { Suspense } from 'react';
import HomeContent from '@/components/PageContent';
import { SearchParamsProvider } from './SearchParamsProvider';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsProvider>
        <HomeContent />
      </SearchParamsProvider>
    </Suspense>
  );
}