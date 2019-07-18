import dayjs from 'dayjs';
export default (value: string, format = 'D MMMM YYYY'): string => {
  if (!value) {
    return '';
  }
  const timestampToFormat = Number(value) * 1000;
  return dayjs(timestampToFormat).format(format);
};
