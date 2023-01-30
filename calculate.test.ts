import { add } from './calculate';

it('when given two numbers, returns the sum', () => {
    let result = add(3, 8);
    expect(result).toBe(11);
});