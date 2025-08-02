"use client";

import { useSearchParams } from 'next/navigation';
import { trainingData, TrainingProgram } from '@/lib/trainingData';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

type Gender = 'male' | 'female';
type Level = 'belowAverage' | 'average' | 'aboveAverage';

const TrainingProgramPage = ({ params }: { params: { distance: string } }) => {
  const searchParams = useSearchParams();

  const decodedDistance = decodeURIComponent(params.distance);
  const gender = searchParams.get('gender') as Gender;
  const level = searchParams.get('level') as Level;

  const program = trainingData[decodedDistance]?.[gender]?.[level] ?? null;

  if (!program) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">훈련 프로그램을 찾을 수 없습니다.</h1>
        <p className="text-gray-600">선택한 거리, 성별, 등급에 맞는 훈련 프로그램이 없습니다.</p>
        <p className="text-sm text-gray-500 mt-2">
          (distance: {decodedDistance}, gender: {gender}, level: {level})
        </p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
          <CardDescription>
            <span className="font-semibold">Target Level:</span> {program.level}
          </CardDescription>
          <CardDescription>{program.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="main-training">
            <AccordionItem value="main-training">
              <AccordionTrigger className="text-lg font-semibold">Main Training</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {program.mainTraining.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.title}:</span> {item.description}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sub-training">
              <AccordionTrigger className="text-lg font-semibold">Sub Training</AccordionTrigger>
              <AccordionContent>
                <p>
                  <span className="font-semibold">{program.subTraining.title}:</span> {program.subTraining.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingProgramPage;
