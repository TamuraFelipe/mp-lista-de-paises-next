import { Search } from "lucide-react";
import CountryCard from "./components/CountryCard";

export type CountryPropTypes = {
  name: {
    common: string
  };
  translations: {
    por: {
      common: string
    }
  };
  flags: {
    svg: string,
    alt: string
  };
  continents: string;
  population: number;
  capital: string;
  region: string;
  subregion: string;
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  cca3: string;
  
}

export default async function Home() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries: CountryPropTypes[] = await response.json();
  
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto px-6 pt-4 flex flex-col md:flex-row justify-between gap-3">
        <div className="flex items-center bg-white rounded px-2 py-2 max-w-[560px] w-full">
          <Search size={20} className="ml-2 text-gray-400"/>
          <input type="text" placeholder="Pesquise o nome do país" className="rounded px-2 w-full"/>
        </div>
        <div>
          <select name="regions" id="regions" className="rounded px-6 py-2">
            <option value="all">All Regions</option>
            <option value="america">America</option>
            <option value="europe">Europa</option>
            <option value="asia">Ásia</option>
          </select>
        </div>
      </div>
      <section className="max-w-[1200px] w-full mx-auto px-6 py-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {
          countries && countries.map( (country, index) => (
            <div key={country.name.common}>
              <CountryCard 
              key={index}
              name={country.name.common}
              flag={country.flags.svg}
              ptName={country.translations.por.common}
              />
            </div>
          ))
        }
      </section>
    </>
  );
}
