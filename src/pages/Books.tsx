import Book from '@/components/book';
import { IBook } from '@/types/globalTypes';

const Books = () => {
  const booksdata: IBook[] = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic Literature',
      publication_date: 'April 10, 1925',
      image:
        'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic Literature',
      publication_date: 'July 11, 1960',
      image:
        'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: '1984',
      author: 'George Orwell',
      genre: 'Science Fiction',
      publication_date: 'June 8, 1949',
      image:
        'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Coming-of-Age Fiction',
      publication_date: 'July 16, 1951',
      image:
        'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      publication_date: 'June 26, 1997',
      image:
        'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      publication_date: 'January 28, 1813',
      image:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      publication_date: 'September 21, 1937',
      image:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      genre: 'Thriller',
      publication_date: 'March 18, 2003',
      image:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      genre: 'Fiction',
      publication_date: '1988',
      image:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      genre: 'History',
      publication_date: '2011',
      image:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <div>
      <Book data={booksdata} />
    </div>
  );
};

export default Books;
