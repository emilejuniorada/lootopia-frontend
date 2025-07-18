import { create } from 'zustand';

interface GlobalStore {
  notifications: Array<{
    id: string;
    message: string;
    type: "success" | "error" | "info";
  }>;
  addNotification: (notification: GlobalStore["notifications"][number]) => void;
  removeNotification: (id: string) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      ...state,
      notifications: [...state.notifications, notification],
    })),
  removeNotification: (id) =>
    set((state) => ({
      ...state,
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));

export default useGlobalStore;