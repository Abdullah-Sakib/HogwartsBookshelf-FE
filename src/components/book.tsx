import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

const Book = ({ data }: { data: IBook[] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map((book: IBook, i: number) => (
            <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link
                to={`/book-details/${book?._id}`}
                className="block cursor-pointer relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={book.image}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {book.genre}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {book.title}
                </h2>
                <h2 className="text-gray-900 title-font text-base font-medium">
                  @{book.author}
                </h2>
                <p className="mt-1 font-semibold">
                  Published: {new Date(book.publication_date).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;
