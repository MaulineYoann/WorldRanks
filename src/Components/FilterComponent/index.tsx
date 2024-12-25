
import InputGroup from "./InputGroup"
import SelectRegion from "./SelectRegion"
import Status from "./UnitedNationsMember"

const FilterComponent = () => {
  return (
    <aside className="w-80">
       <InputGroup />
        <SelectRegion />
        <Status />
    </aside>
  )
}

export default FilterComponent