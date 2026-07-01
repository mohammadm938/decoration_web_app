import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <main className="pt-20">
        <h1 className="text-center text-5xl mt-20">دکور شاهان</h1>
      </main>
    </>
  );
}
