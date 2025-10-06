import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Análise de Fraude em Cartões de Crédito",
      description: "Projeto de machine learning para detecção de fraudes em transações bancárias usando algoritmos de classificação. Análise exploratória de dados com mais de 6 milhões de registros e implementação de modelos preditivos.",
      image: "/placeholder.svg",
      tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Jupyter"],
      icon: Database,
      links: {
        live: "https://github.com/RafaelLopesPinheiro/Real-Credit-Card-Fraud-Analysis",
        github: "https://github.com/RafaelLopesPinheiro/Real-Credit-Card-Fraud-Analysis"
      }
    },
    {
      title: "Estratégias Long & Short",
      description: "Análise quantitativa para estratégias de investimento long e short no mercado financeiro. Implementação de modelos estatísticos para análise de performance e otimização de portfólio.",
      image: "/placeholder.svg", 
      tags: ["Python", "Análise Financeira", "Estatística", "NumPy"],
      icon: Globe,
      links: {
        live: "https://github.com/RafaelLopesPinheiro/Long_and_short",
        github: "https://github.com/RafaelLopesPinheiro/Long_and_short"
      }
    },
    {
      title: "Estudo do ENEM com Análise de Dados",
      description: "Análise inteligente de dados do ENEM para otimizar estudos, identificar padrões e apoiar decisões educacionais com visualizações interativas.",
      image: "/placeholder.svg",
      tags: ["Python", "Otimização", "Finanças", "Matplotlib"],
      icon: Smartphone,
      links: {
        live: "https://github.com/RafaelLopesPinheiro/INEP_Study",
        github: "https://github.com/RafaelLopesPinheiro/INEP_Study"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm">
            Projetos em Destaque
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">
            Projetos de Data Science
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos meus projetos que demonstram expertise em análise de dados e machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-gradient rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 transition-smooth hover:scale-105 hover:glow-primary"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted h-48">
                <div className="absolute inset-0 hero-gradient opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary/60" />
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <a
                      href={project.links.live}
                      className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                    >
                      <Github className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="hero-gradient text-white font-medium hover:scale-105 transition-smooth flex-1"
                    asChild
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg transition-smooth hover:scale-105"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;