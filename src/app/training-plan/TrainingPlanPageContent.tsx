"use client";

import React, { useState, useEffect } from 'react';
import { TrainingPlan } from '@/lib/getTrainingPlan';
import { commonTrainingGuide } from '@/lib/commonGuide';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from '../SearchParamsProvider'; // Import from provider
import Image from 'next/image';
import logoSvg from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, ArrowLeft } from 'lucide-react';

export default function TrainingPlanPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const gender = searchParams.get('gender') as 'male' | 'female';
  const distance = searchParams.get('distance') as '10km' | 'Half Marathon' | 'Full Marathon';
  const level = searchParams.get('level') as 'belowAverage' | 'average' | 'aboveAverage';
  const lang = searchParams.get('lang') === 'en' ? 'en' : 'ko';

  if (!gender || !distance || !level) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">정보가 부족합니다.</h1>
        <p>올바른 경로로 접근해주세요.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  // This is a workaround to call server-side code from a client component.
  // In a real-world scenario, you'd fetch this data via an API route.
  // For this specific case, we will need to create a simple API route.
  // Let's assume for now we can fetch it, and create the API route next.
  
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlan = async () => {
      setLoading(true);
      const response = await fetch(`/api/training-plan?gender=${gender}&distance=${distance}&level=${level}`);
      if (response.ok) {
        const data = await response.json();
        setPlan(data);
      } else {
        setPlan(null);
      }
      setLoading(false);
    };
    if (gender && distance && level) {
      fetchPlan();
    }
  }, [gender, distance, level]);
  
  const guide = commonTrainingGuide[lang];

  if (loading) {
    return (
        <div className="container mx-auto p-4 text-center">
            <p>Loading training plan...</p>
        </div>
    )
  }

  if (!plan) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">훈련 계획을 찾을 수 없습니다.</h1>
        <p className="text-gray-600">요청하신 정보에 맞는 훈련 계획이 없습니다.</p>
        <p className="text-sm text-gray-500 mt-2">
          (gender: {gender}, distance: {distance}, level: {level})
        </p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <Button variant="ghost" onClick={() => router.back()} className="p-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Back</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoSvg} alt="RunLevel Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800">RunLevel</span>
          </Link>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold">{lang === 'ko' ? `${plan.title}을 위한 주간 계획` : `Weekly Plan for ${plan.title}`}</CardTitle>
            <CardDescription className="text-md">{plan.target}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[15%]">{lang === 'ko' ? '요일' : 'Day'}</TableHead>
                    <TableHead className="w-[25%]">{lang === 'ko' ? '훈련 종류' : 'Workout Type'}</TableHead>
                    <TableHead className="w-[35%]">{lang === 'ko' ? '훈련 내용' : 'Workout Details'}</TableHead>
                    <TableHead className="w-[25%]">{lang === 'ko' ? '훈련 목표 및 팁' : 'Goal & Tips'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plan.schedule.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.day}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.content}</TableCell>
                      <TableCell>{item.tips}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-green-600" />
              {guide.title}
            </CardTitle>
            <CardDescription>{guide.intro}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {guide.principles.map((principle, index) => (
                <AccordionItem key={index} value={`principle-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">{principle.title}</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-base">{principle.content}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{principle.application}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
