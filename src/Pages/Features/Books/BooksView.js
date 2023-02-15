import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBook } from './BookSlice';

const BooksView = () => {
    const books = useSelector((state) => state.bookReducer.books)
    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
        toast.warning('Deleted SuccessFully', { autoClose: 500 })
    }

    return (
        <div>
            <h2>List of Books</h2>
            <div className="overflow-x-auto p-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books && books.map((book) => {
                            const { id, title, author } = book
                            return <tr key={book.id}>
                                <th></th>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <Link to='/edit_book' state={{ id, title, author }}>
                                        <button className='btn btn-outline rounded-full '>Edit</button>
                                    </Link>
                                    <button onClick={() => { handleDeleteBook(id) }} className='btn btn-outline rounded-full ml-1'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BooksView;