import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "luis.oliveira@email.com",
      link: "mailto:luis.oliveira@email.com"
    },
    {
      icon: Phone, 
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      link: "#"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/luis-alberto-oliveira",
      link: "https://linkedin.com/in/luis-alberto-oliveira-product-owner"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Vamos Conversar
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para o
            <span className="text-gradient block">Próximo Desafio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
            ou simplesmente trocar experiências sobre product management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 card-gradient shadow-medium animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Send className="h-6 w-6 text-primary" />
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nome *
                  </label>
                  <Input 
                    placeholder="Seu nome completo"
                    required
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Empresa
                </label>
                <Input 
                  placeholder="Nome da sua empresa"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Assunto *
                </label>
                <Input 
                  placeholder="Sobre o que você gostaria de conversar?"
                  required
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Conte-me mais sobre sua ideia, projeto ou oportunidade..."
                  rows={5}
                  required
                  className="resize-none transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            <Card className="p-8 card-gradient shadow-medium">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          {info.title}
                        </h4>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 card-gradient shadow-medium">
              <h4 className="font-bold mb-4">Ações Rápidas</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar uma Reunião
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="mailto:luis.oliveira@email.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email Direto
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/luis-alberto-oliveira-product-owner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Conectar no LinkedIn
                  </a>
                </Button>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 card-gradient shadow-medium bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse mt-2" />
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Disponível para Novas Oportunidades
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Atualmente explorando oportunidades em <strong>Product Management</strong>, 
                    <strong> Digital Transformation</strong> e <strong>Startups</strong>. 
                    Respondo em até 24h!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;