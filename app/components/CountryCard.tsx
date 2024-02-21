import Image from "next/image";
import Link from "next/link";

export default function CountryCard(
    {
        name, 
        flag, 
        ptName
    }:
    {
        name: string;
        flag: string;
        ptName: string
    }
    ) {
    return(
        <Link href={`/country-detail/${name}`} className="block min-w-full h-[250px] p-2 bg-white border-2 rounded-xl hover:bg-gray-100 hover:border-gray-200 transition-all">
            <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl mb-2">
                <Image 
                fill 
                src={flag} 
                alt={`Bandeira da ${name}`} 
                className="object-cover" 
                priority={true}
                />
            </div>
            <span className="block text-2xl font-bold text-center text-gray-600">{ptName}</span>
        </Link>
    );
};