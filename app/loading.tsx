
export default function Loading(){
    return(
        <>
            <div className="max-w-[1200px] w-full mx-auto px-6 pt-4 flex flex-col md:flex-row justify-between gap-3">
                <div className="flex items-center bg-gray-200 rounded px-2 py-2 max-w-[560px] w-full h-[36px]"></div>
                <div>
                    <div className="rounded px-6 py-2 bg-gray-200 w-[154px] h-[36px]"></div>
                </div>
            </div>
            <section className="max-w-[1200px] w-full mx-auto px-6 py-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {
                    Array.from({length: 12}).map( (item, index) => (
                        <article key={index} className="block min-w-full h-[250px] p-2 bg-white border-2 rounded-xl">
                            <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl mb-2">
                                <svg className="w-64 h-36 text-gray-200 block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full mb-2.5 mx-auto"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full mb-2.5 mx-auto"></div>
                            
                            <span className="sr-only">Loading...</span>
                        </article>
                    ))
                }
            </section>
        </>
    );
};