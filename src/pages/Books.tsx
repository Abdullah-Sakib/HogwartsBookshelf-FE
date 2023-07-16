import Book from '@/components/book';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';
import { useState } from 'react';

const Books = () => {
  const [genre, setGenre] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const { data } = useGetBooksQuery('limit=30');

  return (
    <div className="container">
      <div className="flex mt-16 mb-5">
        <Input
          type="text"
          className="w-72 mr-3"
          placeholder="Search by Title, Author, or Genre."
        />
        <Select onValueChange={(value) => setGenre(value)}>
          <SelectTrigger className="w-[200px] mr-3">
            <SelectValue placeholder="Filter by genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genre</SelectLabel>
              <SelectItem value="History">History</SelectItem>
              <SelectItem value="Fiction">Fiction</SelectItem>
              <SelectItem value="Thriller">Thriller</SelectItem>
              <SelectItem value="Fantasy">Fantasy</SelectItem>
              <SelectItem value="Romance">Romance</SelectItem>
              <SelectItem value="Fantasy">Fantasy</SelectItem>
              <SelectItem value="Coming-of-Age Fiction">
                Coming-of-Age Fiction
              </SelectItem>
              <SelectItem value="Science Fiction">Science Fiction</SelectItem>
              <SelectItem value="Classic Literature">
                Classic Literature
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setPublicationYear(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by publication year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Publication year</SelectLabel>
              <SelectItem value="2011">2011</SelectItem>
              <SelectItem value="1988">1988</SelectItem>
              <SelectItem value="2003">2003</SelectItem>
              <SelectItem value="1813">1813</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Book data={data?.data ?? []} />
    </div>
  );
};

export default Books;
