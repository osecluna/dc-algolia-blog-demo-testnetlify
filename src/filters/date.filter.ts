import dayjs from 'dayjs';
export default (value: string, format = 'dddd D MMMM YYYY HH:mm:ss'): string => {
  if (!value) {
    return '';
  }
  return dayjs(value).format(format);
};
