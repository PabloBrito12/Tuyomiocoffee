export const brand = {
  name: "Tuyomio Coffee",
  instagram: "https://www.instagram.com/tuyomiocoffee/",
  logoImage: "/images/Logo.jpg",
  heroImage: "/images/Imagen%2001.jpg",
};

export const menuHighlights: Array<{
  name: string;
  description: string;
  price?: string;
  image?: string;
}> = [];

export const galleryImages: Array<{
  src: string;
  alt: string;
  position: "wide" | "portrait" | "square";
}> = [
  {
    src: "/images/iamgen%2002.jpg",
    alt: "Bebida de Tuyomio servida en un evento",
    position: "wide",
  },
  {
    src: "/images/iamgen%2003_files/849161226_17956987632251358_6685562299176618288_n.jpg",
    alt: "Leche vertiéndose sobre un café de Tuyomio",
    position: "portrait",
  },
  {
    src: "/images/imagen%2005.jpg",
    alt: "Estación de café Tuyomio preparada para servir",
    position: "square",
  },
];
