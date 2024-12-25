import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
}

const Section = ({children}: SectionProps) => {
  return (
    <section className="bg-[#1B1D1F] min-h-screen px-20 relative">
        {children}
    </section>
  )
}


Section.displayName = "SectionComponent"
export default Section