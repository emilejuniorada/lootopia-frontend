import { create } from 'zustand';

export type Hunt = {
    id: number | null;
    title: string;
    description: string;
    world: 'Reel' | 'Cartographique';
    duration: number;
    endDate: string | null;
    isPublic: boolean;
    participantsLimit: number | null;
    reward: number | 0;
    isActive: boolean;
    maps: Map[]
    caches: Cache[]
    [key: string]: any;
};

export type Map = {
    centerLat: number | null;
    centerLng: number | null;
    maxboundsSwLat: number | null;
    maxboundsSwLng: number | null;
    maxboundsNeLat: number | null;
    maxboundsNeLng: number | null;
    zoom: number | null;
};

export type Cache = {
    id: number | null;
    latitude?: number | null;
    longitude?: number | null;
    hint: string;
    isRequired: boolean;
    keyType: 'cache' | 'passphrase';
    passphrase?: string;
    reward?: number
};

export type Reward = {
    id: number | null;
    hunt_id: number | null;
    type: 'monnaie' | 'objet' | 'contenu' | 'partenaire';
    description: string;
};

export type QuestFormState = {
    id: number | null;
    title: string;
    description: string;
    world: 'Reel' | 'Cartographique';
    duration: number | 0;
    endDate: string | Date | null;
    isPublic: boolean;
    participantsLimit: number | 0;
    map: Map;
    caches: Cache[];
    reward: number;
};

type QuestFormStore = QuestFormState & {
    setId: (id: number | null) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setWorld: (world: 'Reel' | 'Cartographique') => void;
    setDuration: (duration: number) => void;
    setEndDate: (endDate: string | Date | null) => void;
    setIsPublic: (isPublic: boolean) => void;
    setParticipantsLimit: (participantsLimit: number | 0) => void;
    setMap: (map: Map) => void;
    updateMap: (map: Partial<Map>) => void;
    resetMap: () => void;
    addCache: (cache: Cache) => void;
    updateCache: (id: number, cache: Partial<Cache>) => void;
    removeCache: (id: number) => void;
    setReward: (duration: number) => void;
    resetForm: () => void;
    validations: Record<string, () => boolean | Promise<boolean>>;
    setValidation: (stepKey: string, fn: () => boolean | Promise<boolean>) => void;
};

export const useFormStore = create<QuestFormStore>((set) => ({
    id: null,
    title: '',
    description: '',
    world: 'Cartographique',
    duration: 500,
    endDate: null,
    isPublic: false,
    participantsLimit: 0,
    map: {
        centerLat: null,
        centerLng: null,
        maxboundsSwLat: null,
        maxboundsSwLng: null,
        maxboundsNeLat: null,
        maxboundsNeLng: null,
        zoom: null,
    },
    caches: [],
    reward: 0,
    setId: (id) => set(() => ({ id })),
    setTitle: (title) => set(() => ({ title })),
    setDescription: (description) => set(() => ({ description })),
    setWorld: (world) => set(() => ({ world })),
    setDuration: (duration) => set(() => ({ duration })),
    setEndDate: (endDate) => set(() => ({ endDate })),
    setIsPublic: (isPublic) => set(() => ({ isPublic })),
    setParticipantsLimit: (participantsLimit) => set(() => ({ participantsLimit })),
    setMap: (map) => set(() => ({ map })),
    updateMap: (map) => set((state) => ({ map: { ...state.map, ...map } })),
    resetMap: () =>
        set(() => ({
            map: {
                centerLat: null,
                centerLng: null,
                maxboundsSwLat: null,
                maxboundsSwLng: null,
                maxboundsNeLat: null,
                maxboundsNeLng: null,
                zoom: null,
            },
        })),
    addCache: (cache) => set((state) => ({ caches: [...state.caches, cache] })),
    updateCache: (id, cache) =>
        set((state) => ({
            caches: state.caches.map((c) => (c.id === id ? { ...c, ...cache } : c)),
        })),
    removeCache: (id) =>
        set((state) => ({ caches: state.caches.filter((c) => c.id !== id) })),
    setReward: (reward) => set(() => ({ reward })), 
    resetForm: () =>
        set({
            id: null,
            title: '',
            description: '',
            world: 'Reel',
            duration: 0,
            endDate: null,
            isPublic: true,
            participantsLimit: 0,
            map: {
                centerLat: null,
                centerLng: null,
                maxboundsSwLat: null,
                maxboundsSwLng: null,
                maxboundsNeLat: null,
                maxboundsNeLng: null,
                zoom: null,
            },
            caches: [],
            reward: 0,
        }),
    validations: {},
    setValidation: (stepKey, fn) =>
        set((state) => ({
            validations: {
                ...state.validations,
                [stepKey]: fn,
            },
        })),
}));
