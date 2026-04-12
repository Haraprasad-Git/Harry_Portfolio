// hero
export type Hero = {
    name: string;
    title: string;
    description: string;
};


// experience
export type Experience = {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
};

// project
export type Project = {
    title: string;
    image: string;
    description: string;
    technologies: string[];
};

// contact
export type Contact = {
    address1: string;
    address2: string;
    phoneNo: string;
    email: string;
};

export type Links = {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    resume?: string;
};
export type PortfolioContent = {
    hero: Hero;
    about: string;
    experiences: Experience[];
    projects: Project[];
    contact: Contact;
    links: Links;
};

export type SectionProps = { data: PortfolioContent; update: (path: (string | number)[], value: unknown) => void };