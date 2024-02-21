'use client'
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Error() {
    return(
        <section className="max-w-[1200px] w-full mx-auto px-6 py-4">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16">Ops, não encontramos esse país!</h1>
            <Link href='/' className='flex items-center gap-2 text-gray-500'>
                <MoveLeft className='text-sm text-black'/>
                Voltar
            </Link>
        </section>
    )
}