import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import rafaelAvatar from "@/assets/rafael-avatar.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 hero-gradient rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full opacity-40 blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Engenheiro Civil & Cientista de Dados
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Olá, eu sou{" "}
                <span className="text-gradient">
                  Rafael Lopes
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Engenheiro civil com amplo conhecimento em análise de dados, machine learning e estatística. 
                Especialista em transformar dados em insights valiosos para tomada de decisões.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hero-gradient text-white font-semibold px-8 py-6 text-lg transition-smooth hover:scale-105 hover:glow-primary"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg transition-smooth hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/RafaelLopesPinheiro", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rafael-lopes-933001125/", label: "LinkedIn" },
                { icon: Mail, href: "mailto: rafaellopespinheiro@hotmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 glass rounded-full hover:bg-primary/20 transition-smooth hover:scale-110 hover:glow-primary group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up animate-delay-400">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-3xl opacity-20 blur-2xl transform rotate-6"></div>
              <img
                src={rafaelAvatar}
                alt="Rafael Lopes - Engenheiro Civil & Cientista de Dados"
                className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl transition-smooth hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 hero-gradient rounded-full opacity-60 blur-xl animate-pulse-glow"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;