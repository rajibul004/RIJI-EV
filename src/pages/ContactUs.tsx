import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ShowroomCard from "@/components/ShowroomCard";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navigation />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f7fa]">
        <div className="mx-auto max-w-[1450px] px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-24 lg:pt-20">
          <div className="grid min-h-[520px] items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#0165F6]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Contact RIJI EV
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Let's talk about
                <span className="block text-[#0165F6]">what's next.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Whether you have a question, want to explore our products,
                discuss a partnership or simply want to connect with the RIJI EV
                team, we would like to hear from you.
              </p>

              <a
                href="#contact-form"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#0165F6]"
              >
                Send an enquiry
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-slate-300">
                <ArrowDown
                  size={25}
                  strokeWidth={1.5}
                  className="text-slate-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1450px] divide-y divide-slate-200 px-6 sm:px-10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-16">
          <ContactInfo
            icon={<MapPin size={21} strokeWidth={1.5} />}
            eyebrow="Visit us"
            title="Our location"
            lines={[
              "Fancy Market 2nd Floor,",
              "Tinkonia Bus Stand,",
              "Bardhaman, West Bengal, 713101",
            ]}
          />

          <ContactInfo
            icon={<Phone size={21} strokeWidth={1.5} />}
            eyebrow="Call us"
            title="Phone"
            lines={["+91 98765 43210", "+91 98765 43211"]}
          />

          <ContactInfo
            icon={<Mail size={21} strokeWidth={1.5} />}
            eyebrow="Write to us"
            title="Email"
            lines={["info@rijiyaev.com", "support@rijiyaev.com"]}
          />

          <ContactInfo
            icon={<Clock3 size={21} strokeWidth={1.5} />}
            eyebrow="Come by"
            title="Working hours"
            lines={[
              "Mon–Fri: 9:00 AM – 6:00 PM",
              "Sat: 10:00 AM – 4:00 PM",
              "Sunday: Closed",
            ]}
          />
        </div>
      </section>

      {/* =========================================================
          ENQUIRY SECTION
      ========================================================= */}
      <section
        id="contact-form"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#0165F6]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Get in touch
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Tell us what
                <span className="block text-slate-400">
                  you're looking for.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">
                Have a question about RIJI EV, our vehicles, dealership
                opportunities or something else? Send us a message and our team
                will get back to you.
              </p>

              {/* Small reassurance */}
              <div className="mt-12 border-t border-slate-200 pt-6">
                <p className="text-sm font-medium text-slate-950">
                  We are here to help.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share as much detail as you can so our team can understand
                  your enquiry better.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[2rem] bg-[#f5f7fa] p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Enquiry
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">
                    Send us a message
                  </h3>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-white sm:flex">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#0165F6]"
                  />
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHOWROOMS
      ========================================================= */}
      <section className="bg-[#f5f7fa] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#0165F6]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Find us
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Visit a RIJI EV
                <span className="block text-slate-400">showroom.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-slate-600">
              Explore RIJI EV in person, speak with our team and learn more
              about electric mobility.
            </p>
          </div>

          {/* Showroom cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ShowroomCard
              city="Kolkata"
              address="Park Street, Kolkata"
              phone="+91 98765 43210"
              timing="10 AM - 7 PM"
              mapLink="#"
              featured
            />

            <ShowroomCard
              city="Delhi"
              address="Connaught Place, Delhi"
              phone="+91 98765 43211"
              timing="10 AM - 7 PM"
              mapLink="#"
            />

            <ShowroomCard
              city="Mumbai"
              address="Bandra West, Mumbai"
              phone="+91 98765 43212"
              timing="10 AM - 7 PM"
              mapLink="#"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0165F6]">
                Our location
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Come say hello.
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Fancy+Market+Bardhaman+West+Bengal+713101"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              Open in Google Maps
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.9435572801327!2d87.86890564769762!3d23.245332565237003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849c3d042e55d%3A0x8cb19836a8ea999b!2sFancy%20Market%2C%20Grand%20Trunk%20Rd%2C%20Khosbagan%2C%20Bardhaman%2C%20West%20Bengal%20713101!5e0!3m2!1sen!2sin!4v1748845458644!5m2!1sen!2sin"
              width="100%"
              height="480"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="RIJI EV – Bardhaman Location"
              className="block grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#0165F6] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto flex max-w-[1300px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              RIJI EV
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Have something to talk about?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              We are always open to meaningful conversations.
            </p>
          </div>

          <a
            href="#contact-form"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            Start a conversation
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

/* =========================================================
   CONTACT INFO COMPONENT
========================================================= */

interface ContactInfoProps {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  lines: string[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  eyebrow,
  title,
  lines,
}) => {
  return (
    <div className="px-2 py-8 sm:px-5 lg:px-8 lg:py-10">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f5f9] text-[#0165F6]">
        {icon}
      </div>

      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        {eyebrow}
      </p>

      <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{title}</h3>

      <div className="mt-3 space-y-1 text-sm leading-6 text-slate-500">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};
