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
    <section className="py-24 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5 rounded-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured 
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my recent work and projects that demonstrate my skills in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-background/80" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" className="backdrop-blur-sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary rounded-full"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-6 flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Source Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 group/btn" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
