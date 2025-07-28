import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Maulana Azad National Urdu University",
      location: "Hyderabad, Telangana",
      degree: "CS & IT B.Tech",
      period: "Sep 2021 - July 2025",
      grade: "CGPA: 9.09",
      icon: GraduationCap,
      current: true,
    },
    {
      institution: "Al-Irfan Residential School",
      location: "Aurangabad, Maharashtra",
      degree: "PCM (Physics, Chemistry, Math) Intermediate",
      period: "May 2019 - July 2021",
      grade: "Percentage: 85%",
      icon: School,
      current: false,
    },
  ];

  return (
    <section className="py-24 relative" id="education">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-primary/5 rounded-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Academic Background</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Educational 
            <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"> Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic foundation in computer science and technology that shaped my development career.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                  edu.current ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-border/30">
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      edu.current 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                        : 'bg-background border-border'
                    }`}></div>
                  </div>
                </div>

                {edu.current && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">Current</span>
                    </div>
                  </div>
                )}

                <CardHeader className="pl-20 pb-4">
                  <div className="absolute left-4 top-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {edu.institution}
                    </CardTitle>
                    <CardDescription className="text-base">
                      📍 {edu.location}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="pl-20 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-sm font-medium text-primary">{edu.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
