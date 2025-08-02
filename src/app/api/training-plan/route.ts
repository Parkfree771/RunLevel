import { NextResponse } from 'next/server';
import { getTargetedTrainingPlan } from '@/lib/getTrainingPlan';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gender = searchParams.get('gender') as 'male' | 'female';
  const distance = searchParams.get('distance') as '10km' | 'Half Marathon' | 'Full Marathon';
  const level = searchParams.get('level') as 'belowAverage' | 'average' | 'aboveAverage';

  if (!gender || !distance || !level) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  try {
    const plan = getTargetedTrainingPlan(gender, distance, level);

    if (!plan) {
      return NextResponse.json({ error: 'Training plan not found' }, { status: 404 });
    }

    return NextResponse.json(plan);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
