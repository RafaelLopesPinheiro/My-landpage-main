import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Análise de Dados",
      description: "Especialista em extrair insights valiosos de grandes volumes de dados usando Python, R e ferramentas estatísticas."
    },
    {
      icon: Palette,
      title: "Machine Learning",
      description: "Desenvolvimento de modelos preditivos e algoritmos de ML para detecção de fraudes e análise de investimentos."
    },
    {
      icon: Zap,
      title: "Estatística",
      description: "Amplo conhecimento em métodos estatísticos para análise exploratória e modelagem de dados."
    },
    {
      icon: Users,
      title: "Engenharia Civil",
      description: "Formação sólida em engenharia com foco na aplicação de dados para otimização de processos."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Sobre Mim
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient">
                Engenheiro Civil especializado em Ciência de Dados
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou um engenheiro civil com paixão por análise de dados e machine learning. 
                Com formação técnica sólida e conhecimento aprofundado em estatística, 
                trabalho transformando dados em insights valiosos para tomada de decisões estratégicas.
              </p>
              <p>
                Minha expertise abrange Python, R, análise estatística, machine learning e 
                desenvolvimento de projetos na área de Data Science. Atualmente estudo deep learning 
                e visão computacional, sempre buscando aprimorar minhas habilidades técnicas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Formação</h3>
                <p className="text-2xl font-bold text-primary">Engenharia Civil</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Especialização</h3>
                <p className="text-2xl font-bold text-accent">Data Science</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-gradient p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 hover:glow-primary group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-3 hero-gradient rounded-xl w-fit group-hover:scale-110 transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;