import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectImg1 from '@/assets/images/projectImg-1.png';
import projectImg2 from '@/assets/images/projectImg-2.png';
import projectImg3 from '@/assets/images/projectImg-3.png';
import projectImg4 from '@/assets/images/projectImg-4.png';
const ProjectsSection = () => {
  const projects = [
    {
      title: "NextGenEdu: e-learning platform",
      description:
        "A fully functional, full stack (MERN) e-learning platform web application aimed at enhancing personalized, accessible, and engaging online education for diverse and underserved learners.",
      image: projectImg1,
      link: "https://next-gen-edu-frontend.vercel.app/",
      github: "https://github.com/Hibbanur-Rahman/NextGenEdu-frontend",
      features: [
        "Implemented login authentication and JWT token storage using localStorage. State management using Redux.",
        "Used SCSS and Bootstrap for enhanced styles.",
        "Utilized SMTP for mail service and Multer library for uploading images.",
        "Data is stored in MongoDB Atlas and backend deployed on AWS EC2.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "SCSS",
        "Bootstrap",
        "JWT",
        "AWS EC2",
      ],
    },
    {
      title: "FarmOnHand: E-commerce",
      description:
        "A fully functional, full stack e-commerce web application for farmers using MERN stack.",
      image: projectImg2,
      link: "https://hibbanur-rahman.github.io/FarmOnHand/",
      github: "https://github.com/Hibbanur-Rahman/FarmOnHand",
      features: [
        "Implemented login authentication and JWT token storage using localStorage.",
        "Used SCSS and Bootstrap for enhanced styles.",
        "Utilized Multer library for uploading images and SMTP for mail service.",
        "Data is stored in MongoDB Atlas and backend deployed on AWS EC2.",
        "Added item to cart and checkout with test payment using Stripe.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SCSS",
        "Bootstrap",
        "JWT",
        "AWS EC2",
        "Stripe",
      ],
    },
    {
      title: " Hotel-Booking",
      description:
        "A fully functional, full stack hotel booking web application using MERN stack.",
      image: projectImg3,
      link: "https://hibbanur-rahman.github.io/hotel-booking-react/",
      github: "https://github.com/Hibbanur-Rahman/hotel-booking-react",
      features: [
        "Implemented login authentication and JWT token storage using localStorage.",
        "Used SCSS and Bootstrap for enhanced styles.",
        "Utilized Multer library for uploading images and SMTP for mail service.",
        "Data is stored in MongoDB Atlas and backend deployed on AWS EC2.",
        "Added item to cart and checkout with test payment using Stripe.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SCSS",
        "Bootstrap",
        "JWT",
        "AWS EC2",
        "Stripe",
      ],
    },
    {
      title: "Humzabaan:E-learning for Urdu",
      description:
        " This website, developed with ReactJS, is called Hamzabaan. It is designed for students learning Urdu through this app. Additionally, parents can monitor and guide their children's progress based on their performance.",
      image: projectImg4,
      link: "https://humzabaan.com/",
      github: "https://github.com/Hibbanur-Rahman/humzabaan-vercel",
      features: [
        "Implemented login authentication and JWT token storage using localStorage.",
        "Used SCSS and Bootstrap for enhanced styles.",
        "Utilized Multer library for uploading images and SMTP for mail service.",
        "Data is stored in MongoDB Atlas and backend deployed on AWS EC2.",
        "CMS for website content"
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SCSS",
        "Bootstrap",
        "JWT",
        "AWS EC2",
      ],
    },
  ];

  return (
    <section className="py-16" id='projects'>
      <h2 className="text-3xl font-bold mb-8 border-b pb-2">Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col pt-0">
            <div className="relative h-[250px] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className=" absolute  transition-all  hover:translate-y-[-80%] duration-800"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
