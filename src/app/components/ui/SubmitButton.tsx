"use client";

import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3"
      disabled={isSubmitting}
    >
      {isSubmitting ? '送信中...' : 'お問い合わせを送信する'}
    </Button>
  );
}
