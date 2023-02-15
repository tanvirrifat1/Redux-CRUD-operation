import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {

    const books = useSelector((state) => state.bookReducer.books)
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
                                    <button className='btn btn-outline rounded-full '>Edit</button>
                                    <button className='btn btn-outline rounded-full ml-1'>Delete</button>
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