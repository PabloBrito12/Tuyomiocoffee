export const brand = {
  name: "Tuyomio Coffee",
  instagram: "https://www.instagram.com/tuyomioco/",
  logoImage: "/images/Logo.jpg",
  heroImage: "/images/Imagen%2001.jpg",
  reservationEmail: "",
  phone: "",
  address: "",
  hours: "",
};

export const menuHighlights: Array<{
  name: string;
  description: string;
  price?: string;
  image?: string;
}> = [];

export const galleryImages: Array<{
  src?: string;
  alt: string;
  position: "wide" | "portrait" | "square";
}> = [
  {
    src: "/images/iamgen%2002.jpg",
    alt: "Una persona sostiene una bebida de Tuyomio en una pieza de marca",
    position: "wide",
  },
  {
    src: "/images/iamgen%2003_files/849161226_17956987632251358_6685562299176618288_n.jpg",
    alt: "Detalle de leche sirviéndose sobre un café de Tuyomio",
    position: "portrait",
  },
  {
    src: "/images/imagen%2004.jpg",
    alt: "Exhibición de equipo profesional para preparar café",
    position: "square",
  },
  {
    src: "/images/imagen%2005.jpg",
    alt: "Detalle de equipos para preparar café en una pieza de marca",
    position: "wide",
  },
];
