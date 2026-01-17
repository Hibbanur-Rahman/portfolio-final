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
import { motion } from "framer-motion";
import projectImg1 from '@/assets/images/projectImg-1.png';
import projectImg2 from '@/assets/images/projectImg-2.png';
import projectImg3 from '@/assets/images/projectImg-3.png';
import projectImg4 from '@/assets/images/projectImg-4.png';
const ProjectsSection = () => {
  const projects = [
    {
      title: "Turant Logistics: Complete Logistics System",
      description:
        "A comprehensive logistics platform with consumer app, rider app, and admin dashboard. Built with React Native, Next.js, and Node.js microservices architecture featuring real-time tracking and queue management.",
      image: projectImg1,
      link: "https://play.google.com/store/apps/details?id=com.turantlogistics_rahman",
      github: "#",
      featured: true,
      features: [
        "Built mobile apps using React Native and web/admin panel using Next.js.",
        "Implemented real-time ride tracking and request handling via Socket.io.",
        "Queue management using RabbitMQ for efficient request processing.",
        "Integrated Cashfree for payments and Firebase for push notifications.",
      ],
      technologies: [
        "React Native",
        "Next.js",
        "Node.js",
        "Microservices",
        "Socket.io",
        "RabbitMQ",
        "Firebase",
        "Cashfree",
      ],
    },
    {
      title: "Spirit HRMS: ERP System",
      description:
        "A feature-rich ERP system for human resource management with comprehensive modules for attendance, leave, salary, expenses, and project management with Gantt view.",
      image: projectImg2,
      link: "https://spirit-hrms.mithilastack.com",
      github: "#",
      featured: true,
      features: [
        "Attendance tracking with live location verification.",
        "Complete leave and employee management system.",
        "Salary, expense & invoice tracking with detailed reports.",
        "Internal/client project management with interactive Gantt view.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gantt Chart",
        "Geolocation API",
      ],
    },
    {
      title: "Maithili Books: E-commerce Platform",
      description:
        "A full-stack e-commerce web application for book sales with user authentication, shopping cart, and comprehensive order management system.",
      image: projectImg3,
      link: "https://gyanchangera.in",
      github: "#",
      featured: true,
      features: [
        "Complete book listing and catalog management system.",
        "Secure user authentication and authorization.",
        "Shopping cart functionality with order tracking.",
        "Admin dashboard at admin.gyanchangera.in for management.",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Responsive Design",
      ],
    },
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
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5 rounded-3xl"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Portfolio</span>
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured 
            <motion.span 
              className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}Projects
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Showcase of my recent work and projects that demonstrate my skills in full-stack development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
            >
              <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                <motion.div 
                  className="relative h-[280px] overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 left-4 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg">
                        <motion.div 
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-semibold">Latest Project</span>
                      </div>
                    </motion.div>
                  )}
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Floating action buttons */}
                  <motion.div 
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
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
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
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
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <CardHeader className="pb-4 flex-shrink-0">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-grow">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <motion.div 
                        className="w-1 h-4 bg-primary rounded-full"
                        animate={{ height: [16, 20, 16] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm text-muted-foreground flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <motion.div 
                        className="w-1 h-4 bg-purple-500 rounded-full"
                        animate={{ height: [16, 20, 16] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.5 }}
                      />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
                
                <CardFooter className="pt-6 flex gap-3 flex-shrink-0">
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Github className="mr-2 h-4 w-4" />
                        </motion.div>
                        Source Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="sm" className="w-full group/btn" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                        </motion.div>
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
