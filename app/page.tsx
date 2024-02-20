import Image from "next/image";
import Link from "next/link";

type CountryPropTypes = {
  name: {
    common: string
  },
  translations: {
    por: {
      common: string
    }
  },
  flags: {
    svg: string,
    alt: string
  },
  population: string,
}

export default async function Home() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries: CountryPropTypes[] = await response.json();
  console.log(countries)

  return (
    <section className="max-w-[1200px] w-full mx-auto px-6 py-4 grid grid-cols-4 items-center justify-between gap-3">
      {
        countries && countries.map( (country) => (
          <div key={country.name.common}>
            <Link href='/' className="block h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:bg-gray-100 hover:border-gray-200 transition-all">
              <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl mb-2">
                <Image fill src={country.flags.svg} alt={country.flags.alt} className="object-cover"/>
              </div>
              <span className="block text-sm"><strong>Nome: </strong>{country.translations.por.common}</span>
              <span className="block text-sm"><strong>População: </strong>{country.population}</span>
              <span className="block text-sm"><strong>Nome: </strong>{country.translations.por.common}</span>
            </Link>
          </div>
        ))
      }
    </section>
  );
}
