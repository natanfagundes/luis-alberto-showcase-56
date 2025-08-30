import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, Users, TrendingUp } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const projects = [
    {
      title: "EcommerceMax Analytics",
      description: "Plataforma completa de analytics para e-commerce com dashboard em tempo real, análise de comportamento do usuário e otimização de conversão.",
      image: project1,
      category: "Product Analytics",
      timeline: "6 meses",
      team: "8 pessoas",
      impact: "+150% ROI",
      technologies: ["React", "Python", "PostgreSQL", "AWS"],
      achievements: [
        "40% aumento na conversão",
        "Redução de 60% no bounce rate", 
        "Dashboard usado por +500 empresas"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "AgileFlow Management",
      description: "Sistema de gestão ágil integrado com ferramentas de desenvolvimento, permitindo acompanhamento de sprints, métricas de equipe e automação de workflows.",
      image: project2,
      category: "Project Management",
      timeline: "8 meses", 
      team: "12 pessoas",
      impact: "+200% Produtividade",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Docker"],
      achievements: [
        "Adotado por +50 equipes",
        "30% redução em overhead",
        "Integração com +15 ferramentas"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "FinTech Mobile App",
      description: "Aplicativo mobile para gestão financeira pessoal com IA para categorização automática, insights de gastos e planejamento financeiro.",
      image: project1,
      category: "Mobile Product",
      timeline: "10 meses",
      team: "6 pessoas", 
      impact: "50k+ usuários",
      technologies: ["React Native", "Firebase", "ML", "Stripe"],
      achievements: [
        "4.8★ na App Store",
        "Featured pela Apple",
        "R$ 2M+ transacionados"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Projetos em Destaque
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Produtos que
            <span className="text-gradient block">Geram Impacto Real</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que liderei, desde a concepção até a entrega, 
            sempre focando em resolver problemas reais e gerar valor mensurável.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden card-gradient shadow-medium hover:shadow-large transition-all duration-500 hover:scale-[1.02] animate-scale-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                >
                  {project.category}
                </Badge>
              </div>

              <div className="p-6">
                {/* Header */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Calendar className="h-3 w-3 text-primary" />
                    </div>
                    <div className="font-semibold text-primary">{project.timeline}</div>
                    <div className="text-muted-foreground text-xs">Duração</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-3 w-3 text-secondary" />
                    </div>
                    <div className="font-semibold text-secondary">{project.team}</div>
                    <div className="text-muted-foreground text-xs">Equipe</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="h-3 w-3 text-success" />
                    </div>
                    <div className="font-semibold text-success">{project.impact}</div>
                    <div className="text-muted-foreground text-xs">Impacto</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Tecnologias</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Resultados</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Ver Projeto
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Quer ver mais projetos ou discutir uma oportunidade?
          </p>
          <Button variant="premium" size="lg">
            Vamos Conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;