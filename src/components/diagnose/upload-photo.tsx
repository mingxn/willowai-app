"use client";

import { type ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import {
  UploadCloud,
  Loader2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

type UploadPhotosProps = {
  imagePreview: string | null;
  isLoading: boolean;
  error: string | null;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDiagnose: () => void;
  handleUploadClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
};

export default function UploadPhotos({
  imagePreview,
  isLoading,
  error,
  handleImageChange,
  handleDiagnose,
  handleUploadClick,
  fileInputRef,
}: UploadPhotosProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Upload a Photo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-border hover:border-primary transition-colors bg-secondary/50"
          onClick={handleUploadClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Plant preview"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="plant"
            />
          ) : (
            <div className="text-center text-muted-foreground p-4">
              <UploadCloud className="mx-auto h-12 w-12 text-primary" />
              <p className="mt-2 font-semibold">Click to upload an image</p>
              <p className="text-xs">PNG, JPG, or GIF up to 5MB</p>
            </div>
          )}
        </div>
        <Button
          onClick={handleDiagnose}
          disabled={!imagePreview || isLoading}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Diagnosing...
            </>
          ) : (
            'Diagnose Plant'
          )}
        </Button>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}