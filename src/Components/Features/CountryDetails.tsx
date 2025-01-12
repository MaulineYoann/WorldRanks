import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import InfoButton from "./InfoButton";
import InfoCountry from "./InfoCountry";
import routes from "../../router/Routes";

interface Country {
  name: {
    common: string
    official: string
  }
  flags: {
    alt: string
    png: string
  }
  population: number
  capital?: string
  subregion: string
  languages?: Record<string, string>
  currencies: Record<string, { name: string }>
  continent: string[]
  borders?: string[]
  fifa?: string
}

const CountryDetails = () => {

  const [neighborCountry, setNeighborCountry] = useState<Country[]>([]);
  const { state } = useLocation()
  const country = state?.country
  const noValue = "Unknown"
  
  const fetchNeighboring = async (borders: string[]) => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all")
      const data = await response.json()
      const neighbors = data.filter((country: Country) => borders.includes(country.fifa || ""));
      setNeighborCountry(neighbors)
    } catch (err) {
      console.error(`Error for fetching ${err}`)
    }
  }

  useEffect(() => {
    if (country?.borders?.length) fetchNeighboring(country.borders);
  }, [country])

  if (!country) return <div>...Loading</div>

  return (
    <section className="bg-[#282B30] min-h-screen border border-[#6C727F] bottom-20 rounded-xl text-secondary relative">
      <Link to={routes.index} className="absolute border p-3 cursor-pointer">Back to home</Link>
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
        <InfoButton 
        label="Population" 
        value={country.population} />
        <InfoButton l
        abel="Area (km²)" 
        value={country.area} />
      </div>
      <InfoCountry 
        label="Capital" 
        value={country.capital} />
      <InfoCountry 
        label="Suberegion" 
        value={country.subregion} />
      <InfoCountry
        label="Language"
        value={
          country.languages 
          ? Object.values(country.languages).join("")
          : noValue
        }
      />
      <InfoCountry
        label="Currencies"
        value={
          country.currencies
          ? Object.values(country.currencies).join("")
          : noValue
        }
      />
      <InfoCountry
        label="Continents"
        value={country.continents.join(", ")}
      />
      <InfoCountry
        label="Neighbouring Countries"
        borders={neighborCountry}
        country={country}
      />
    </section>
  );
};

export default CountryDetails
