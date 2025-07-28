import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hibbanrahmanhyt@gmail.com",
      href: "mailto:hibbanrahmanhyt@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9973 152 523",
      href: "tel:+919973152523",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10 border-green-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gachibowli, Hyderabad, India",
      href: null,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hibbanur-rahman",
      href: "https://github.com/Hibbanur-Rahman",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hibbanur-rahman",
      href: "https://www.linkedin.com/in/hibbanur-rahman/",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-700/10 border-blue-700/20",
    },
  ];

  return (
    <section className="py-24 relative" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-primary/5 rounded-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's 
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"> Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-pink-500 rounded-full"></div>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`p-3 rounded-xl border ${contact.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-5 w-5 ${contact.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium mb-1">{contact.label}</h4>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 truncate block"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground truncate">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Quick Actions
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="group" asChild>
                  <a href="mailto:hibbanrahmanhyt@gmail.com">
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" className="group" asChild>
                  <a
                    href="https://www.linkedin.com/in/hibbanur-rahman/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center gap-3">
                <div className="w-2 h-6 bg-gradient-to-b from-primary to-pink-500 rounded-full"></div>
                Send Me a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      <div className="w-1 h-3 bg-primary rounded-full"></div>
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      className="border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <div className="w-1 h-3 bg-primary rounded-full"></div>
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                    <div className="w-1 h-3 bg-primary rounded-full"></div>
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <div className="w-1 h-3 bg-primary rounded-full"></div>
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..." 
                    rows={5} 
                    className="border-border/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2 group" size="lg">
                <Send className="h-4 w-4 group-hover:scale-110 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
