import React, { Suspense } from 'react';
import TrainingPlanPageContent from './TrainingPlanPageContent';
import { SearchParamsProvider } from '../SearchParamsProvider';

export default function TrainingPlanPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsProvider>
        <TrainingPlanPageContent />
      </SearchParamsProvider>
    </Suspense>
  );
}