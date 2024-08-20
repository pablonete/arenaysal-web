import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { buildHref } from "../utils/image-url";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { PopImage } from "../components/PopImage";
import Head from "next/head";

// Local Data
import data from "../data/portfolio.json";
import literals from "../data/literals.json";

export default function Home() {
  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];
  const headerTaglines = [useRef(), useRef(), useRef()];

  const handleScrollToSection = (sectionIndex) => {
    window.scrollTo({
      top: sectionRefs[sectionIndex].current.offsetTop - 30,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      headerTaglines.map(ref => ref.current),
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative`}>
      <Head>
        <title>{literals.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header handleScroll={handleScrollToSection} />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
          {literals.headerTaglines.map((tagline, index) => (
            <h1
              key={index}
              ref={headerTaglines[index]}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5"
            >
              {tagline}
            </h1>))}
          </div>

          <Socials className="mt-2 laptop:mt-5" />

          <div
            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
            style={{ height: "600px" }}
          >
            <PopImage
              alt={literals.posterAltText}
              className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              layout="fill"
              src={buildHref("Conil-C2AE-ad.jpg")}
              priority
            />
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={sectionRefs[0]}>
          <h1 className="tablet:m-10 text-2xl text-bold">{literals.sectionTitles[0]}</h1>
          <p className="tablet:m-10 mt-2 text-xl w-full laptop:w-3/5">
            {literals.locationText}
          </p>
          <div className="tablet:m-10 mt-2">
            <Button onClick={() => window.open(data.mapUrl)}>
              {literals.locationMapTitle}
            </Button>
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={sectionRefs[1]}>
          <h1 className="tablet:m-10 text-2xl text-bold">{literals.sectionTitles[1]}</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={sectionRefs[2]}>
          <h1 className="tablet:m-10 text-2xl text-bold">{literals.sectionTitles[2]}</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={sectionRefs[3]}>
          <h1 className="tablet:m-10 text-2xl text-bold">{literals.sectionTitles[3]}</h1>
          <div className="ml-10">
            <Socials />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
