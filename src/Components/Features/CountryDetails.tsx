import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom";
import InfoButton from "./InfoButton";
import InfoCountry from "./InfoCountry";

const CountryDetails = () => {

  const [neighborCountry, setNeighborCountry] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const { state } = useLocation();
  const params = useParams();
  const country = state?.country;

  const fetchNeighboring = async (neighbors: string[]) => {
    setLoading(true)
    try {
      const response = await fetch("https://restcountries.com/v3.1/all")
      const data = await response.json()
      setNeighborCountry(data)
    } catch(err) {
      console.error(`Error for fetching ${err}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (country?.borders?.length) fetchNeighboring(country)
  }, [country])

  // if (!country) return <div>...Loading</div>
const neighborBorder = neighborCountry.map( item => item.fifa)
const matchingCode = neighborBorder.filter(fifa => country.borders.includes(fifa))
console.log(matchingCode)





  return (
    <section className="bg-[#282B30] min-h-screen border border-[#6C727F] bottom-20 rounded-xl text-secondary">
      <div className="flex items-center flex-col">
        <img
          alt={country.flags.alt}
          src={country.flags.png}
          className="h-70 w-80"
        />
        <h1 className="text-3xl mt-7">{country.name.common}</h1>
        <p>{country.name.official}</p>
      </div>
      <div className="flex justify-center gap-14 mt-9">
        <InfoButton label="Population" value={country.population}/>
        <InfoButton label="Area (km²)" value={country.area}/>
      </div>
      <InfoCountry label="Capital" value={country.capital}/>
      <InfoCountry label="Suberegion" value={country.subregion}/>
      <InfoCountry label="Language" value={Object.values(country.languages).map(language => language)}/>
      <InfoCountry label="Currencies" value={Object.values(country.currencies).map((item) => item.name)}/>
      <InfoCountry label="Continents" value={country.continents.map((item) => item).join(", ")}/>
      <InfoCountry label="Neighbouring Countries" />
    </section>
  );
};

export default CountryDetails;
