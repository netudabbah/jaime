import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/properties';

export function PropertiesSection() {
  return (
    <section id="propiedades" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow">Propiedades destacadas</span>
            <h2 className="section-title">Oportunidades comerciales para invertir y operar</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Selección de locales, oficinas, puestos en galerías y espacios comerciales con
              análisis de ubicación, circulación y potencial de explotación.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
          >
            Solicitar búsqueda comercial <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
