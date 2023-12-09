import Image from "next/image";
export default function Hero() {
    return (<>
        <div className="flex justify-center items-center md:h-[60vh] lg:h-screen bg-fixed bg-cover custom-image" style={{backgroundImage:'url("/home-bg.jpg")'}}>
            {/* OverLay */}
            <div className="absolute top-0 left-0 w-full md:h-[60vh] lg:h-screen bg-black opacity-50"/>
            <div className="p-5 text-white z-[5] pt-16">
                <h1 className="md:text-2xl lg:text-3xl">Welcome to</h1>
                <h2 className="md:text-4xl lg:text-5xl font-bold mt-2">TSSS Infotech & Infra Private Limited</h2>
                <p className="w-[40rem] text-lg font-sans">
                    We are keen in Building Next Gen human-centric
                    digital products and enterprise level application with
                    new age technologies.
                </p>
            </div>
        </div>
    </>)
}