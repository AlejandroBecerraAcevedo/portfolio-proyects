import { BookText, CodeSquare, HomeIcon, UserRound,Youtube, Linkedin, Rss, Crop, Pencil, Computer, Book, Rocket, Speech, Twitch, Twitter, Github } from "lucide-react";


export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alejandro-becerra-acevedo-8ba371226/",
    },
    {
        id:2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/AlejandroBecerraAcevedo",
    }  
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "BlockChain Developer",
        subtitle: "Estudiante de la Universidad de Antioquia",
        description: "En paralelo al ambiente de trabajo en la Universidad se adquiere el conocimiento necesario para desarrollar aplicaciones descentralizadas y contratos inteligentes en la red de ICP, con el lenguaje de programación MOTOKO.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        subtitle: "Estudiante de la Universidad de Antioquia",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 3,
        title: "Artificial Intelligence and Big-data Developer",
        subtitle: "Estudiante de la Universidad de Antioquia",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a un futuro tecnológico.",
        date: "August 2023",
    },
    {
        id: 4,
        title: "Especialista en Desarrollo IOT (Internet of Things)",
        subtitle: "Ingeniero Electrónico del Instituto Tecnológico Metropolitano",
        description: "Como desarrollador de Internet de las cosas, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2020",
    },    
    {
        id: 5,
        title: "Prácticas Grado",
        subtitle: "Fatelares S.A.S.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, quiero conocerte!        ",
        date: "Dic 2015",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Innovación y Creatividad",
        description: "Desarrollo de soluciones tecnológicas como lo es IA, Big Data, IoT y Blockchain.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Proyecto IA Pruebas Saber Kaggle",
        image: "/Kaggle.png",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/modelPredictPrebaSaber",
        urlDemo: "https://www.youtube.com/watch?v=FQt3c-Vk2d8",
    },
    {
        id: 2,
        title: "Desarrollo Aplicación descentralizada ICP con Motoko",
        image: "/Motoko.jpg",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/motoko-react-ADN-faculty-vocational",
        urlDemo: "https://www.youtube.com/watch?v=XXCpCFI5Afo",
    },
    {
        id: 3,
        title: "Desarrollo Aplicación descentralizada ICP con Azle",
        image: "/Azle.png",
        urlGithub: "https://github.com/andresm05/icp-hackaton-crypto-blockers",
        urlDemo: "https://uvyfx-hiaaa-aaaap-qhivq-cai.icp0.io/",
    },
    {
        id: 4,
        title: "Desarrollo Backend con Spring Boot",
        image: "/Spring.png",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/ArquitLab2",
        urlDemo: "https://github.com/AlejandroBecerraAcevedo/ArquitLab2",
    }
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/Astronomic.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

export const SkillData = [
    {
        name: "Html 5",
        Image: "/html.png",
        width: 80,
        height: 80,
    },
    {
        name: "Css",
        Image: "/css.png",
        width: 80,
        height: 80,
    },
    {
        name: "JavaScript",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
    },
    {
        name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
    },
    {
        name: "mysql",
        Image: "/mysql.png",
        width: 80,
        height: 80,
    },
    {
        name: "TypeScript",
        Image: "/ts.png",
        width: 80,
        height: 80,
    },
    {
        name: "Next js 13",
        Image: "/next.png",
        width: 80,
        height: 80,
    },
    {
        name: "Node js",
        Image: "/node-js.png",
        width: 80,
        height: 80,
    },
    {
        name: "Mongo db",
        Image: "/mongodb.png",
        width: 40,
        height: 40,
    },
    {
        name: "Spring Boot",
        Image: "/Spring.png",
        width: 80,
        height: 80,
    },
    {
        name: "Motoko",
        Image: "/Motoko-1.png",
        width: 160,
        height: 160,
    },
    {
        name: "Azle",
        Image: "/Azle-1.png",
        width: 80,
        height: 80,
    },
  ];
  