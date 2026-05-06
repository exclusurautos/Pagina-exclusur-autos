import { Shield, Award, Users, TrendingUp } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Confianza",
      description: "Respaldo total en cada transacción con garantías y transparencia absoluta",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Vehículos seleccionados bajo los más altos estándares de calidad",
    },
    {
      icon: Users,
      title: "Profesionalismo",
      description: "Equipo experto dedicado a brindarte la mejor experiencia",
    },
    {
      icon: TrendingUp,
      title: "Exclusividad",
      description: "Acceso a los vehículos más exclusivos y codiciados del mercado",
    },
  ]

  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sobre Exclusur Autos</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Somos una empresa colombiana dedicada a la compraventa de vehículos usados y seminuevos. Con experiencia en
            el mercado automotriz, nos hemos consolidado como una opción confiable y transparente para quienes buscan
            un vehículo de calidad a buen precio.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestra misión es facilitar la compra y venta de vehículos de forma segura y sencilla, brindando respaldo
            legal y atención personalizada en cada negociación. Trabajamos para que encuentres el carro que necesitas
            con total tranquilidad y confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <value.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
