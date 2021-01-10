import GoogleIMG from "../assets/googleProjectTN.jpg";
import TodoIMG from "../assets/todoTN.png";
import GameIMG from "../assets/2048tn.jpeg";
import Weather from "../assets/weather.jpg";
import GoogleSVG from "../assets/google logo svg.svg";

export const projects = [
  {
    name: "Weather Forecast",
    thumbnail: Weather,
    stack: ["HTML", "CSS", "JS", "REACT", "Firebase", "API"],
    about:
      "Wettervorhersage-App mit Anbindung an Wetter- und Karten-APIs. Das Frontend wurde mit ReactJS implementiert. Diese Seite wird per Firebase gehostet.",
    links: {
      github: "https://github.com/lewisyng/weatherdata",
      webpage: "",
    },
  },
  {
    name: "Todo Manager",
    thumbnail: TodoIMG,
    stack: ["HTML", "CSS", "JS", "REACT", "IndexedDB API", "Firebase"],
    about: "Eine Todo App, die Einträge per IndexedDB API speichert. Die App wird per Firebase gehostet.",
    links: {
      github: "https://github.com/lewisyng/weatherdata",
      webpage: "",
    },
  },
  {
    name: "2048",
    thumbnail: GameIMG,
    stack: ["HTML", "CSS", "JS", "Firebase"],
    about: "Ein erfolgreiches Spiel, mit dem Ziel passende Zahlen zusammenzusetzen. Gewonnen hat man, wenn man die Punktzahl 2048 erreicht. Gehostet wird die Webapp per Firebase.",
    links: {
      github: "https://github.com/lewisyng/weatherdata",
      webpage: "",
    },
  },
  {
    name: "Google Clone",
    thumbnail: GoogleIMG,
    stack: ["HTML", "CSS", "JS", "REACT", "Firebase"],
    about: "GOOGLE CLONE",
    links: {
      github: "https://github.com/lewisyng/weatherdata",
      webpage: "",
    },
  },
];
