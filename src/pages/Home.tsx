import banner from '@/assets/images/books.avif';
import Books from '@/components/books';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            The secret
            <br />
            world of Books
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Invent yourself in a different way.
          </p>
          <div className="text-primary font-semibold mt-10">
            <p>Explore 50,000+ books for free.</p>
            <p>Read from anywhre in the world.</p>
          </div>
        </div>
        <div className="relative w-[40%]  rounded-2xl bg-[#728a7c] border-[6px] border-[#728a7c]">
          <img className="w-full rounded-xl  " src={banner} alt="" />
        </div>
      </div>
      <Books />
      <Footer />
    </>
  );
}
