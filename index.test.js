const getTraceId = require('.');

it('should export getTraceId function', () => {
  expect(getTraceId).toBeInstanceOf(Function);
});

it('should return lambda trace id if present', () => {
  process.env._X_AMZN_TRACE_ID =
    'Root=1-5a63c944-524af1e83d023d4d222d8a3b;Parent=533a3da646ba1902;Sampled=1';

  const traceId = getTraceId();
  expect(traceId).toEqual({
    root: '1-5a63c944-524af1e83d023d4d222d8a3b',
    parent: '533a3da646ba1902'
  });

  delete process.env._X_AMZN_TRACE_ID;
});

it('should return empty state when no env var present', () => {
  const traceId = getTraceId();
  expect(traceId).toEqual({
    root: '',
    parent: ''
  });
});
