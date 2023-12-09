import Image from "next/image";

export default function OurClients() {
    return (<>
        <div className="bg-[#D8D9DA] p-10">
            <h2 className="text-center text-3xl font-semibold text-black/80 mb-4">Our Clients</h2>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-5 gap-4">
                    <div className=" bg-white px-2 rounded-xl shadow-md flex justify-center items-center">
                        <Image src={'/hotspot.svg'} width={500} height={500} alt="hotspot" className="w-[10rem]" />
                    </div>
                    <div className=" bg-white px-2 rounded-xl shadow-md flex justify-center items-center">
                        <Image src={'/pango.svg'} width={500} height={500} alt="pango" className="w-[10rem]" />
                    </div>
                    <div className=" bg-white px-2 rounded-xl shadow-md flex justify-center items-center">
                        <Image src={'/rakuten.svg'} width={500} height={500} alt="rakuten" className="w-[10rem]" />
                    </div>
                    <div className=" bg-white px-2 rounded-xl shadow-md flex justify-center items-center">
                        <Image src={'/vpnlogo.png'} width={500} height={500} alt="vpnlogo" className="w-[10rem]" />
                    </div>
                    <div className=" bg-white px-2 rounded-xl shadow-md flex justify-center items-center">
                        <Image src={'/aura.svg'} width={500} height={500} alt="aura" className="w-[10rem]" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}