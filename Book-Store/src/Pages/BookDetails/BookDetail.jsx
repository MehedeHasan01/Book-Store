import PropTypes from 'prop-types';

const BookDetail = ({bookdetail}) => {
    const {writer_name, book_name, book_image, price, details} = bookdetail
    return (
        <div className='bg-white rounded-md'>
            <div>
                <img src={book_image} alt="" className='w-full h-[35rem] rounded-t-md' />
            </div>
            <div className='p-4 space-y-2'>
            <h2 className=" font-bold text-gray-900">
                নাম :-
                {book_name}
                </h2>
                <p className='text-slate-600 font-semibold'>মূল্য :- <span className='text-slate-500'>{price}</span> </p>
                <p className='text-slate-600 font-semibold'>লেখক :- <span className='text-slate-500'>{writer_name}</span> </p>
                <p className='font-medium text-slate-600 '>
                    <span className='text-base'>বিস্তারিত :- </span>
                    {
                        details
                    }
                </p>

            </div>
        </div>
    );
};

BookDetail.propTypes = {
    bookdetail: PropTypes.object
};

export default BookDetail;