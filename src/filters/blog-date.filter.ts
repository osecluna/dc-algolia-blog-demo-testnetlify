import dayjs from 'dayjs';
export default (value: string, format = 'D MMMM YYYY'): string => {
  if (!value) {
    return '';
  }
  return dayjs(value).format(format);
};
