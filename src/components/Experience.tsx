import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, TrendingUp, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Product Owner",
      company: "Tech Solutions Brasil",
      period: "2022 - Presente",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Lidero o desenvolvimento de produtos digitais para mais de 100k usuários, coordenando equipes multidisciplinares e implementando metodologias ágeis.",
      achievements: [
        "Aumentou a retenção de usuários em 45%",
        "Liderou migração para arquitetura de microserviços",
        "Implementou OKRs resultando em 30% mais produtividade"
      ],
      skills: ["Product Strategy", "Scrum", "Data Analytics", "Leadership"]
    },
    {
      title: "Product Owner",
      company: "Digital Innovation Corp",
      period: "2020 - 2022", 
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Responsável pelo roadmap de produtos B2B, gerenciando backlog de funcionalidades e coordenando releases quinzenais.",
      achievements: [
        "Reduziu time-to-market em 35%",
        "Implementou framework de priorização RICE",
        "Gerenciou portfolio de R$ 2M em projetos"
      ],
      skills: ["Agile", "Stakeholder Management", "MVP Development", "KPIs"]
    },
    {
      title: "Business Analyst", 
      company: "StartupTech",
      period: "2018 - 2020",
      location: "São Paulo, SP", 
      type: "Tempo Integral",
      description: "Análise de requisitos de negócio e tradução para especificações técnicas, apoiando o crescimento de startup de fintech.",
      achievements: [
        "Documentou +200 user stories",
        "Apoiou crescimento de 0 a 50k usuários",
        "Criou processo de discovery de produtos"
      ],
      skills: ["Requirements Analysis", "User Research", "Prototyping", "SQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Experiência Profissional
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Jornada de
            <span className="text-gradient block">Crescimento Profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma trajetória construída com foco em resultados, inovação e desenvolvimento 
            de produtos que fazem a diferença no mercado.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium hidden lg:block" />
                
                <Card className="lg:ml-20 p-8 card-gradient shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-secondary mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-primary flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Principais Conquistas
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <TrendingUp className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="lg:border-l lg:pl-6">
                      <h5 className="font-semibold mb-4 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Tecnologias & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;