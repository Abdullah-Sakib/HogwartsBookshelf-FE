import { IBook } from '@/types/globalTypes';

const Book = ({ data }: { data: IBook[] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map((book: IBook, i: number) => (
            <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={book.image}
                />
              </a>
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
                  Published: {book.publication_date}
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
