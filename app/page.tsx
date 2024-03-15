import NavigationBar from "@/components/common/NavigationBar";

export default function Home() {
  // const targetDate = new Date("2024-04-13T00:00:00Z");
  return (
    <main className="">
      <NavigationBar></NavigationBar>
      <div className=" h-[calc(100vh-64px)]">
        <div className="max-w-[1280px] px-[24px] mx-auto">
          <div color="foreground" className="text-center py-10">
            <h1 className="text-4xl mb-6 mt-10 font-extrabold">
              Welcome To Trade Asia HRC (pvt.) Limited
            </h1>
            <p className="text-xl">
              TRADE ASIA HRC (PVT.) LIMITED HAS STARTED OPERATION AS AN ENGINE
              OIL IMPORTER COMPANY.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
