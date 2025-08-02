"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CustomTrainingData, TrainingPlan } from '@/lib/customTrainingParser';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ClientComponentProps {
  trainingData: (CustomTrainingData & { id: string; filename: string })[];
}

export default function ClientComponent({ trainingData }: ClientComponentProps) {
  const searchParams = useSearchParams();
  const initialFileId = searchParams.get('file');

  const [selectedFileId, setSelectedFileId] = useState(initialFileId || trainingData[0]?.id || '');

  useEffect(() => {
    const fileIdFromUrl = searchParams.get('file');
    if (fileIdFromUrl && trainingData.some(d => d.id === fileIdFromUrl)) {
      setSelectedFileId(fileIdFromUrl);
    }
  }, [searchParams, trainingData]);

  const selectedData = trainingData.find(d => d.id === selectedFileId);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4">
          <Label htmlFor="training-select" className="mb-2 block font-semibold text-gray-700">
            훈련 프로그램 선택:
          </Label>
          <Select value={selectedFileId} onValueChange={setSelectedFileId}>
            <SelectTrigger id="training-select" className="w-full md:w-1/2">
              <SelectValue placeholder="프로그램을 선택하세요..." />
            </SelectTrigger>
            <SelectContent>
              {trainingData.map(data => (
                <SelectItem key={data.id} value={data.id}>
                  {data.filename}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedData && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{selectedData.mainTitle}</CardTitle>
            <CardDescription>{selectedData.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue="plan-0">
              {selectedData.plans.map((plan, index) => (
                <AccordionItem key={index} value={`plan-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex flex-col text-left">
                        <span>{plan.title}</span>
                        <span className="text-sm font-normal text-gray-500">{plan.target}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[15%]">요일</TableHead>
                            <TableHead className="w-[25%]">훈련 종류</TableHead>
                            <TableHead className="w-[35%]">훈련 내용</TableHead>
                            <TableHead className="w-[25%]">훈련 목표 및 팁</TableHead>
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ShadCN UI Label (간단한 버전)
const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label {...props} />
);
