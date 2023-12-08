import Image from "next/image";
import hmbanner from "../../public/hmbanner.png"
export default function Hero() {
    return (<>
        <div className="flex justify-center items-center h-screen bg-fixed bg-cover custom-image">
            {/* OverLay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="p-5 text-white z-[5] pt-16">
                <h1 className="text-3xl">Welcome to</h1>
                <h2 className="text-5xl font-bold mt-2">TSSS Infotech & Infra Private Limited</h2>
                <p className="w-[40rem] text-lg font-sans">
                    We are keen in Building Next Gen human-centric
                    digital products and enterprise level application with
                    new age technologies.
                </p>
            </div>
        </div>
    </>)
}