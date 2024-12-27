
interface InfoButtonprops {
    label: string
    value: string
}
const InfoButton = ({label, value}: InfoButtonprops) => {
  return (
    <button  className="p-5 bg-[#1B1D1F] rounded-2xl text-secondary flex gap-5">
        <p className='"border-r pr-5"'>{label}</p>
        <p>{value}</p>
    </button>
  )
}

export default InfoButton