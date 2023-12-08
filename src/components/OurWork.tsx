import Image from "next/image";

export default function OurWork() {
    return (<>
        <div className="p-10 bg-[#F0F0F0] text-black">
            <h2 className="text-center font-bold text-3xl mb-4">Our Works</h2>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 gap-6">
                    <div className="w-[30rem] h-[20rem]">
                        <Image src={'/laptop_one.jpg'} width={500} height={500} alt="laptop" className="rounded-lg" />
                    </div>
                    <div className="w-[30rem] h-[20rem]">
                        <Image src={'/laptop_two.jpg'} width={500} height={500} alt="laptop" className="rounded-lg" />
                    </div>
                    <div className="w-[30rem] h-[20rem]">
                        <Image src={'/laptop_three.jpg'} width={500} height={500} alt="laptop" className="rounded-lg" />
                    </div>
                    <div className="w-[30rem] h-[20rem]">
                        <Image src={'/laptop_four.jpg'} width={500} height={500} alt="laptop" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>

      
    </>)
}