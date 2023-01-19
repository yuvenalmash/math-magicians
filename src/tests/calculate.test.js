import calculate from '../logic/calculate';

describe('Tests for calculate.js', () => {
  test('AC should reset object values', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('double zero entry to return {}', () => {
    const obj = {
      total: '',
      next: '0',
      operation: '',
    };
    expect(calculate(obj, '0')).toEqual({});
  });

  test('There is an operation, update next', () => {
    const obj = {
      total: '0',
      next: '1',
      operation: '+',
    };
    expect(calculate(obj, '2')).toEqual({
      total: '0',
      next: '12',
      operation: '+',
    });
  });

  test('There is an operation and next is zero, update next', () => {
    const obj = {
      total: '',
      next: '0',
      operation: '+',
    };
    expect(calculate(obj, '2')).toEqual({
      total: '',
      next: '2',
      operation: '+',
    });
  });

  test('There is no operation, update next and clear the value', () => {
    const obj = {
      total: 0,
      next: '1',
      operation: '',
    };
    expect(calculate(obj, '23')).toEqual({
      total: null,
      next: '123',
    });
  });

  test('Period is added after number, update next', () => {
    const obj = {
      total: 0,
      next: '2',
      operation: '',
    };
    expect(calculate(obj, '.')).toEqual({
      total: 0,
      next: '2.',
      operation: '',
    });
  });

  test('Period is added after another period, ignore the last', () => {
    const obj = {
      total: null,
      next: '2.',
      operation: '',
    };
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '2.',
      operation: '',
    });
  });

  test('= resets next and operation while calling operate()', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  test('Pressing +/- key with positive numbers', () => {
    const obj = {
      total: null,
      next: '3',
      operation: '',
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-3',
      operation: '',
    });
  });

  test('Pressing +/- key with negative numbers', () => {
    const obj = {
      total: null,
      next: '-3',
      operation: '',
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '3',
      operation: '',
    });
  });

  test('Pressing operation when there is an operation', () => {
    const obj = {
      total: '0',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, 'x')).toEqual({
      total: '3',
      next: null,
      operation: 'x',
    });
  });
});
