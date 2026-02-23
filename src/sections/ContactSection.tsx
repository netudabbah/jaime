import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface-panel p-6 sm:p-8">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">Hablemos sobre tu próxima operación</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Si querés vender, comprar o tasar un local, oficina, puesto en galería o inmueble
            comercial, escribinos. Te respondemos con una propuesta clara según tu objetivo.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Dirección
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-900">
                Cuenca 356, Capital Federal
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Teléfono
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-900">4612-4662 / 4637-0243</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                WhatsApp
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-900">11-3794-2672</p>
            </div>
          </div>
        </div>

        <div className="surface-panel p-6 sm:p-8">
          <h3 className="text-xl font-bold text-ink-900">Enviar consulta</h3>
          <p className="mt-2 text-sm text-slate-600">
            Completá el formulario y te contactamos a la brevedad.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink-900">Nombre</span>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink-900">Email</span>
                <input
                  type="email"
                  required
                  placeholder="nombre@email.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink-900">Teléfono</span>
                <input
                  type="tel"
                  placeholder="11-0000-0000"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink-900">Mensaje</span>
              <textarea
                required
                rows={5}
                placeholder="Contanos qué tipo de local/oficina/espacio comercial buscás o qué necesitás vender/tasar."
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </label>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="min-w-44">
                Enviar consulta
              </Button>
              {submitted ? (
                <p className="text-sm font-medium text-emerald-700">
                  Consulta enviada (demo frontend). Te contactaremos pronto.
                </p>
              ) : (
                <p className="text-xs text-slate-500">Formulario de demostración sin backend.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
