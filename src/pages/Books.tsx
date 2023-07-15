import Book from '@/components/book';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';

const Books = () => {
  const { data } = useGetBooksQuery(undefined);

  return (
    <div>
      <Book data={data?.data ?? []} />
    </div>
  );
};

export default Books;
