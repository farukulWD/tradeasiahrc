import InitialCallModal from "@/components/InitialCallModal";

import HeroSlider from "@/components/heroSlider/HeroSlider";

export default function Home() {
  // const targetDate = new Date("2024-04-13T00:00:00Z");

  return (
    <>
      <main className="">
        <div className="">
          <div className="my_container">
            <div color="foreground" className="text-center py-10">
              <h1 className="text-2xl md:text-4xl text-[#fe3231] mb-6 mt-10 font-extrabold">
                Welcome To Trade Asia HRC (pvt.) Limited
              </h1>
              <p className="text-sm md:text-xl">
                TRADE ASIA HRC (PVT.) LIMITED HAS STARTED OPERATION AS AN ENGINE
                OIL IMPORTER COMPANY.
              </p>
            </div>
            <HeroSlider></HeroSlider>
          </div>
        </div>
      </main>
      <InitialCallModal title="ইফতার এবং আলোচনা">
        <div className="space-y-2">
          <p>
            প্রিয় সুধী, <br />
            আসসালামু আলাইকুম। ট্রেড এশিয়া এইচ.আর.সি.(প্রাঃ)লিমিটেডের পক্ষ থেকে
            জানাই রমজানুল মোবারক। আল্লাহ্ তায়া &apos; লার অশেষ রহমতে ট্রেড এশিয়া
            এইচ.আর.সি, (প্রাঃ) লিমিটেডের পক্ষ থেকে আগামী ২২ মার্চ ২০২৪ ইং রোজ
            শুক্রবার বিকাল ৫ ঘটিকায় সংক্ষিপ্ত ব্যবসায়ীক আলোচনা সভা ও ইফতার
            মাহফিলের আয়োজন করা হয়েছে। উক্ত সভা ও ইফতার মাহফিলে যোগদানের জন্য
            জনাবের নিকট বিশেষ অনুরোধ রইল।
          </p>
          <p>
            স্থান : আনন্দ বাবুর পুল সংলগ্ন, মংলা হোটেলের বিপরীতে, জে.আর.জে.
            রেস্টুরেন্ট, নীলফামারী সদর।
          </p>
          <p className="font-semibold">
            ধন্যবাদন্তে, মোঃ রুবাইয়াৎ সানিল চৌধুরী ব্যবস্থাপনা পরিচালক ট্রেড
            এশিয়া এইচ,আর.সি(প্রাঃ)লিমিটেড
          </p>
        </div>
      </InitialCallModal>
    </>
  );
}
