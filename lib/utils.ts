import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDateToISO(input: string): string | null {
  // input should be like "23/08/2025"
  const [day, month, year] = input.split('/');
  if (!day || !month || !year) return null;

  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

export function convertStringDate(dateStr: string): string | null {
  const [day, month, year] = dateStr.split("/");

  if (!day || !month || !year) return null;

  const isoDateStr = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00Z`;
  const date = new Date(isoDateStr);

  return isNaN(date.getTime()) ? null : date.toISOString();
}