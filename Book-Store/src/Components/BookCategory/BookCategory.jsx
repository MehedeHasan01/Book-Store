










const BookCategory = () => {
    const Categorys = ['Education', 'Technology', 'Environment', 'Politics', 'Philosophy', 'Psychology', 'Sports'  ]
    return (
        <>
        <div>
            <h1 className="text-2xl text-gray-900 font-bold mb-4 ">Books Category</h1>
            <div className="">
                <div className="border  border-gray-400 rounded-md ">


                        {
                            Categorys.map((Category, inx )=> <p
                            className="text-center font-semibold text-xl border-b border-gray-400  py-4 text-gray-700 cursor-pointer"
                            key={inx}> {Category} </p>)
                        }
                </div>
            </div>
        </div>
        </>
    );
};

export default BookCategory;
