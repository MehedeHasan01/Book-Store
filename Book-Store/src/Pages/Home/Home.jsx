import { useLoaderData } from "react-router-dom";
import BookCategory from "../../Components/BookCategory/BookCategory";
import Banner from "../../Components/Header/Banner";
import Books from "./Books";
import { useState } from "react";

const Home = () => {
    const books = useLoaderData()
    const [ShowAllBooks, setShowAllBooks] = useState(6)
    return (
        <div >
            <Banner/>
            <div className="py-20 max-w-6xl mx-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-7">
                <div>
                    <BookCategory/>
                </div>

                <div className=" md:col-span-3">
                <h1 className="text-2xl text-gray-900 font-bold mb-4 ">Books Category</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            books.slice(0,ShowAllBooks).map(book => <Books key={book.id} book={book} ></Books> )
                        }
                    </div>
                        <div className={`${ShowAllBooks <= 6 ?  'block' : 'hidden' }`} >
                        <h1 onClick={()=> setShowAllBooks(books.lenght)} className={`bg-blue-700 text-white font-bold text-xl px-7 rounded-md cursor-pointer py-2 my-6 w-fit mx-auto `} >See All</h1>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Home;