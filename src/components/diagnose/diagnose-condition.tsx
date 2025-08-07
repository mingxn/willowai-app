"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type DiagnosisResult = {
  plantName: string;
  condition: string;
  probability: number;
  description: string;
  actions: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
};

type DiagnosesProps = {
  diagnosisResult: DiagnosisResult | null;
};

export default function Diagnoses({ diagnosisResult }: DiagnosesProps) {
  if (!diagnosisResult) return null;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Diagnosis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="border-accent bg-accent/10">
          <AlertTitle className="font-bold text-accent">
            {diagnosisResult.condition}
          </AlertTitle>
          <AlertDescription className="text-card-foreground">
            We are{' '}
            <span className="font-bold text-primary">
              {diagnosisResult.probability}%
            </span>{' '}
            certain your{' '}
            <span className="font-bold">{diagnosisResult.plantName}</span>{' '}
            has {diagnosisResult.condition}.
            <p className="mt-2 text-sm text-muted-foreground">
              {diagnosisResult.description}
            </p>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}