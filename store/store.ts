import { create } from "zustand";

interface StoreState {
  resultImageUrl: string | null;
  uploadedImageUrl: string | null;
  roomType: string | null;
  roomTheme: string | null;
  loading: boolean;
  file: File | null;
  handleUploadImage: (imageUrl: string) => void;
  handleResultImage: (imageUrl: string) => void;
  handleRoomType: (value: string) => void;
  handleRoomTheme: (value: string) => void;
  handleResetForm: () => void;
  handleLoading: (check: boolean) => void;
  handleFile: (file: File) => void;
}

const useStore = create<StoreState>((set) => ({
  resultImageUrl: null,
  uploadedImageUrl: null,
  roomType: null,
  roomTheme: null,
  loading: false,
  file: null,
  handleUploadImage: (imageUrl) => set(() => ({ uploadedImageUrl: imageUrl })),
  handleResultImage: (imageUrl) => set(() => ({ resultImageUrl: imageUrl })),
  handleRoomType: (value) => set(() => ({ roomType: value })),
  handleRoomTheme: (value) => set(() => ({ roomTheme: value })),
  handleLoading: (check) => set(() => ({ loading: check })),
  handleFile: (file) => set(() => ({ file: file })),
  handleResetForm: () =>
    set(() => ({ roomTheme: null, roomType: null, uploadedImageUrl: null })),
}));

export default useStore;
