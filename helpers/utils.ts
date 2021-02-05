import { formatDistanceToNow, parseISO } from "date-fns";

export const hasEmptyField = (object: { [key: string]: string }) =>
  Object.values(object).some(x => !x);

export const getTimeSince = (iso: string) => {
  return formatDistanceToNow(parseISO(iso)) + " ago";
};
