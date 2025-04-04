import { useState, useCallback } from 'react';

interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useModal(initialState = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}

interface ConfirmDialogOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'primary' | 'danger';
}

interface UseConfirmDialogReturn extends UseModalReturn {
  confirm: (options: ConfirmDialogOptions) => Promise<boolean>;
  options: ConfirmDialogOptions | null;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export function useConfirmDialog(): UseConfirmDialogReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmDialogOptions | null>(null);
  const [resolve, setResolve] = useState<((value: boolean) => void) | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  const confirm = useCallback((options: ConfirmDialogOptions) => {
    setOptions(options);
    open();
    return new Promise<boolean>((res) => {
      setResolve(() => res);
    });
  }, [open]);

  const handleConfirm = useCallback(() => {
    close();
    resolve?.(true);
  }, [close, resolve]);

  const handleCancel = useCallback(() => {
    close();
    resolve?.(false);
  }, [close, resolve]);

  return {
    isOpen,
    open,
    close,
    toggle,
    confirm,
    options,
    handleConfirm,
    handleCancel,
  };
} 