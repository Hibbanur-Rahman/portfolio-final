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
    },
  ];

  return (
    <section id="experience" className="py-24 space-y-8">
      <h2 className="text-3xl font-bold mb-8 border-b pb-2">Experience</h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </div>
                <CardDescription>{exp.period}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
