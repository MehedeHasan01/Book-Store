import { useLoaderData, useParams } from "react-router-dom";
import BookCategory from "../../Components/BookCategory/BookCategory";
import BookDetail from "./BookDetail";

const BookDetails = () => {
    const {id} = useParams()
    const Books = useLoaderData();
    const BookDetails = Books?.filter(Book => Book.id == id)
    console.log(BookDetails);
    return (
        <div className="max-w-6xl mx-auto py-10 ">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="md:col-span-3">
                <h1 className="text-2xl text-gray-900 font-bold mb-5 ">Books Category</h1>
                    {
                        BookDetails?.map(bookDetail => <BookDetail key={bookDetail.id} bookdetail={bookDetail}></BookDetail> )
                    }
                </div>
                <div>
                    <BookCategory/>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;