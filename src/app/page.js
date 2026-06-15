import Hero from "@/components/home/Hero";
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
      <main className="pt-20">
        <h1 className="text-center text-5xl mt-20">دکور شاهان</h1>
      </main>
    </>
  );
}
