"use client";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { ServiceCard } from "@/app/components/sections/ServiceCard";
import { Contact } from "@/app/components/sections/Contact";
import { useScrollFadeIn } from "@/lib/useScrollFadeIn";
import { services } from "@/lib/services";

export default function Home() {
  const animatedAbout = useScrollFadeIn('up', 1, 0);
  const animatedServices = useScrollFadeIn('up', 1, 0.2);
  const animatedContact = useScrollFadeIn('up', 1, 0.4);

  return (
    <main>
      <Hero />
      <section id="about-us" {...animatedAbout}>
        <About />
      </section>
      <section id="services" {...animatedServices}>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8"> {/* サービスカードのコンテナを追加 */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" {...animatedContact}>
        <Contact />
      </section>
    </main>
  );
}
