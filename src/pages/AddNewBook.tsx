import { getFromLocalStorage } from '@/utils/localstorage';

const AddNewBook = () => {
  // user info
  const user = getFromLocalStorage('user-info');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem('title') as HTMLInputElement)?.value;
    const author = (form.elements.namedItem('author') as HTMLInputElement)
      ?.value;
    const genre = (form.elements.namedItem('genre') as HTMLInputElement)?.value;
    const publicationDate = (
      form.elements.namedItem('publication_date') as HTMLInputElement
    )?.value;

    const imageInput = form.elements.namedItem('image') as HTMLInputElement;

    const image =
      imageInput &&
      imageInput.files &&
      imageInput.files.length > 0 &&
      imageInput?.files[0];

    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }

    // Send POST request to ImgBB API
    const response = await fetch(
      'https://api.imgbb.com/1/upload?key=52da0bdc00f5234da4cd195736e4fb5f',
      {
        method: 'POST',
        body: formData,
      }
    );

    // Parse response JSON
    const imageData = await response.json();

    const bookData = {
      title,
      author,
      genre,
      publication_date: publicationDate,
      image: imageData?.data?.url,
      creator: user.id,
    };

    console.log(bookData);
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add A New Book
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-wrap -m-2"
          >
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="author"
                  className="leading-7 text-sm text-gray-600"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  data-temp-mail-org={0}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="genre"
                  className="leading-7 text-sm text-gray-600"
                >
                  Genera
                </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  data-temp-mail-org={0}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="publication_date"
                  className="leading-7 text-sm text-gray-600"
                >
                  Publication date
                </label>
                <input
                  type="date"
                  id="publication_date"
                  name="publication_date"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  data-temp-mail-org={0}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="image"
                  className="leading-7 text-sm text-gray-600"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  data-temp-mail-org={0}
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewBook;
