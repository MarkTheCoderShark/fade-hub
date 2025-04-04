import { useState, useCallback } from 'react';
import { useToast } from '@/components/common/ToastContext';

interface UseAsyncOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  showToastOnError?: boolean;
  showToastOnSuccess?: boolean;
  successMessage?: string;
}

export function useAsync<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const { showToast } = useToast();

  const execute = useCallback(
    async (
      asyncFunction: () => Promise<T>,
      options: UseAsyncOptions<T> = {}
    ) => {
      const {
        onSuccess,
        onError,
        showToastOnError = true,
        showToastOnSuccess = false,
        successMessage,
      } = options;

      try {
        setIsLoading(true);
        setError(null);
        const result = await asyncFunction();
        setData(result);
        onSuccess?.(result);
        if (showToastOnSuccess && successMessage) {
          showToast(successMessage, 'success');
        }
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('An error occurred');
        setError(error);
        onError?.(error);
        if (showToastOnError) {
          showToast(error.message, 'error');
        }
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [showToast]
  );

  return {
    execute,
    isLoading,
    error,
    data,
  };
} 