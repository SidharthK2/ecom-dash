"use client";

import { Modal } from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new Store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      store creations form
    </Modal>
  );
};
