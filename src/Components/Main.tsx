import { useEffect, useState } from "react";
import Input from "./Input";
import Countries from "./Countries";
import FilterComponent from "./FilterComponent";

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

const Main = () => {
  const [data, setData] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
       return  response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      });
  }, []);

  if (loading) return <p>Chargement des données ...</p>
  if (error) return <p>Error: {error}</p>
  

  return (
    <main className="bg-[#282B30] min-h-screen border border-[#6C727F] relative bottom-20 rounded-xl p-8 text-primary">
      <div className="flex justify-between items-center">
        <h4 className="text-primary font-bold tracking-wide">
          Found {data.length || 0} countries
        </h4>
        <Input state={{ search, setSearch }} />
      </div>
      <section className="flex gap-14 justify-center mt-10">
        <FilterComponent />
        <Countries data={data} search={search} />
      </section>
    </main>
  );
};

Main.displayName = "MainComponent";
export default Main;
