export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'Local' | 'Oficina' | 'Puesto en Galería' | 'Galpón' | 'Departamento' | 'Casa';
  image: string;
  beds: number;
  baths: number;
  area: number;
};

export const properties: Property[] = [
  {
    id: 1,
    title: 'Local comercial a la calle con gran vidriera',
    location: 'Villa del Parque, CABA',
    price: 'USD 210.000',
    type: 'Local',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    beds: 0,
    baths: 1,
    area: 92,
  },
  {
    id: 2,
    title: 'Oficina comercial en edificio corporativo',
    location: 'Microcentro, CABA',
    price: 'USD 265.000',
    type: 'Oficina',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    beds: 3,
    baths: 2,
    area: 138,
  },
  {
    id: 3,
    title: 'Puesto en galería con alto tránsito peatonal',
    location: 'Once, CABA',
    price: 'USD 58.000',
    type: 'Puesto en Galería',
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
    beds: 0,
    baths: 1,
    area: 18,
  },
  {
    id: 4,
    title: 'Galpón con acceso para logística urbana',
    location: 'Parque Patricios, CABA',
    price: 'USD 490.000',
    type: 'Galpón',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    beds: 1,
    baths: 2,
    area: 420,
  },
  {
    id: 5,
    title: 'Local gastronómico en esquina estratégica',
    location: 'Caballito, CABA',
    price: 'USD 345.000',
    type: 'Local',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    beds: 0,
    baths: 1,
    area: 146,
  },
  {
    id: 6,
    title: 'Departamento apto profesional (ocasional)',
    location: 'Almagro, CABA',
    price: 'USD 129.000',
    type: 'Departamento',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    beds: 2,
    baths: 1,
    area: 54,
  },
];
