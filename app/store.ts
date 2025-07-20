import {create} from 'zustand';

interface screenStore {
    screen: 'desktop' | 'tablet' | 'mobile';
    setScreen: (screen: 'desktop' | 'tablet' | 'mobile') => void;
}

export const useScreenStore = create<screenStore>((set, get) => ({
    screen: 'desktop', // Default to desktop to prevent hydration issues
    setScreen: (screen: 'desktop' | 'tablet' | 'mobile' ) => set({screen}) 
}))