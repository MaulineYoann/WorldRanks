import { useEffect, useState } from "react"
import Input from "./Input"
import Countries from "./Countries"
import FilterComponent from "./FilterComponent"

const Main = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, []);


  return (
    <main className="bg-[#282B30] min-h-screen border border-[#6C727F] relative bottom-20 rounded-xl p-8 text-primary">
      <div className="flex justify-between items-center">
        <h4 className="text-primary font-bold tracking-wide">
          Found {data.length} countries
        </h4>
        <Input state={{search, setSearch}}/>
      </div>
      <section className="flex gap-14 justify-center mt-10">
        <FilterComponent />
        <Countries data={data} search={search}/>
      </section>
    </main>
  );
};

Main.displayName = "MainComponent"
export default Main
