import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import OurClients from "@/components/OurClients";
import OurWork from "@/components/OurWork";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main/>
      <OurWork />
      <OurClients/>
      <Footer/>
    </div>
  )
}
