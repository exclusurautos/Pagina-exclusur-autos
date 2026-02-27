import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">EXCLUSUR AUTOS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Confianza, elegancia y respaldo en cada vehículo
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#inicio" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#inventario" className="hover:text-primary transition-colors">
                  Inventario
                </Link>
              </li>
              <li>
                <Link href="#vender" className="hover:text-primary transition-colors">
                  Vender
                </Link>
              </li>
              <li>
                <Link href="#comprar" className="hover:text-primary transition-colors">
                  Comprar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+57 310 505 9178</li>
              <li>exclusurautos@gmail.com</li>
              <li>Envigado, Colombia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Exclusur Autos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
