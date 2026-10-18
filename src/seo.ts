export const SITE_NAME = "Asdrúbal Chirinos";
export const TWITTER_CREATOR = "@achirinos";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export type Lang = "es" | "en";

export type PageSeo = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
};

export const seo = {
    home: {
        es: {
            title: SITE_NAME,
            description:
                "Arquitecto de Visión. Conecto a quienes sueñan con quienes hacen para convertir ideas audaces en realidad.",
            image: "/og-home-light.png",
            imageAlt: "Asdrúbal Chirinos, Arquitecto de Visión",
        },
        en: {
            title: SITE_NAME,
            description:
                "Vision Architect. I connect dreamers and doers to turn bold ideas into reality.",
            image: "/og-home-light.png",
            imageAlt: "Asdrúbal Chirinos, Vision Architect",
        },
    },
    philosophy: {
        es: {
            title: "Filosofía",
            description:
                "Mi misión es construir puentes entre quienes sueñan y quienes hacen, uniendo visión y ejecución.",
            image: "/og-philosophy.png",
            imageAlt: "Filosofía: puentes entre los que sueñan y los que hacen",
        },
        en: {
            title: "Philosophy",
            description:
                "My mission is to build bridges between those who dream and those who do, connecting vision and execution.",
            image: "/og-philosophy.png",
            imageAlt: "Philosophy: bridges between those who dream and those who do",
        },
    },
    personalSoftware: {
        es: {
            title: "Personal Software",
            description:
                "Un movimiento que devuelve el control creativo a las personas: software hecho por quien vive el problema.",
            image: "/og-personal-software.png",
            imageAlt: "Personal Software: control, intención y libertad para crear",
        },
        en: {
            title: "Personal Software",
            description:
                "A movement that gives creative control back to people: software made by those who live the problem.",
            image: "/og-personal-software.png",
            imageAlt: "Personal Software: control, intention, and freedom to create",
        },
    },
    resume: {
        es: {
            title: "Currículum",
            description:
                "Más de 30 años uniendo visión de negocio y ejecución técnica como arquitecto de soluciones.",
            image: "/og-resume.png",
            imageAlt: "Currículum: más de 30 años de tecnología al servicio del negocio",
        },
        en: {
            title: "Resume",
            description:
                "Over 30 years bridging business vision and technical execution as a solution architect.",
            image: "/og-resume.png",
            imageAlt: "Resume: over 30 years of technology in service of the business",
        },
    },
    projects: {
        es: {
            title: "Proyectos",
            description:
                "Proyectos personales: Código Ergo Sum y P1 Express App, una herramienta ligera y offline-first.",
            image: "/og-projects.png",
            imageAlt: "Proyectos: ideas convertidas en producto",
        },
        en: {
            title: "Projects",
            description:
                "Personal projects: Código Ergo Sum and P1 Express App, a lightweight offline-first tool.",
            image: "/og-projects.png",
            imageAlt: "Projects: ideas turned into product",
        },
    },
    p1Express: {
        es: {
            title: "P1 Express App",
            description:
                "App minimalista y offline-first del método P1.express: planificar, hacer y reflexionar sin distracciones.",
            image: "/og-p1-express.png",
            imageAlt: "P1 Express: planear, hacer, reflexionar",
        },
        en: {
            title: "P1 Express App",
            description:
                "A minimal, offline-first P1.express app for planning, doing, and reflecting without distractions.",
            image: "/og-p1-express.png",
            imageAlt: "P1 Express: plan, do, reflect",
        },
    },
    blog: {
        es: {
            title: "Escritos",
            description: "Notas sobre tecnología y vida.",
            image: DEFAULT_OG_IMAGE,
            imageAlt: SITE_NAME,
        },
        en: {
            title: "Writing",
            description: "Notes on technology and life.",
            image: DEFAULT_OG_IMAGE,
            imageAlt: SITE_NAME,
        },
    },
} satisfies Record<string, Record<Lang, PageSeo>>;
