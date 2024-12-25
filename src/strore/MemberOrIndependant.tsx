import { create } from "zustand";

interface MemberOrIndependantProps {
    unitedMember: boolean
    setUnitedMember: (value: boolean) => void
    independant: boolean
    setIndependant: (value: boolean) => void
}

const MemberOrIndependant = create<MemberOrIndependantProps> ((set) => (
    {
        unitedMember: false,
        setUnitedMember: (status: boolean) => set({unitedMember: status}),
        independant: false,
        setIndependant: (status: boolean) => set({independant: status})
    }
))

export default MemberOrIndependant