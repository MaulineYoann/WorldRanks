import MemberStatusState from "../../strore/MemberOrIndependant.tsx";
import Check from "../Features/Check";

const Status = () => {
  const { unitedMember, setUnitedMember, independant, setIndependant } = MemberStatusState();
  const handleMember = () => setUnitedMember(!unitedMember ? true : false);
  const handleIndepedant = () => setIndependant(!independant ? true : false);

  return (
    <div className="mt-5 text-secondary">
      <label className="py-5">Status</label>
      <div className="flex flex-col">
        <Check
          label="Member of the United Nations"
          isChecked={unitedMember}
          onChange={handleMember}
        />
        <Check
          label="Independant"
          isChecked={independant}
          onChange={handleIndepedant}
        />
      </div>
    </div>
  );
};

export default Status;
