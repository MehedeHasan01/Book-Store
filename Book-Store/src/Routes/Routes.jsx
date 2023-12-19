import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import BestSells from "../Pages/BestSell/BestSells";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorMessage/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                loader: ()=> fetch('/books.json')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/bookDetails/:id',
                element: <PrivetRoute><BookDetails/></PrivetRoute>,
                loader: ()=> fetch('/books.json')
            },
            {
                path: '/bestSell',
                element:<PrivetRoute><BestSells/></PrivetRoute>,
                loader: ()=> fetch('/books.json')
            }
        ]
    }
])

export default Routes;