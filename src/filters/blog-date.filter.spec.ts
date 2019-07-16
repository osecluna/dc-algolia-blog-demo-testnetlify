import dateFilter from './blog-date.filter';

describe('BlogDate filter', () => {
  test('valid date returns a formatted date', () => {
    expect(dateFilter('2019-01-02T03:04:05.06Z')).toEqual('2 January 2019');
  });

  test('undefined date returns and empty string', () => {
    expect(dateFilter('')).toEqual('');
  });
});
