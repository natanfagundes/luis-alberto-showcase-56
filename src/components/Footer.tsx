import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Mail, Linkedin, Github, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/luis-alberto-oliveira-product-owner",
    },
    {
      name: "GitHub", 
      icon: Github,
      href: "#",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:luis.oliveira@email.com",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center font-bold">
                LO
              </div>
              <div>
                <h3 className="font-bold text-lg">Luis Alberto Oliveira</h3>
                <p className="text-primary-foreground/70 text-sm">Product Owner & Agile Expert</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformando ideias em produtos digitais de sucesso através de metodologias 
              ágeis e foco na experiência do usuário.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <div className="flex flex-col space-y-2">
              {['Sobre', 'Experiência', 'Projetos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Vamos Conversar</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">luis.oliveira@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+55 (11) 99999-9999</span>
              </div>
              <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                Disponível para oportunidades
              </Badge>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a 
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <p className="flex items-center gap-1">
              © {currentYear} • Feito com <Heart className="h-3 w-3 text-red-400" fill="currentColor" /> por Luis Alberto
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground/60 hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;