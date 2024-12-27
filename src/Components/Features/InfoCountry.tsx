
interface InfoCountryProps {
    label: string
    value?: string | string[]
}

const InfoCountry = ({label, value}: InfoCountryProps) => {
  return (
    <div className="border border-primary border-collapse flex justify-between p-4">
        <p className="text-primary">{label}</p>
        <p className="text-secondary">{value}</p>
    </div>
  )
}

export default InfoCountry