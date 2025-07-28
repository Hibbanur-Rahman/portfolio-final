import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import htmlLogo from "@/assets/images/htmllogo.png";
import cssLogo from "@/assets/images/csslogo.png";
import jsLogo from "@/assets/images/jslogo.png";
import ejsLogo from "@/assets/images/ejs-logo.jpg";
import reactLogo from "@/assets/images/reactlogo.png";
import reduxLogo from "@/assets/images/reduxlogo.png";
import awsLogo from "@/assets/images/awsLogo.svg";
import bootstrapLogo from "@/assets/images/bootstraplogo.png";
import canvaLogo from "@/assets/images/canvalogo.png";
import cLogo from "@/assets/images/clogo.png";
import figmaLogo from "@/assets/images/figmalogo.png";
import githubLogo from "@/assets/images/githublogo.png";
import gitLogo from "@/assets/images/gitlogo.png";
import javaLogo from "@/assets/images/javalogo.png";
import jqLogo from "@/assets/images/jqlogo.png";
import mongoLogo from "@/assets/images/mongologo.png";
import mysqlLogo from "@/assets/images/mysqllogo.png";
import nodeLogo from "@/assets/images/nodelogo.png";
import pythonLogo from "@/assets/images/pythonlogo.png";
import tailwindLogo from "@/assets/images/tailwindlogo.png";
import ubuntuLogo from "@/assets/images/ubuntulogo.png";
import vsLogo from "@/assets/images/vslogo.png";
import expressLogo from "@/assets/images/expressJsLogo.png";
import nextjsLogo from "@/assets/images/nextjslogo.png";
import nextjsSvgLogo from "@/assets/images/nextjs-logo.svg";
import typeScriptLogo from "@/assets/images/typeScriptlogo.png";
import phpLogo from "@/assets/images/PHP-logo.svg";
import reactNativeLogo from "@/assets/images/reactNativelogo.png";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "TypeScript", logo: typeScriptLogo },
      { name: "PHP", logo: phpLogo },
    ],
    "Frontend Development": [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React", logo: reactLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "jQuery", logo: jqLogo },
    ],
    "Backend Development": [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "EJS", logo: ejsLogo },
    ],
    "Mobile Development": [
      { name: "React Native", logo: reactNativeLogo },
    ],
    "Databases": [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongoLogo },
    ],
    "Tools & Platforms": [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vsLogo },
      { name: "AWS", logo: awsLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Canva", logo: canvaLogo },
    ],
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & 
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"> Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <Card 
              key={category} 
              className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {items.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="group/skill flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                      style={{ animationDelay: `${(categoryIndex * 100) + (index * 50)}ms` }}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-background border border-border/50 p-2 flex items-center justify-center group-hover/skill:border-primary/30 group-hover/skill:bg-primary/5 transition-all duration-300 group-hover/skill:scale-110">
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`} 
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                      </div>
                      <span className="text-xs font-medium text-center leading-tight group-hover/skill:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}