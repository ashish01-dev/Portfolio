import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTimeZoneDifferenceInHours(
  timeZone: string = "Asia/Kolkata",
) {
  // Get the current time
  const now = new Date();

  // Format options for consistent date/time string parsing
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  } as const;

  // Get the current time in the local timezone
  const localTimeString = now.toLocaleString("en-US", {
    ...options,
  });

  // Get the current time in the specified timezone (e.g., Asia/Kolkata)
  const targetTimeString = now.toLocaleString("en-US", {
    ...options,
    timeZone: timeZone,
  });

  // Create Date objects from these strings
  const localTime = new Date(localTimeString);
  const targetTime = new Date(targetTimeString);

  // Calculate the difference in milliseconds
  const diffInMilliseconds = targetTime.getTime() - localTime.getTime();

  // Convert milliseconds to hours
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  return diffInHours;
}
