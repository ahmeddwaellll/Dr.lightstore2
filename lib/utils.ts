import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function calculateBoostPrice(current: number, target: number): number {
  if (target <= current) return 0;
  const difference = target - current;
  const thousands = Math.ceil(difference / 1000);
  return thousands * 5; // $5 per 1k trophies
}

export function calculateLeaguePrice(currentIndex: number, targetIndex: number): number {
  if (targetIndex <= currentIndex) return 0;
  const difference = targetIndex - currentIndex;
  return difference * 5; // $5 per league
}

export function getLeagueIndex(league: string): number {
  const leagues = ["Herald", "Archer", "Guardian", "Master", "Champion", "Grand Champion", "Ultimate Champion"];
  return leagues.indexOf(league);
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}