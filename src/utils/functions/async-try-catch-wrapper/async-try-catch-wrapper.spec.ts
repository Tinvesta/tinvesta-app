import { asyncTryCatchWrapper, functionImportTest } from '@utils';

describe('asyncTryCatchWrapper function', () => {
  functionImportTest(asyncTryCatchWrapper);

  it('should call onError callback when an error occurs', async () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const func = async () =>
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('test error'));
        }, 200);
      });

    const onError = jest.fn();

    await asyncTryCatchWrapper(func, onError);

    expect(onError).toHaveBeenCalled();
  });

  it('should not invoke onError function when it not passed', async () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const func = async () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('test error'));

          resolve(5);
        }, 200);
      });

    await expect(asyncTryCatchWrapper(func)).resolves.not.toBeDefined();
  });

  it('should call passed function when an error does not occur', async () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const toExecute = async () => 10;

    await expect(asyncTryCatchWrapper(toExecute)).resolves.toEqual(10);
  });
});
