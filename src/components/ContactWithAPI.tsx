import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { portfolioAPI, ContactResponse, ContactSubmissionResponse } from "@/services/api";

const ContactWithAPI = () => {
  const [contactInfo, setContactInfo] = useState<ContactResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
  });

  // Load contact info from API
  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        const data = await portfolioAPI.getContactInfo();
        setContactInfo(data);
      } catch (error) {
        console.error("Failed to load contact info:", error);
        // Fallback to static data if API fails
        setContactInfo({
          contact_info: [
            {
              icon: "Mail",
              label: "Email",
              value: "rafaellopespinheiro@hotmail.com",
              href: "mailto:rafaellopespinheiro@hotmail.com"
            },
            {
              icon: "Phone",
              label: "Telefone",
              value: "+55 (82) 9 9947-8680",
              href: "tel:+5582999478680"
            },
            {
              icon: "MapPin",
              label: "Localização",
              value: "Alagoas, Brasil",
              href: "#"
            }
          ],
          availability: {
            status: "available",
            title: "Disponível para Projetos",
            description: "Atualmente disponível para projetos freelance e oportunidades de tempo integral em Data Science."
          }
        });
      }
    };

    loadContactInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response: ContactSubmissionResponse = await portfolioAPI.submitContactForm(formData);
      
      if (response.success) {
        setSubmitMessage(response.message);
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitMessage(response.message);
      }
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setSubmitMessage("Erro ao enviar mensagem. Verifique se o backend está rodando e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      Mail,
      Phone,
      MapPin
    };
    return iconMap[iconName] || Mail;
  };

  if (!contactInfo) {
    return <div>Carregando informações de contato...</div>;
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm">
            Entre em Contato
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto de dados em mente? Adoraria conversar sobre como podemos transformar dados em insights valiosos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div className="card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth hover:glow-primary">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            
            {submitMessage && (
              <div className={`mb-4 p-4 rounded-lg ${
                submitMessage.includes("sucesso") 
                  ? "bg-green-100 text-green-800 border border-green-200" 
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="João"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Sobrenome
                  </label>
                  <Input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Silva"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="joao.silva@exemplo.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Assunto
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Projeto de análise de dados"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-me sobre seu projeto de dados..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full hero-gradient text-white font-semibold py-6 text-lg transition-smooth hover:scale-105 hover:glow-primary disabled:opacity-50"
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Vamos nos Conectar
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre aberto para discutir novas oportunidades, projetos interessantes de análise de dados, 
                ou apenas conversar sobre ciência de dados e tecnologia. Sinta-se à vontade para entrar em contato!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.contact_info.map((info, index) => {
                const IconComponent = getIcon(info.icon);
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-primary/10 transition-smooth hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 hero-gradient rounded-xl group-hover:scale-110 transition-smooth">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="card-gradient p-6 rounded-xl border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-foreground">
                  {contactInfo.availability.title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {contactInfo.availability.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactWithAPI;