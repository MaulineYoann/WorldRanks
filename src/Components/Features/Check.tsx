

interface CheckProps {
    label: string
    isChecked: boolean
    onChange: () => void
}

const Check = ({label, isChecked, onChange}: CheckProps) => {
  return (
    <div className="flex items-center mt-5">
        <input type="checkbox" className="mr-3 h-5 w-5" checked={isChecked} onChange={onChange}/>
        <label>{label}</label>
    </div>
  )
}

export default Check