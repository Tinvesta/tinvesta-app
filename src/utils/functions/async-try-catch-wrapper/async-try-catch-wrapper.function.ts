export const asyncTryCatchWrapper = async <TData = unknown>(
  toExecute: () => Promise<TData>,
  onError?: (error: unknown) => void,
): Promise<TData | void> => {
  try {
    return await toExecute();
  } catch (error: unknown) {
    if (onError) {
      onError(error);
    }
  }
};
