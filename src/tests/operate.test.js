import operate from '../logic/operate';

describe('Tests for operate.js', () => {
  test('adds 1 + 2 to equal 3', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });

  test('subtracts 3 - 2 to equal 1', () => {
    const result = operate('3', '2', '-');
    expect(result).toBe('1');
  });

  test('multiplys 3 x 2 to equal 6', () => {
    const result = operate('3', '2', 'x');
    expect(result).toBe('6');
  });

  test('divides 6 ÷ 2 to equal 3', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  test("divides 6 ÷ 0 = Can't divide by 0.", () => {
    const result = operate('6', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('modulo 6 % 2 to equal 0', () => {
    const result = operate('6', '2', '%');
    expect(result).toBe('0');
  });

  test("modulo 6 % 0 = Can't find modulo as can't divide by 0.", () => {
    const result = operate('6', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
