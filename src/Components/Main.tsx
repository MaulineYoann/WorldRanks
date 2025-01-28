import { useState } from "react";

import Input from "./Input";
import Countries from "./Countries";
import FilterComponent from "./FilterComponent";

import UseFetch from "./Hooks/UseFetch";

const Main = () => {

  const [search, setSearch] = useState("");
  const { data, loading, error } = UseFetch("https://restcountries.com/v3.1/all")

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
