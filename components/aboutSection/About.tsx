import React from "react";
import SectionTitle from "../utils/SectionTitle";
import { Image } from "@nextui-org/react";

export default function () {
  return (
    <section className="py-10">
      <SectionTitle title="About Us"></SectionTitle>
      <div className="space-y-4">
        <div className="grid items-center md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <h4 className="text-2xl font-semibold mb-2">
              About our <span className="text-primary-color"> company</span>{" "}
            </h4>
            <div className="space-y-1">
              <p>
                <strong>Trade Asia Hrc (PVT.) Limited</strong> is one of the
                most rapidly growing companies in Bangladesh.
              </p>
              <p className="hidden md:block">
                The head office of the company is located in Nilphamari
                district. The company is mainly working as an importer and
                exporter. <strong> Trade Asia Hrc (PVT.) Limited </strong> is
                working tirelessly to play an important role in the country's
                economy.
              </p>
              <p>
                Currently the company is focusing on expanding their business.
                For this purpose TRADE ASIA HRC (PVT.) LIMITED is working for
                businesses like import, export including manufacturing,
                information technology, properties, travel agency, agriculture,
                food and beverage.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              alt="Album cover"
              className="object-cover ml-auto md:h-[350px] "
              height={200}
              src={
                "https://i.ibb.co/DPdCVNt/team-is-discussing-digital-marketing-strategy-18660-618.jpg"
              }
              width={500}
            />
          </div>
        </div>
        <div className="grid items-center md:grid-cols-2 gap-8">
          <div className="order-2">
            <h4 className="text-2xl font-semibold mb-2">
              Our <span className="text-primary-color">Mission</span> And{" "}
              <span className="text-primary-color">Vision</span>
            </h4>
            <div className="space-y-1">
              <p>
                We strive relentlessly to meet and exceed applicable standards
                and bear a great responsibility for people, machines and the
                environment. Satisfied and delighted customers are the top
                priority in our corporate philosophy. We offer great back up
                support services to our customers so as together we tackle the
                difficult task and solve them with both experience and
                commitments in focused team work.
              </p>
              <p>
                <strong>Trade Asia Hrc (PVT.) Limited</strong>
                does not want to grow alone; it wishes to grow together with its
                partners, patrons, customers, employees and other stakeholders.
                We strongly believe that
                <strong>Trade Asia Hrc (PVT.) Limited</strong> will become one
                of the leading trading companies in the world in a very short
                time.
              </p>
            </div>
          </div>
          <div className="order-1">
            <Image
              alt="Album cover"
              className="object-cover ml-auto md:h-[350px] "
              height={200}
              src={"https://i.ibb.co/VmnYHzB/light-bulb-with-drawing-graph.jpg"}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
