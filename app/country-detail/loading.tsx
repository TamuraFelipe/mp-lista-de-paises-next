export default function Loading(){
    return(
        <section className="max-w-[1200px] w-full mx-auto px-6 py-4">
            <div className="mt-12 h-16 bg-gray-200 rounded-full w-48 mx-auto"></div>
            
            <div className='flex items-center gap-2 text-gray-500'>
                <div className="h-5 bg-gray-200 rounded-full w-14 mb-4"></div>
            </div>
            
            <article className='w-full rounded-xl bg-white px-16 py-11 flex flex-col-reverse lg:flex-row gap-6 items-center justify-between mb-[75px]'>
                <div className="flex flex-col gap-2">
                    <div className="w-64 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="w-64 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="w-64 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="w-64 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="w-16 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="w-16 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="relative w-full max-w-[460px] h-[10rem] lg:h-[20rem] p-2 overflow-hidden rounded-xl mb-2">
                    <svg className="w-36 h-36 text-gray-200 dark:text-gray-400 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <span className="sr-only">Loading...</span>
            </article>
            
            <div className="mb-[80px]">
                <h2 className="text-4xl text-gray-800 font-bold mb-[50px]">Países que fazem fronteira</h2>
                <section className="max-w-[1200px] w-full mx-auto px-6 py-4 grid grid-cols-4 items-center justify-between gap-3">
                    {
                        Array.from({length: 4}).map( (item, index) => (
                            <article key={index} className="block min-w-full h-[250px] p-2 bg-white border-2 rounded-xl">
                                <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl mb-2">
                                    <svg className="w-64 h-36 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                    </svg>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5 mx-auto"></div>
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5 mx-auto"></div>
                                
                                <span className="sr-only">Loading...</span>
                            </article>
                        ))
                    }
                </section>
            </div>
        </section>
    );
};