import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Capturing moments, creating memories.",
    quickLinks: [
        {
            text: "About",
            url: "#about"
        },
        {
            text: "Gallery",
            url: "#gallery"
        },
        {
            text: "Pricing",
            url: "#pricing"
        }
    ],
    email: 'stephwatersphotos@gmail.com',
    telephone: '‭+1 (908) 202-9923‬',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/snw.photos',
    }
}