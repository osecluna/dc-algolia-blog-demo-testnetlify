import dateFilter from './blog-date.filter';

describe('BlogDate filter', () => {
  test('valid date returns a formatted date', () => {
    expect(dateFilter('1536710400')).toEqual('12 September 2018');
  });

  test('undefined date returns and empty string', () => {
    expect(dateFilter('')).toEqual('');
  });
});
