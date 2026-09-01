/*
 * DESIGN: Nordic Institutional Minimalism
 * - Hero with dramatic imagery and clear messaging
 * - Value blocks with measured spacing
 * - Asymmetric layouts for visual interest
 */

import { Link } from "wouter";
import { ArrowRight, Globe, Briefcase, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import PartnersSlider from "@/components/PartnersSlider";

const valueBlocks = [
  {
    icon: Globe,
    title: "Market Intelligence",
    description:
      "Access comprehensive market data, regulatory insights, and business intelligence across European and Asian markets.",
  },
  {
    icon: Briefcase,
    title: "Business Facilitation",
    description:
      "End-to-end support for market entry, partner identification, and operational establishment in new territories.",
  },
  {
    icon: TrendingUp,
    title: "Investment & Government Relations",
    description:
      "Strategic advisory on investment opportunities and institutional engagement with government bodies.",
  },
  {
    icon: Users,
    title: "Networking & Knowledge",
    description:
      "Connect with industry leaders, experts, and institutions through conferences, forums, and collaborative initiatives.",
  },
];

const stats = [
  { value: "7", label: "Founding Countries" },
  { value: "2025", label: "Year Established" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-europe-asia.jpg"
            alt="Bridge connecting Europe and Asia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/90 via-[var(--color-navy)]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-number text-[var(--color-copper)] mb-4 animate-fade-up">
              Est. 2025
            </div>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Connecting Europe and Asia Through Business, Innovation &
              Cooperation
            </h1>
            <p
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              A unified platform supporting companies, institutions, and
              investors in developing strong and sustainable economic relations
              between Europe and Asia.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Link href="/membership/apply">
                <Button
                  size="lg"
                  className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)] text-white px-8"
                >
                  Become a Member
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[var(--color-navy)] py-8">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-mono text-3xl md:text-4xl text-[var(--color-copper)] mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="section-number text-[var(--color-copper)] mb-4">
                01 — Our Focus
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
                Bridging Markets, Building Partnerships
              </h2>
              <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
                The European Economic Alliance for Cooperation with Asia (EEAA)
                serves as a comprehensive platform for economic, cultural,
                scientific, and institutional cooperation between European
                countries and Asian states.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Right Column - Value Cards */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {valueBlocks.map((block, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-[var(--color-stone)] rounded flex items-center justify-center mb-6 group-hover:bg-[var(--color-copper)]/10 transition-colors">
                      <block.icon className="w-6 h-6 text-[var(--color-copper)]" />
                    </div>
                    <h3 className="font-serif text-xl text-[var(--color-navy)] mb-3">
                      {block.title}
                    </h3>
                    <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/business-meeting.jpg"
                alt="Business professionals in meeting"
                className="w-full rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-copper)] text-white p-6 rounded-sm hidden md:block">
                <div className="font-mono text-3xl mb-1">6+</div>
                <div className="text-sm opacity-80">European Nations</div>
              </div>
            </div>

            <div>
              <div className="section-number text-[var(--color-copper)] mb-4">
                02 — Who We Are
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
                A Non-Profit Alliance for International Cooperation
              </h2>
              <p className="text-[var(--color-gray-cool)] leading-relaxed mb-6">
                Established under the laws of the Republic of Serbia, EEAA is a
                voluntary, non-governmental, and non-profit association founded
                for an indefinite period. Our mission is to achieve objectives
                in the field of international cooperation, economic development,
                and promotion of cultural and scientific exchange between Europe
                and Asia.
              </p>
              <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
                Our founding members represent diverse expertise from Serbia,
                Hungary, Bulgaria, North Macedonia, Bosnia and Herzegovina,
                Czech Republic, and Austria — creating a truly pan-European
                foundation for cooperation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                    Our Mission & Vision
                  </Button>
                </Link>
                <Link href="/founding-act">
                  <Button variant="ghost" className="text-[var(--color-navy)]">
                    Read Founding Act
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-24 text-white w-full flex justify-center">
            <img
              src="/images/EEAA map no background.png "
              className="w-full md:w-[70%]"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-number text-[var(--color-copper)] mb-4">
              03 — Our Services
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Comprehensive Support for Your Business
            </h2>
            <p className="text-white/70 leading-relaxed">
              From market entry to investment advisory, we provide end-to-end
              support for organizations seeking to establish or expand their
              presence across European and Asian markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Business Facilitation",
              "Legal Services",
              "Investment Advisory",
              "Market Entry Support",
              "Networking Events",
              "Logistics Support",
              "Government Relations",
              "Cultural Programs",
            ].map((service, index) => (
              <div
                key={index}
                className="border border-white/10 p-6 rounded-sm hover:border-[var(--color-copper)]/50 hover:bg-white/5 transition-all group"
              >
                <div className="font-mono text-[var(--color-copper)] text-sm mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg group-hover:text-[var(--color-copper)] transition-colors">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)]"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Partners Preview */}
      <section className="py-24 bg-[#ffffff] text-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Our partners
            </h2>
          </div>

          <PartnersSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/global-network.jpg"
            alt="Global network visualization"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
              Ready to Expand Your Horizons?
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Join a growing network of companies, institutions, and experts
              committed to strengthening economic ties between Europe and Asia.
              Membership opens doors to exclusive resources, events, and
              opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/membership/apply">
                <Button
                  size="lg"
                  className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] px-8"
                >
                  Apply for Membership
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white px-8"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
