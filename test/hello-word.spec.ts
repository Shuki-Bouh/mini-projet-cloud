import { helloWorld } from '../src/hello-world';

describe('typeScript test suite', () => {
  it('should return "Hello world!"', () => {
    expect.assertions(1);
    expect(helloWorld()).toBe('Hello, World!');
  });
});
