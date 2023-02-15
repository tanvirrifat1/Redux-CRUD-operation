import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import AddBooks from "../Pages/Features/Books/AddBooks";
import BooksView from "../Pages/Features/Books/BooksView";
import EditBook from "../Pages/Features/Books/EditBook";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/show_books",
                element: <BooksView />
            },
            {
                path: "/add_book",
                element: <AddBooks />
            },
            {
                path: "/edit_book",
                element: <EditBook />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
])