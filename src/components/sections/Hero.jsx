import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Download,
} from "lucide-react";
import heroImg from "@/assets/images/hero-section-img.png";
import { Badge } from "../ui/badge";
import resumePdf from '@/assets/files/Resume.pdf'
export default function Hero() {
  return (
    <section
      id="about"
      className="py-24 flex md:flex-row flex-col justify-center"
    >
      <div className="space-y-8 md:w-6/12 w-full">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Hibbanur Rahman</h1>
          <p className="text-2xl text-muted-foreground">
            Full-Stack Web Developer
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <Mail className="h-3 w-3" />
            hibbanrahmanhyt@gmail.com
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <Phone className="h-3 w-3" />
            +919973152523
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <MapPin className="h-3 w-3" />
            Gachibowli, Hyderabad
          </Badge>
        </div>
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg text-muted-foreground">
            A passionate full-stack developer with experience in building web
            applications using modern technologies like React, Node.js, and
            more. Currently working as a Full Stack Developer Intern at
            Slikk.Ai.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="mailto:hibbanrahmanhyt@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-6/12 w-full">
        <img src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
}
