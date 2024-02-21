import Image from "next/image";
import { MoveLeft } from 'lucide-react';

import Link from "next/link";
import type { CountryPropTypes } from "@/app/page";
import CountryCard from "@/app/components/CountryCard";
export default async function CountryDetails({ params: { name }} : { params: { name: string }}) {
    
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json();
    
    const nameFormated = decodeURI(name.replace(/%20/g, " "));
    
    const country = countries.find( (item: CountryPropTypes) => item.name.common === nameFormated)
    
    const findBorders = country?.borders?.map( (border: string) => {
        const borderCountry = countries.find( (country: { cca3: string; }) => country.cca3 === border)!
        return {
            name: borderCountry.name.common,
            ptName: borderCountry.translations.por.common,
            flag: borderCountry.flags.svg,
            flagAlt: borderCountry.flags.alt,
        }
    })
    
    const formatter = Intl.NumberFormat("en", {notation: "compact"})
    const {subregion, continents, population, flags} = country;

    return(
        <section className="max-w-[1200px] w-full mx-auto px-6 py-4">
            <h1 className='text-[54px] font-bold text-center pt-12 text-gray-800'>{country.translations.por.common}</h1>
            <Link href='/' className='flex items-center gap-2 text-gray-500'>
                <MoveLeft className='text-sm text-black'/>
                Voltar
            </Link>
            <article className='w-full rounded-xl bg-white px-16 py-11 flex flex-col-reverse lg:flex-row gap-6 items-center justify-between mb-[75px] '>
                <div className='flex flex-col gap-2'>
                    {
                        subregion && (
                            <div className="text-gray-800"><strong>🏙️ Capital: </strong>{subregion}</div>
                        )
                    }
                    {
                        continents && (
                            <div className="text-gray-800"><strong>🗺️ Continente: </strong>{continents}</div>
                        )
                    }
                    {
                        population && (
                            <div className="text-gray-800"><strong>👨‍👩‍👧‍👦‍ População: </strong>{formatter.format(population)}</div>
                        )
                    }
                    {
                        country.languages && (
                            <div className="text-gray-800">
                                <strong>🗣️ Língua faladas: </strong>
                                <ul className='flex items-center gap-2 flex-wrap'>
                                    {Object.values(country.languages).map( (language: any, index) => (
                                        <li key={index} className='bg-indigo-700 w-fit text-xs text-white px-2 py-0.5 rounded-full'>{language}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className="relative w-full max-w-[460px] h-[10rem] lg:h-[20rem] p-2 overflow-hidden rounded-xl mb-2">
                    <Image fill src={flags.svg} alt={`${flags.alt}`} className="object-cover"/>
                </div>
            </article>
            
            <div className="mb-[80px]">
                <h2 className="text-4xl text-gray-800 font-bold mb-[50px]">Países que fazem fronteira</h2>
                <section className="max-w-[1200px] w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        findBorders && findBorders !== 'undefined' ?
                        findBorders?.map( (border: {
                            ptName: string;
                            flag: string; 
                            name: string; 
                        }, index: number) => (
                            <CountryCard 
                            key={index}
                            {...border}
                            />
                        ))
                        :
                        <span className="font-bold text-sm">Sem fronteiras.</span>
                    }
                </section>
            </div>
        </section>
    );
};