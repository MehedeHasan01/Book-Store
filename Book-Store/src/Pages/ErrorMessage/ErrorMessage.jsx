import Navbar from "../../Components/Header/Navbar";

const ErrorMessage = () => {
    return (
        <div>
            <Navbar/>
            <div className="h-[80vh] flex justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-700">
             Not Found Page
            </h1>
        </div>
        </div>
    );
};

export default ErrorMessage;