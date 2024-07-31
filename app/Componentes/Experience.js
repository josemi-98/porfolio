
import ExperienceItem from './ExperienceItem'; 

const EXPERIENCIE = [
  {
    date: "Marzo 2024",
    title: "Desarrollador web",
    company: "Pixefora",
    description:
      "Responsable del diseño y desarrollo de páginas web, utilizando HTML y CSS para crear interfaces visualmente atractivas y funcionales. También he trabajado con el sistema de gestión de contenidos WordPress para facilitar la administración de contenido. Además, he empleado lenguajes de programación como JavaScript y PHP para desarrollar funcionalidades dinámicas y personalizadas, asegurando que cada sitio web se adapte a las necesidades específicas de los clientes.",
    // link: "https://pixefora.com/",
  },
  {
    date: "Junio 2023",
    title: "QA Tester",
    company: "NTT DATA",
    description:
      "Responsable de la redacción, desarrollo y automatización de planes de prueba. He trabajado con tecnologías como Selenium, Java, Cypress y Karate para asegurar la calidad y el rendimiento de las aplicaciones, implementando pruebas exhaustivas y efectivas."
  },
];

const ExperienceList = () => {
  return (
    <ol className="relative mt-16">
      {EXPERIENCIE.map((experience, index) => (
        <li key={index}>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
