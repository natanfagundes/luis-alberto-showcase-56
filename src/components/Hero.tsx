import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Linkedin, Github, Phone } from "lucide-react";
import profileHero from "@/assets/luis-profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-secondary-light text-secondary border-0">
              Disponível para novas oportunidades
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
              Luis Alberto
              <span className="block text-gradient">Oliveira</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-primary-light">
              Product Owner & Agile Expert
            </h2>
            
            <p className="text-lg mb-8 text-primary-light/90 max-w-2xl leading-relaxed">
              Transformando ideias em produtos digitais de sucesso através de metodologias ágeis, 
              análise de dados e foco na experiência do usuário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="secondary" size="lg" className="group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Entre em Contato
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4 text-primary-light/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">luis.oliveira@email.com</span>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={profileHero}
                alt="Luis Alberto Oliveira - Product Owner"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-large"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-medium font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  5+ Anos de Experiência
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="text-primary-light hover:text-primary-foreground"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;