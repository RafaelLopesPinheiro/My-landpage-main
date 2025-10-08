"""
Portfolio data storage module.
Contains all the static data for the portfolio website.
"""

from app.schemas import Project, ProjectLinks, SkillCategory, Skill, Feature, ContactInfo

# Projects data
PROJECTS_DATA = [
    Project(
        title="Análise de Fraude em Cartões de Crédito",
        description="Projeto de machine learning para detecção de fraudes em transações bancárias usando algoritmos de classificação. Análise exploratória de dados com mais de 6 milhões de registros e implementação de modelos preditivos.",
        image="/placeholder.svg",
        tags=["Python", "Scikit-learn", "Pandas", "Machine Learning", "Jupyter"],
        icon="Database",
        links=ProjectLinks(
            live="#",
            github="https://github.com/RafaelLopesPinheiro/Real-Credit-Card-Fraud-Analysis"
        )
    ),
    Project(
        title="Web Development",
        description="Desenvolvimento de aplicações web responsivas e escaláveis, utilizando as mais recentes tecnologias e frameworks.",
        image="/placeholder.svg",
        tags=["JavaScript", "React", "Node.js", "CSS", "Python"],
        icon="Globe",
        links=ProjectLinks(
            live="#",
            github="https://github.com/RafaelLopesPinheiro/My-landpage-main"
        )
    ),
    Project(
        title="Estudo do ENEM com Análise de Dados",
        description="Análise inteligente de dados do ENEM para otimizar estudos, identificar padrões e apoiar decisões educacionais com visualizações interativas.",
        image="/placeholder.svg",
        tags=["Python", "Otimização", "Finanças", "Matplotlib"],
        icon="Smartphone",
        links=ProjectLinks(
            live="#",
            github="https://github.com/RafaelLopesPinheiro/INEP_Study"
        )
    )
]

# Skills data
SKILLS_DATA = [
    SkillCategory(
        title="Data Science",
        skills=[
            Skill(name="Python", level=95),
            Skill(name="R", level=90),
            Skill(name="Machine Learning", level=85),
            Skill(name="Estatística", level=90),
            Skill(name="Pandas/NumPy", level=88)
        ]
    ),
    SkillCategory(
        title="Análise & Viz",
        skills=[
            Skill(name="Jupyter", level=92),
            Skill(name="Plotly/Matplotlib", level=85),
            Skill(name="Power BI", level=80),
            Skill(name="SQL", level=88),
            Skill(name="Excel Avançado", level=90)
        ]
    ),
    SkillCategory(
        title="Engenharia",
        skills=[
            Skill(name="AutoCAD", level=85),
            Skill(name="Gestão de Projetos", level=80),
            Skill(name="Análise Estrutural", level=88),
            Skill(name="Orçamentação", level=82),
            Skill(name="Normas Técnicas", level=85)
        ]
    )
]

TECHNOLOGIES_DATA = [
    "Python", "R", "Jupyter", "Pandas", "NumPy", "Scikit-learn", 
    "Matplotlib", "Plotly", "SQL", "Power BI", "Excel", "SPSS",
    "AutoCAD", "Git", "Machine Learning", "Deep Learning"
]

# About data
ABOUT_FEATURES = [
    Feature(
        icon="Code",
        title="Análise de Dados",
        description="Especialista em extrair insights valiosos de grandes volumes de dados usando Python, R e ferramentas estatísticas."
    ),
    Feature(
        icon="Palette",
        title="Machine Learning",
        description="Desenvolvimento de modelos preditivos e algoritmos de ML para detecção de fraudes e análise de investimentos."
    ),
    Feature(
        icon="Zap",
        title="Estatística",
        description="Amplo conhecimento em métodos estatísticos para análise exploratória e modelagem de dados."
    ),
    Feature(
        icon="Users",
        title="Engenharia Civil",
        description="Formação sólida em engenharia com foco na aplicação de dados para otimização de processos."
    )
]

ABOUT_DESCRIPTION = [
    "Sou um engenheiro civil com paixão por análise de dados e machine learning. Com formação técnica sólida e conhecimento aprofundado em estatística, trabalho transformando dados em insights valiosos para tomada de decisões estratégicas.",
    "Minha expertise abrange Python, R, análise estatística, machine learning e visualização de dados. Tenho experiência em projetos de detecção de fraudes, análise financeira e otimização de processos.",
    "Busco constantemente aperfeiçoar minhas habilidades e aplicar soluções inovadoras que combinam conhecimento técnico de engenharia com o poder da ciência de dados."
]

# Contact data
CONTACT_INFO = [
    ContactInfo(
        icon="Mail",
        label="Email",
        value="rafaellopespinheiro@email.com",
        href="mailto:rafaellopespinheiro@email.com"
    ),
    ContactInfo(
        icon="Phone",
        label="Telefone",
        value="+55 (82) 9 9947-8680",
        href="tel:+5582999478680"
    ),
    ContactInfo(
        icon="MapPin",
        label="Localização",
        value="Alagoas, Brasil",
        href="#"
    )
]

AVAILABILITY_INFO = {
    "status": "available",
    "title": "Disponível para Projetos",
    "description": "Atualmente disponível para projetos freelance e oportunidades de tempo integral em Data Science."
}