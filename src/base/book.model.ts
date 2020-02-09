export interface BookModel {
    id: string;
    title: string;
    author: string;
    quantity: number;
    description: string;
    price: string;
    published_date?: string;
    book_cover?: string;
    deleted?: boolean;
}
