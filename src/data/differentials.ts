export interface Differential {
  icon: string;
  title: string;
  description: string;
  image: string;
  video: string | null;
}

// TODO: ajustar textos e imágenes con el contenido real del evento.
export const differentials: Differential[] = [
  {
    icon: "award",
    title: "Actualización científica",
    description: "Ponencias y casos clínicos con referentes de la odontología actual.",
    image: "images/dif-1.jpg",
    video: null,
  },
  {
    icon: "users",
    title: "Contactos comerciales",
    description: "Reunite en un mismo lugar con proveedores, distribuidores y laboratorios.",
    image: "images/dif-2.jpg",
    video: null,
  },
  {
    icon: "trending-up",
    title: "Tecnología y tendencias",
    description: "Descubrí los lanzamientos en equipos, materiales y flujo digital.",
    image: "images/dif-3.jpg",
    video: null,
  },
  {
    icon: "flask",
    title: "Formación práctica",
    description: "Talleres hands-on y demostraciones en vivo para llevar a tu consultorio.",
    image: "images/dif-4.jpg",
    video: null,
  },
];
