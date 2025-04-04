import React from 'react';
import { useModal, useConfirmDialog } from '@/hooks/useModal';
import { ConfirmDialog } from '@/components/common/ConfirmDialog';
import { Button } from '@/components/common/Button';

export const ModalExample: React.FC = () => {
  const { isOpen, open, close } = useModal();
  const {
    isOpen: isConfirmOpen,
    confirm,
    options,
    handleConfirm,
    handleCancel,
  } = useConfirmDialog();

  const handleDeleteClick = async () => {
    const confirmed = await confirm({
      title: 'Delete Item',
      message: 'Are you sure you want to delete this item? This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmVariant: 'danger',
    });

    if (confirmed) {
      // Handle deletion
      console.log('Item deleted');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button onClick={open} variant="primary">
          Open Modal
        </Button>
        <Button onClick={handleDeleteClick} variant="danger">
          Delete Item
        </Button>
      </div>

      {/* Basic Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Basic Modal</h2>
            <p className="mb-4">This is a basic modal example.</p>
            <div className="flex justify-end">
              <Button onClick={close} variant="secondary">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Dialog */}
      {isConfirmOpen && options && (
        <ConfirmDialog
          isOpen={isConfirmOpen}
          onClose={handleCancel}
          onConfirm={handleConfirm}
          title={options.title}
          message={options.message}
          confirmText={options.confirmText}
          cancelText={options.cancelText}
          confirmVariant={options.confirmVariant}
        />
      )}
    </div>
  );
}; 