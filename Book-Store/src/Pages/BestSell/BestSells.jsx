import { useLoaderData } from "react-router-dom";
import BestSell from "./BestSell";

const BestSells = () => {
    const Books = useLoaderData();
    return (
        <>

        <div className="max-w-6xl mx-auto py-6">
         <div className=" grid grid-cols-1  md:grid-cols-3 gap-6">
            {
                Books?.map(book => <BestSell key={book.id} book={book}></BestSell>)
            }
        </div>
        </div>

        </>
    );
};

export default BestSells;