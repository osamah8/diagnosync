export interface JourneyItem {
    date: string;
    title: string;
    description: string;
    href?: string;
}

export const journeyData: JourneyItem[] = [
    {
        date: 'Mar 2023',
        title: 'Founded',
        description: 'Diagnosync started with a vision to build tools that solve real clinical problems — fast, simple, and founder-led.'
    },
    {
        date: 'May 2024',
        title: 'Radiology Interview Prep.',
        description: 'Our first product: a personal take on tackling Clinical Radiology interviews. A clean site with honest guidance — plus a lightweight Question Bank that undercuts top-heavy competitors.',
        href: 'https://radiologyinterviewprep.com'
    }
];