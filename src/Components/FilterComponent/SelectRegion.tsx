import { useState } from "react";
import Button from "../Features/Button";

import { regions } from "../Constants/Region";

const SelectRegion = () => {
  
  const [select, setSelect] = useState<string[]>([])

  return (
    <div className="mt-5">
      <label className="block mb-5">
        Region
      </label>
      <div className="flex flex-wrap gap-2">

      {regions.map((region, index) => (
        <Button
          key={index}
          children={region}
          select={select}
          setSelect={setSelect}
        />
      ))}
      </div>
    </div>
  );
};

export default SelectRegion;
