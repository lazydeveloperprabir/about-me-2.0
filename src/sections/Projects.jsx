import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Smart Delivery System",
      desc: "Microservice-based event driven solution for the last mile delivery in Tesco",
      tech: ["JAVA", "SPRINGBOOT", "SQL", "NODEJS", "GRAPHQL", "AZURE", "POSTGRESSQL", "SPLUNK", "EVENT DRIVEN", "DATA STRUCTURES & ALGORITHMS"],
      roles: [
        "Conducted architecture reviews and assessments to identify technical risks and opportunities.",
        "Provided technical leadership and guidance to development teams.",
        "Provided Operational Support ensuring the systems are resilient.",
        "Implemented cost-effective measures, reducing IT expenses by 15% while maintaining service levels.",
        "Developed and implemented a comprehensive cybersecurity strategy, reducing the risk of data breaches.",
      ],
    },
    {
      title: "Outcomes One MTM",
      desc: "Microservice-based & SPA  WEB APP for Configuring the applications metadata across Platform ",
      tech: ["JAVA", "SPRINGBOOT", "SQL", "NODEJS", "GRAPHQL", "AWS", "POSTGRESSQL", "SPLUNK", "EVENT DRIVEN", "DATA STRUCTURES & ALGORITHMS", "REACT"],
      roles: [
        " Designed scalable, flexible, and maintainable software architectures for key components in Outcomes One MTM Portal.",
        " Conducted architecture reviews and assessments to identify technical risks and opportunities.",
        " Provided technical leadership and guidance to development teams.",
        " Implemented application Security using OAUTH2 & worked on enhancements in CI/CD for ensuring high availability.",
        " Designed and implemented Microservices architectural solutions for high fault tolerance.",
        " Implemented cost-effective measures, reducing IT expenses by 15% while maintaining service levels.",
        " Developed and implemented a comprehensive cybersecurity strategy, reducing the risk of data breaches.",
        " Implemented Agile methodologies, leading to a 30% reduction in project delivery time.",
        " Conducted training sessions for staff on new technologies, improving overall team proficiency, mentoring, code reviews, etc.",
      ],
    },
    {
      title: "Digital Experience Platform - cargill",
      desc: "Microservice-based & SPA  WEB APP for building platform components ",
      tech: ["JAVA", "SPRINGBOOT", "SQL", "NODEJS", "GRAPHQL", "AWS", "POSTGRESSQL", "SPLUNK", "EVENT DRIVEN", "DATA STRUCTURES & ALGORITHMS", "REACT"],
      roles: [
        " Developed cloud - based generic platform components for Cargill Digital Labs.",
        " Utilized AWS S3, CloudWatch, and Kafka in developing distributed solutions.",
        " Developed a custom version of the Material UI library using React and JSX.",
        " Implemented IDP chaining in microservices using AWS Cognito.",
        " Worked on containerization of the application using Docker & Kubernetes.",
        " Integrated new technologies into existing systems, improving workflow and reducing manual processes by 30 %.",
        " Implemented performance improvements in S3 services in our application resulting in reduction of Production downtime by 25 %.",
      ],
    },
{
  title: "Flight phase Analyser - GE Aerospace",
    desc: "Microservice-based & SPA  WEB APP for monitoring and sharing insights on the Engine Health ",
      tech: ["JAVA", "SPRINGBOOT", "SQL", "NODEJS", "GRAPHQL", "AWS", "POSTGRESSQL", "SPLUNK", "EVENT DRIVEN", "DATA STRUCTURES & ALGORITHMS", "REACT"],
        roles: [
        " Contributed to the development of a Cloud - based Solution embraced by 130 + Airline Customers.",
         " Implemented functional modules on the Front - End UI using Angular and Server - side Development using Node.js and Spring Boot.",
        " Deployed applications on Predix Cloud and managed Security[OAuth2] for Micro apps and Micro Services, utilizing SAST and DAST tools.",
        " Executed a Blue - Green Deployment strategy, ensuring zero downtime for the enterprise application.",
      ],
},
{
  title: "Apple Online Store- Apple INC",
    desc: "Microservice-based & SPA  WEB APP for selling apple products ",
      tech: ["JAVA", "SPRINGBOOT", "SQL", "NODEJS", "GRAPHQL", "AWS", "POSTGRESSQL", "SPLUNK", "EVENT DRIVEN", "DATA STRUCTURES & ALGORITHMS", "REACT"],
        roles: [
          " Played a pivotal role in the Design, Development, and Testing of various enhancements for the Apple Online Store.",
          " Innovatively designed and developed a Payment Simulator Application tailored for the Apple Online Store, significantly streamliningthe development process.",
        ],
    },
{
  title: "Blue Harmony - IBM India",
    desc: "Microservice-based & SPA  WEB APP for Configuring the server metadata",
      tech: ["JAVA", "SPRINGBOOT", "SQL", "NODEJS", "GRAPHQL", "AWS", "POSTGRESSQL", "SPLUNK", "EVENT DRIVEN", "DATA STRUCTURES & ALGORITHMS", "REACT"],
        roles: [
          " Implemented Restful web services to expose APIs, enhancing the functionality and accessibility of the application.",
          " Contributed to various modules of the project, focusing on server-side development using Java to ensure robust and efficient backend functionality.",
          " Collaborated on different modules of the project's Front-End UI, utilizing Angular JS 1.x to create a seamless and user-friendly interface.",
        ],
    },

    // Add more projects here.",",.",.",
  ];

return (
  <section
    id="projects"
    className="py-20"
    data-aos="fade-in"
  >
    <div className="max-w-6xl mx-auto ">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {projects.map((project, idx) => (
          // <SwiperSlide key={idx}>
          //   <ProjectCard {...project} />
          // </SwiperSlide>
          <SwiperSlide key={idx}>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mx-4 md:mx-12 lg:mx-24">
              <ProjectCard {...project} />
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  </section>
);
};

export default Projects;
