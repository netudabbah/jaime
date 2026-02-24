import { Button } from '../components/Button';

const heroImage =
  '/assets/hero-principal.png';

export function HeroSection() {
  return (
    <section id="inicio" className="border-b border-slate-200 bg-white">
      <div
        className="section-shell grid items-stretch gap-0 py-6 lg:grid-cols-[1.05fr_1.1fr] lg:py-8"
      >
        <div className="order-2 flex items-center bg-slate-50 px-5 py-8 sm:px-8 lg:order-1 lg:px-10">
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-semibold text-brand-700">JAIME META PROPIEDADES</p>
            <h1 className="text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Inmobiliaria en Capital Federal
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              Compra, venta y alquiler de propiedades con atención directa y profesional.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#propiedades">
                <Button as="span" className="min-w-40">
                  Ver propiedades
                </Button>
              </a>
              <a href="#contacto">
                <Button as="span" variant="secondary" className="min-w-40">
                  Contactar
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="order-1 h-64 bg-cover bg-center sm:h-80 lg:order-2 lg:h-[380px]"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-label="Fachada de edificio"
        />
      </div>
    </section>
  );
}
