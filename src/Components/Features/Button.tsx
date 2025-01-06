import RegionStore from "../../strore/RegionStrore";
interface ButtonProps {
  children: string
  setSelect: React.Dispatch<React.SetStateAction<string[]>>
  select: string[]
}

const Button = ({ children, setSelect, select }: ButtonProps) => {

    const { setRegionState } = RegionStore()

  const handleClick = (value: string) => {
    if (select.includes(children)) {
      setSelect(select.filter((el) => el !== value));
      setRegionState(prev => prev.filter(item => item !== value))
    } else {
      setSelect((prev) => [...prev, value]);
      setRegionState((prev) => [...prev, value])
    }
  };
  const isSelect = select.includes(children);

  return (
    <button
      onClick={() => handleClick(children)}
      className={`${
        isSelect
          ? "text-secondary p-3"
          : "p-3 bg-[#1B1D1F] rounded-2xl text-secondary"
      }`}
    >
      {children}
    </button>
  )
}

export default Button;
