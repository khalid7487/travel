import dayjs, {Dayjs} from 'dayjs'

export const hasOwnPropertyCall = (obj: unknown, key: string) => {
  if (!obj) return false
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function capitalize(str: string) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

export const formatDate = (
  date: Dayjs | Date | string,
  format: string = 'MMM D, YYYY, h:mm A',
): string => {
  if (date === null) return date
  return dayjs(date).format(format)
}
