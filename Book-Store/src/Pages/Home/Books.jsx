import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Books = ({book}) => {
    const {id,book_name, book_image, price, details} = book
    return (
        <div>
            <div className="card bg-white rounded-md h-[80vh]">
            <figure><img src={book_image} alt="Shoes" className='w-full h-[22rem]' /></figure>
            <div className="card-body px-3 -mt-2">
                <h2 className=" font-bold text-gray-900">
                নাম :-
                {book_name}

                </h2>
                <p className='text-slate-600 font-semibold'>মূল্য :- <span className='text-slate-500'>{price}</span> </p>
                <p className='text-sm font-medium text-slate-600 '>
                    <span className='text-base'>বিস্তারিত :- </span>
                    {
                        details.slice(0, 90)
                    }...
                </p>
            </div>
                <Link to={`/bookDetails/${id}`} className=' text-center font-bold text-white bg-blue-700 py-2 text-xl rounded-b-md'>Details</Link>
            </div>
        </div>
    );
};

Books.propTypes = {
    book: PropTypes.object
};

export default Books;