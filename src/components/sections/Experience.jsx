import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";


export default function Experience() {
  const experiences = [
    {
      company: "Slikk.Ai",
      position: "Full Stack Developer Intern",
      location: "Hyderabad, Telangana",
      period: "Sep 2024 - Present",
      description: [
        "Implemented the 'Files,' 'Task,' and 'Invite People' features in Slikk V2 and contributed to the 'Persona' and 'Gantt View' features in Slikk V1.",
        "Developed the entire frontend and integrated APIs for the Kaam365 dashboard web app using React.js.",
        "Improved functionality and performance of the Kaam365 mobile app using React Native.",
        "Collaborated across teams to enhance user experience and streamline application features.",
      ],
      skills: ["React.js", "React Native", "API Integration"],
      current: true,
    },
    {
      company: "Intment Technologies (P) Ltd",
      position: "Web Developer Intern",
      location: "Hyderabad, Telangana",
      period: "July 2024 - Aug 2024",
      description: [
        "Developed the frontend and integrated APIs for EliteSuperStar using React.js",
        "Designed a responsive UI for Let'sRead using Tailwind CSS to improve user experience.",
        "Gained expertise in modern web technologies, including React.js, Tailwind CSS, and API integration",
      ],
      skills: ["React.js", "Tailwind CSS", "API Integration"],
      current: false,
    },
    {
      company: "Meity Project MANUU",
      position: "Web Developer Intern",
      location: "Hyderabad, Telangana",
      period: "March 2024 - June 2024",
      description: [
        "Data entry of course content in www.edeekshaam.in dashboard",
        "Developed the CMS dashboard of www.edeekshaam.in website and developed three games",
      ],
      skills: ["CMS", "Web Development"],
      current: false,
    },
    {
      company: "Meity Project MANUU",
      position: "Web Developer Intern",
      location: "Hyderabad, Telangana",
      period: "March 2023 - December 2023",
      description: [
        "Developed pages of www.edeekshaam.in",
        "Developed games integrated into the student dashboard",
        "Utilized Git for organized source control and collaborative development",
      ],
      skills: ["Web Development", "Game Development", "Git"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-primary/5 rounded-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional 
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise in full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                exp.current ? 'ring-2 ring-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border/30">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    exp.current 
                      ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                      : 'bg-background border-border'
                  }`}></div>
                </div>
              </div>

              {exp.current && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">Current</span>
                  </div>
                </div>
              )}

              <CardHeader className="pl-16 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {exp.position}
                    </CardTitle>
                    <div className="space-y-1">
                      <CardDescription className="text-base font-medium">
                        {exp.company}
                      </CardDescription>
                      <CardDescription className="text-sm">
                        📍 {exp.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-medium text-primary">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pl-16 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary rounded-full"></div>
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
