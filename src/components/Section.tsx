import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  titleJapanese: string;
  contact: string;
}

const Section = ({ children, title, titleJapanese, contact }: SectionProps) => {
  return (
    <section id={contact} className="relative bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {titleJapanese} <span className="text-red-600">/ {title}</span>
        </h2>
        {
          children
        }
      </div>
    </section>
  );
};

export default Section;
