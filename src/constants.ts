export const API_URL = import.meta.env.DEV
  ? "http://localhost:8787/api"
  : new URL(import.meta.url).origin + "/api";

console.log(API_URL);

export const contact = {
  name: "Benjamin Rivas Beltrán",
  email: "benjaminrivas500@gmail.com",
  phone: "+56 9 3683 9527",
  instagram: {
    username: "benja_arb",
    link: "https://www.instagram.com/benja_arb/",
  },
  discord: "Bennjamon2006_",
  facebook: {
    username: "Benjamin Rivas Beltrán ",
    link: "https://www.facebook.com/benjaminrivas.fergh",
  },
};
