"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

type PlanActionsProps = {
  diagnosisResult: DiagnosisResult | null;
};

export default function PlanActions({ diagnosisResult }: PlanActionsProps) {
  if (!diagnosisResult || !diagnosisResult.actions) return null;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Action Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {diagnosisResult.actions.map((action, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-full">
                <action.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{action.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}