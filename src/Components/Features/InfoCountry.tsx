import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface InfoCountryProps {
  label: string;
  value?: ReactNode;
  borders?: CountryBorder[];
  country?: string[];
}

interface CountryBorder {
  name: {
    common: string;
  };
  flags: {
    png: string;
    alt?: string;
  };
}

const InfoCountry = ({ label, value, borders }: InfoCountryProps) => {
  return (
    <>
      <div className="border border-primary border-collapse p-4">
        <div className="flex justify-between">
          <p className="text-primary pb-4">{label}</p>
          <p className="text-secondary">{value}</p>
        </div>
        <div className="flex gap-11">
          {borders?.map((item, index) => (
            <NavLink
              key={index}
              to={`/country/${item.name.common}`}
              state={{ country: item }}
            >
              <div className="flex flex-col flex-wrap items-center gap-2 pb-5">
                <img
                  src={item.flags.png}
                  alt={item.flags.alt}
                  className="h-10 w-20"
                />
                <p>{item.name.common}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCountry;