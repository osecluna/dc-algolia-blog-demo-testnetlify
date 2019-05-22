import dateFilter from './date.filter';

describe('Date filter', () => {
  test('valid date returns a formatted date', () => {
    expect(dateFilter('2019-01-02T03:04:05.06Z')).toEqual('Wednesday 2 January 2019 03:04:05');
  });

  test('undefined date returns and empty string', () => {
    expect(dateFilter('')).toEqual('');
  });
});
