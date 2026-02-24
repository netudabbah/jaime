import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-slate-50 py-12 sm:py-14">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-slate-200 bg-white p-5 sm:p-6">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">Contacto</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Estamos para ayudarte en la compra, venta y alquiler de propiedades con atención
            directa.
          </p>

          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-ink-900">Dirección</dt>
              <dd className="mt-1 text-slate-700">Cuenca 356, Capital Federal</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">Teléfono</dt>
              <dd className="mt-1 text-slate-700">4612-4662 / 4637-0243</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">WhatsApp</dt>
              <dd className="mt-1 text-slate-700">11-3794-2672</dd>
            </div>
          </dl>
        </div>

        <div className="border border-slate-200 bg-white p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-ink-900">Enviar consulta</h3>
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
                className="w-full border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand-400"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink-900">Email</span>
                <input
                  type="email"
                  required
                  placeholder="nombre@email.com"
                  className="w-full border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand-400"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink-900">Teléfono</span>
                <input
                  type="tel"
                  placeholder="11-0000-0000"
                  className="w-full border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand-400"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink-900">Mensaje</span>
              <textarea
                required
                rows={5}
                placeholder="Escribinos tu consulta."
                className="w-full resize-y border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand-400"
              />
            </label>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="min-w-40">
                Enviar consulta
              </Button>
              {submitted ? (
                <p className="text-sm font-medium text-emerald-700">
                  Consulta enviada (demo frontend). Te contactaremos pronto.
                </p>
              ) : (
                <p className="text-xs text-slate-500">Formulario de demostración.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
