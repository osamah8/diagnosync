export interface JourneyItem {
    date: string;
    title: string;
    description: string;
    href?: string;
}

export const journeyData: JourneyItem[] = [
    {
        date: "Mar 2023",
        title: "Founded",
        description: "Diagnosync started with a vision to build tools that solve real clinical problems — fast, simple, and founder-led."
    },
    {
        date: "May 2024",
        title: "Radiology Interview Prep.",
        description: "Our first product: a personal take on tackling radiology ST1 interviews. A clean site with honest guidance — plus a high-margin question bank that undercut overpriced competitors.",
        href: "https://radiologyinterviewprep.com"
    }
];