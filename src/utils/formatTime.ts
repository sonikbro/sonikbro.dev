import { DateTime } from "luxon";

export default function formatTime(date: string) {
  return DateTime.fromISO(date, {
    zone: 'utc',
  }).toFormat('dd LLLL yyyy');
};
