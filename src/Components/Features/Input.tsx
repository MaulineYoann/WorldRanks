
interface inputProps {
    value: string
}

const Input = ({value}: inputProps) => {
  return (
    <input
        type='text'
        value={value}
    />
  )
}

export default Input