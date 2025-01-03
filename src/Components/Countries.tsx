import { Fragment } from "react/jsx-runtime";
import SortStore from "../strore/SortStore";
import MemberOrIndependant from "../strore/MemberOrIndependant";
import RegionStore from "../strore/RegionStrore";
import { Link } from "react-router-dom";

interface CountriesProps {
  data: Country
  search: string
}

interface Country {
  flag: string;
  name: {
    common: string; 
    official?: string; 
  };
  population: number; 
  area: number; 
  region: string; 
}

const Countries = ({ data, search }: CountriesProps) => {
  const { activeSort } = SortStore();
  const { regionState } = RegionStore();
  const { unitedMember, independant } = MemberOrIndependant();

  const addVirgule = (num: number): string =>
    new Intl.NumberFormat("en-US").format(num);

  const chooseSort = (value: string, data: any[]) => {
    if (value === "population") {
      return [...data].sort((a, b) => b.population - a.population);
    }
    if (value === "area") {
      return [...data].sort((a, b) => b.area - a.area);
    }
    if (value === "alphabetical") {
      return [...data].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    }
    return data;
  };

  const sortedData = chooseSort(activeSort, data);

  const applyFilter = (data: Country[], ...filters) => {
    return filters.reduce((result, filterFunc) => filterFunc(result), data);
  };

  const handleIndependant = (data: any[]) =>
    independant ? [...data].filter((value) => value.independent) : data;
  const handleMember = (data: any[]) =>
    unitedMember ? [...data].filter((value) => value.unMember) : data;
  const handleRegion = (data: any[]) =>
    regionState.length
      ? [...data].filter((region) => regionState.includes(region.region))
      : data;

  const handleSearch = (data: any[]) => {
    if (!search.trim()) return data;
    return data.filter(
      (item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase()) ||
        item.region.toLowerCase().includes(search.toLowerCase()) ||
        item.subregion?.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = applyFilter(
    sortedData,
    handleIndependant,
    handleMember,
    handleRegion,
    handleSearch
  );

  return (
    <>
      <table>
        <thead className="text-primary border-b border-primary">
          <tr>
            <th>Flag</th>
            <th className="w-52">Name</th>
            <th className="w-52">Population</th>
            <th className="w-52">Area (km)</th>
            <th className="w-52">Region</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((country: Country, index: number) => (
            <Fragment key={index}>
              <tr className="table-auto text-center text-secondary">
                <td className="text-6xl">{country.flag}</td>
                <td>
                  <Link
                    to={`/country/${country.name.common}`}
                    state={{ country }}
                  >
                    {country.name.common}
                  </Link>
                </td>
                <td>{addVirgule(country.population)}</td>
                <td>{country.area}</td>
                <td>{country.region}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Countries;
