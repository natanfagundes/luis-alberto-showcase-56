import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, TrendingUp, Award, Zap } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const skills = [
    { name: "Product Management", level: 95, icon: Target },
    { name: "Agile/Scrum", level: 90, icon: Users },
    { name: "Data Analysis", level: 85, icon: TrendingUp },
    { name: "UX Strategy", level: 80, icon: Award },
    { name: "Team Leadership", level: 92, icon: Zap },
  ];

  const achievements = [
    "Aumento de 40% na satisfação do cliente",
    "Redução de 30% no time-to-market",
    "Liderou +15 projetos de sucesso",
    "Certificação Scrum Master",
    "MBA em Gestão de Produtos Digitais"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Sobre Mim
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transformando Visões em
            <span className="text-gradient block">Produtos de Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Com mais de 5 anos de experiência em Product Management, especializo-me em 
            criar produtos digitais que geram valor real para usuários e negócios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Minha Abordagem</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Acredito que produtos excepcionais nascem da combinação perfeita entre 
              <strong className="text-primary"> visão estratégica</strong>, 
              <strong className="text-primary"> metodologias ágeis</strong> e 
              <strong className="text-primary"> foco no usuário</strong>. 
              Minha experiência abrange desde startups até grandes corporações, 
              sempre com foco em resultados mensuráveis.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Principais Competências</h4>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Luis Alberto trabalhando com equipe ágil"
                className="w-full rounded-2xl shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="animate-slide-up">
          <Card className="p-8 card-gradient shadow-medium">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Principais Conquistas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group hover:scale-105 transition-transform duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-success mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium leading-relaxed">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;