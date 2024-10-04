import { create } from "zustand";

interface StoreState {
  resultImageUrl: string | null;
  uploadedImageUrl: string | null;
  roomType: string | null;
  roomTheme: string | null;
  handleUploadImage: (imageUrl: string) => void;
  handleResultImage: (imageUrl: string) => void;
  handleRoomType: (value: string) => void;
  handleRoomTheme: (value: string) => void;
  handleResetForm: () => void;
}

const useStore = create<StoreState>((set) => ({
  resultImageUrl: null,
  uploadedImageUrl: null,
  roomType: null,
  roomTheme: null,
  handleUploadImage: (imageUrl) => set(() => ({ uploadedImageUrl: imageUrl })),
  handleResultImage: (imageUrl) => set(() => ({ resultImageUrl: imageUrl })),
  handleRoomType: (value) => set(() => ({ roomType: value })),
  handleRoomTheme: (value) => set(() => ({ roomTheme: value })),
  handleResetForm: () =>
    set(() => ({ roomTheme: null, roomType: null, uploadedImageUrl: null })),
}));

export default useStore;
