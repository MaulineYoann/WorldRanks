import { create } from "zustand";

interface RegionStateProps {
  regionState: string[];
  setRegionState: (update: (prev: string[]) => string[]) => void
}


const RegionStore = create<RegionStateProps>((set) => ({
    regionState: [],
    setRegionState: (update: (prev: string[]) => string[]) => 
      set((state) => ({ regionState: update(state.regionState) }))
  }));

export default RegionStore
