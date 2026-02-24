import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/properties';

export function PropertiesSection() {
  return (
    <section id="propiedades" className="bg-slate-50 py-12 sm:py-14">
      <div className="section-shell">
        <div className="mb-6">
          <div>
            <span className="section-eyebrow">Propiedades</span>
            <h2 className="section-title">Propiedades destacadas</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Selección de propiedades disponibles. También trabajamos locales, oficinas y otras
              operaciones comerciales según la necesidad de cada cliente.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
