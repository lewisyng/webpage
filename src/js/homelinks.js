import { faGithub, faMedium, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const homelinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lewis-young-276603164/",
        icon: faLinkedin,
        target: "_blank",
    },
    {
        name: "Github",
        url: "https://github.com/lewisyng",
        icon: faGithub,
        target: "_blank"
    },
    {
        name: "Medium",
        url: "https://medium.com/@lewisyoung1306",
        icon: faMedium,
        target: "_blank"
    },
    {
        name: "Mail",
        url: "mailto:lewisyoung1306@yahoo.de",
        icon: faEnvelope,
        target: ""
    }
    // {
    //     name: "Lebenslauf",
    //     url: "/resume",
    //     icon: faFile,
    //     target: "_self"
    // },
]