"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const formSchema = z.object({
  name: z.string().min(3),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

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
