import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/RafaelLopesPinheiro", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rafael-lopes-933001125/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rafaellopespinheiro@hotmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <footer className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Rafael Lopes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Engenheiro civil especializado em ciência de dados e machine learning, 
              transformando dados complexos em insights valiosos para tomada de decisões estratégicas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 glass rounded-full hover:bg-primary/20 transition-smooth hover:scale-110 hover:glow-primary group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              Entre em Contato
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>rafaellopespinheiro@hotmail.com</p>
              <p>+55 (82) 9 9947-8680</p>
              <p>Alagoas, Brasil</p>
            </div>
            <div className="card-gradient p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-foreground">
                  Disponível para novos projetos
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Feito por Rafael Lopes.
            </p>
            <p className="text-muted-foreground text-sm">
              © 2024 Rafael Lopes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;