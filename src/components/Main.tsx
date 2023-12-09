import Image from "next/image";

export default function Main() {
    return (<>
        <div className="flex justify-center items-center bg-[#D8D9DA] text-black p-10">
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex justify-center items-center">
                        <Image src={'/home1.jpg'} width={500} height={500} alt="home" className="w-[28rem]" style={{ borderRadius: '49% 51% 67% 33% / 46% 51% 49% 54% ', boxShadow: '2px 1px 10px black' }} />
                    </div>

                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <p className="font-semibold text-gray-900 text-xl">
                            Your premier destination for cutting-edge website design and web development services. As a top-tier company with a strong presence in both India and the USA, we are committed to delivering the finest web development solutions to businesses and startups across the globe. With an unwavering dedication to excellence, we guarantee a 100% project delivery rate.
                        </p>
                        <div className="flex justify-center items-center mt-4 ">
                            <div className="flex gap-8  bg-black/5 rounded-md p-4" style={{ boxShadow: '2px 1px 6px greay' }}>
                                <div className="flex justify-center items-center">
                                    <div >
                                        <Image src={'/seo_logo.png'} width={500} height={500} alt="SEO" className="w-24 lg:w-16 opacity-90" />
                                        <h2 className="font-medium text-xs font-sans text-center">SEO</h2>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <Image src={'/sd_logo.png'} width={500} height={500} alt="SD" className="w-14 lg:w-16 opacity-90" />
                                        </div>
                                        <h2 className="font-medium text-xs font-sans text-center">Software Development</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <Image src={'/ui_ux_logo.png'} width={500} height={500} alt="SEO" className="w-16 opacity-90" />
                                    </div>
                                    <h2 className="font-medium text-xs font-sans text-center">UI/UX Design</h2>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <Image src={'/ds_logo.png'} width={500} height={500} alt="SEO" className="w-16 opacity-90" />
                                    </div>
                                    <h2 className="font-medium text-xs font-sans text-center">Data Science</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}