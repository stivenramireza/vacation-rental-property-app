import { DateTime } from 'luxon';

/**
 * Format the date based on the given format
 * @param {string} date The date to be formatted
 * @returns {string} The formatted date
 */
export const formatDate = (date: string, format: string): string => {
  if (!date) return '';

  const dateObj = DateTime.fromISO(date);
  return dateObj.toFormat(format);
};
