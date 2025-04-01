import AboutSection from "@/components/aboutSection/AboutSection";
import HeroSlider from "@/components/heroSlider/HeroSlider";
import HomeProducts from "@/components/products/HomeProducts";

export default function Home() {
  // const targetDate = new Date("2024-04-13T00:00:00Z");

  return (
    <>
      <main className="">
        <div className="">
          <div className="my_container">
            {/* <div color="foreground" className="text-center py-10">
              <h1 className="text-2xl md:text-4xl text-[#fe3231] mb-6 mt-10 font-extrabold">
                Welcome To Trade Asia HRC (pvt.) Limited
              </h1>
              <p className="text-sm md:text-xl">
                TRADE ASIA HRC (PVT.) LIMITED HAS STARTED OPERATION AS AN ENGINE
                OIL IMPORTER COMPANY.
              </p>
            </div> */}
            <div className="mt-[40px]">
            <HeroSlider></HeroSlider>
            </div>
            <HomeProducts></HomeProducts>
            <AboutSection></AboutSection>
          </div>
        </div>
      </main>
    </>
  );
}
