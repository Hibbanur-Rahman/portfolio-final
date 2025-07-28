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
import heroImgDark from "@/assets/images/hero-section-img-dark.png";
import { Badge } from "../ui/badge";
import resumePdf from '@/assets/files/Resume-V1.pdf'
import { useTheme } from "../theme-provider";
export default function Hero() {
  const {theme}=useTheme();
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hibbanur Rahman
              </span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Full-Stack Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about crafting exceptional digital experiences with modern technologies. 
                Currently building innovative solutions at Slikk.Ai.
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-md bg-primary/10">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium truncate">hibbanrahmanhyt@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-md bg-primary/10">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+91 99731 52523</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="p-2 rounded-md bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Gachibowli, Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group" asChild>
              <a href="mailto:hibbanrahmanhyt@gmail.com">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get in Touch
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="group" asChild>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
              <a
                href="https://github.com/Hibbanur-Rahman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
              <a
                href="https://www.linkedin.com/in/hibbanur-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl scale-110"></div>
            <div className="relative p-4">
              <img 
                src={theme==='dark'?heroImgDark:heroImg} 
                alt="Hibbanur Rahman - Full Stack Developer" 
                className="w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
