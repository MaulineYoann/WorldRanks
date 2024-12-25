
import { create } from 'zustand'

interface SortStoreprops {
    activeSort: string
    setActiveSort: (sort: string) => void
}

const SortStore = create<SortStoreprops> ((set) => ({
    activeSort: "population",
    setActiveSort: (sort) => set({activeSort: sort})
}))

export default SortStore