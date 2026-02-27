import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
            <p className="text-muted-foreground text-lg">Estamos aquí para ayudarte a encontrar tu próximo vehículo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Calle 39 sur No. 25B-130
                    <br />
                    Envigado, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <a href="tel:+573001234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +57 310 505 9178
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:exclusurautos@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    exclusurautos@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold mb-4">Síguenos en redes sociales</h3>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.instagram.com/exclusur_autos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Síguenos en Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.facebook.com/share/177gGyy9vx/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Síguenos en Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.tiktok.com/@exclusur.autos?_r=1&_t=ZS-94HAvxkvFWJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Síguenos en TikTok"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">Horario de atención</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="font-semibold">Cerrado</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
