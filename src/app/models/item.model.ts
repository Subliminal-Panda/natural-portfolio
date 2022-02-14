export interface Item {
    id: string | undefined;
    category: string;
    title: string;
    description: string;
    image: string;
    icon: string;
    link: string;
    linkname: string;
    order: number | undefined;
    published: boolean;
}
