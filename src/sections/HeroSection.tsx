import { Button } from '../components/Button';

const heroImage =
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80';

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 bg-copper-fade" aria-hidden="true" />

      <div className="section-shell relative flex min-h-[78vh] items-center py-20 lg:min-h-[84vh]">
        <div className="max-w-3xl animate-float-in">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            Inmobiliaria comercial en Capital Federal
          </span>
          <h1
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Archivo', 'Manrope', system-ui, sans-serif" }}
          >
            Encontrá el espacio comercial ideal para tu negocio
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Más de 20 años acompañando operaciones de locales, oficinas, galerías y activos
            comerciales con atención profesional y criterio de mercado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#propiedades">
              <Button as="span" className="min-w-44">
                Ver Propiedades
              </Button>
            </a>
            <a href="#contacto">
              <Button
                as="span"
                variant="secondary"
                className="min-w-44 border-white/60 bg-white/10 text-white hover:bg-white hover:text-ink-900"
              >
                Contactar
              </Button>
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['20+', 'Años de experiencia'],
              ['Locales y oficinas', 'Operaciones comerciales'],
              ['Atención', 'Personalizada'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 bg-white/8 p-4 backdrop-blur-md"
              >
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="mt-1 text-sm text-white/75">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
