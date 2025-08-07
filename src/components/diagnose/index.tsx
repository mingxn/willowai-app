"use client";

import { useState, type ChangeEvent, useRef } from 'react';
import { Loader2, Sprout } from 'lucide-react';
import { diagnosePlant } from '@/api/diagnose';
import UploadPhotos from './upload-photo';
import Diagnoses from './diagnose-condition';
import PlanActions from './plan-action';

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

export default function DiagnoseComponent() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosisResult, setDiagnosisResult] =
    useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError('Image size should be less than 5MB.');
        return;
      }
      setError(null);
      setDiagnosisResult(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiagnose = () => {
    if (!imagePreview) {
      setError('Please upload an image first.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setDiagnosisResult(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setError('No image file found.');
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    diagnosePlant(formData)
      .then(response => {
        setDiagnosisResult(response.data);
      })
      .catch(error => {
        console.error('Error during diagnosis:', error);
        setError('Failed to get diagnosis. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <header className="text-center">
        <h1 className="font-headline text-4xl font-bold text-accent flex items-center justify-center gap-2">
          <Sprout className="h-10 w-10 text-primary" />
          Willow.ai
        </h1>
        <p className="text-muted-foreground mt-2">Your personal plant doctor.</p>
      </header>
      
      <UploadPhotos
        imagePreview={imagePreview}
        isLoading={isLoading}
        error={error}
        handleImageChange={handleImageChange}
        handleDiagnose={handleDiagnose}
        handleUploadClick={handleUploadClick}
        fileInputRef={fileInputRef}
      />

      {isLoading && (
        <div className="text-center space-y-2 text-accent">
          <Loader2 className="mx-auto h-8 w-8 animate-spin" />
          <p className="font-semibold animate-pulse">Analyzing your plant...</p>
        </div>
      )}

      {diagnosisResult && (
        <div className="space-y-6 animate-in fade-in-50 duration-700">
          <Diagnoses diagnosisResult={diagnosisResult} />
          <PlanActions diagnosisResult={diagnosisResult} />
        </div>
      )}
    </div>
  );
}
