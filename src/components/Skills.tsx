const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Estatística", level: 90 },
        { name: "Pandas/NumPy", level: 88 }
      ]
    },
    {
      title: "Análise & Viz",
      skills: [
        { name: "Jupyter", level: 92 },
        { name: "Plotly/Matplotlib", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Excel Avançado", level: 90 }
      ]
    },
    {
      title: "Engenharia",
      skills: [
        { name: "AutoCAD", level: 85 },
        { name: "Gestão de Projetos", level: 80 },
        { name: "Análise Estrutural", level: 88 },
        { name: "Orçamentação", level: 82 },
        { name: "Normas Técnicas", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm">
            Habilidades Técnicas
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">
            Tecnologias que Domino
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise em análise de dados, machine learning e engenharia civil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth hover:glow-primary"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full hero-gradient rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Ferramentas e Tecnologias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Python", "R", "Jupyter", "Pandas", "NumPy", "Scikit-learn", 
              "Matplotlib", "Plotly", "SQL", "Power BI", "Excel", "SPSS",
              "AutoCAD", "Git", "Machine Learning", "Deep Learning"
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass p-4 rounded-xl text-center hover:bg-primary/10 transition-smooth hover:scale-105 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;