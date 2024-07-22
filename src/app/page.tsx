import { BentoGridVanAtlas } from "@/components/bento-grid-van-atlas";
import CTASection from "@/components/cta-section";
import FeatureSection from "@/components/features/feature-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import NavBar from "@/components/navbar/navbar";
import VanLifeExperienceSection from "@/components/van-life-experience-section";

const featureSectionProps = {
  title: "Für wachsende Van-Life-Gemeinschaften",
  description:
    "Van Atlas bietet die richtige Plattform für jeden Schritt deiner Van-Life-Reise - von der ersten Idee bis zum Leben auf der Straße.",
  tabs: [
    {
      id: "camper",
      label: "Camper",
      content: {
        title: "Entdecke die Freiheit des Van-Lebens",
        description:
          "Plane deine Reisen, finde die besten Spots und teile deine Erfahrungen mit anderen Campern.",
        features: [
          {
            icon: "🚐",
            title: "Routenplanung",
            description:
              "Optimiere deine Reiseroute mit Tipps von erfahrenen Van-Lifern",
          },
          {
            icon: "🏕️",
            title: "Campingplatz-Finder",
            description: "Entdecke die schönsten Stellplätze und Campingplätze",
          },
          {
            icon: "📸",
            title: "Erlebnisse teilen",
            description:
              "Teile deine Abenteuer und inspiriere andere Van-Enthusiasten",
          },
        ],
        image: "/feature1.jpg",
      },
    },
    {
      id: "diy",
      label: "DIY-Fans",
      content: {
        title: "Verwirkliche deinen Traum-Van",
        description:
          "Finde Inspiration, Anleitungen und Tipps für deinen perfekten Van-Ausbau.",
        features: [
          {
            icon: "🔧",
            title: "Ausbau-Guides",
            description:
              "Schritt-für-Schritt-Anleitungen für jeden Aspekt deines Van-Ausbaus",
          },
          {
            icon: "💡",
            title: "Kreative Lösungen",
            description:
              "Entdecke innovative Ideen für Stauraum und Funktionalität",
          },
          {
            icon: "🛠️",
            title: "Materiallisten",
            description:
              "Finde die besten Materialien für deinen individuellen Ausbau",
          },
        ],
        image: "/feature2.jpg",
      },
    },
    {
      id: "community",
      label: "Community",
      content: {
        title: "Werde Teil der Van-Life-Bewegung",
        description:
          "Vernetze dich mit Gleichgesinnten, tausche Erfahrungen aus und finde Unterstützung.",
        features: [
          {
            icon: "👥",
            title: "Lokale Treffen",
            description:
              "Finde und organisiere Van-Life-Treffen in deiner Nähe",
          },
          {
            icon: "💬",
            title: "Forum",
            description:
              "Stelle Fragen, teile dein Wissen und diskutiere mit der Community",
          },
          {
            icon: "🤝",
            title: "Mentoren-Programm",
            description:
              "Finde Unterstützung von erfahrenen Van-Lifern oder werde selbst Mentor",
          },
        ],
        image: "/feature3.jpg",
      },
    },
  ],
};

export default async function Page() {
  return (
    <>
      <NavBar />
      <section className="relative min-h-screen lg:pt-0 pt-20 flex justify-center items-center">
        <HeroSection />
      </section>
    </>
  );
}
