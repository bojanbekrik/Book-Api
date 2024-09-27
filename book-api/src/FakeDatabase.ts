export interface Book {
    id: number;
    title: string;
    author: string;
    publicationYear: number;
}

export const books: Book[] = [
    {
        id: 1,
        title: 'To kill a mockingbird',
        author: 'Harper Lee',
        publicationYear: 1960
    },
    {
        id: 2,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publicationYear: 1813
    },
    {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publicationYear: 1925
    },
    {
        id: 4,
        title: 'Moby-Pick',
        author: 'Herman Melville',
        publicationYear: 1851
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        publicationYear: 1951
    }
]