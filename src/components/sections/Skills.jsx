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
    <section id="skills" className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I've mastered throughout my career.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gray-100 dark:bg-gray-800">
                <CardTitle className="text-xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  {items.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center group">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white dark:bg-gray-700 p-2 flex items-center justify-center mb-2 border border-gray-200 dark:border-gray-600 shadow-sm group-hover:shadow-md transition-all duration-300">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </Badge>
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