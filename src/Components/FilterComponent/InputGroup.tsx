import { ChangeEvent } from "react";
import SortStore from "../../strore/SortStore";
import { sortOption } from "../Constants/Region";

const InputGroup = () => {
  const { setActiveSort } = SortStore();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setActiveSort(event.target.value);

  return (
    <section className="flex flex-col">
      <label className="mb-3">Sort by</label>
      <select
        onChange={handleChange}
        className="bg-[#282B30] border border-secondary h-14 rounded-xl p-2 text-secondary outline-none"
      >
        {Object.keys(sortOption).map((items, index) => (
          <option key={index} value={items}>
            {items}
          </option>
        ))}
      </select>
    </section>
  );
};

export default InputGroup;
