import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addBook } from './BookSlice';

const AddBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const numberOfBooks = useSelector((state) => state.bookReducer.books.length)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const book = { id: numberOfBooks + 1, title, author }
        dispatch(addBook(book))
        navigate('/show_books', { replace: true })
        toast.success('Added Confirmed', { autoClose: 500 })
    }

    return (
        <div className="hero mt-8">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    id='title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Type here"
                                    required
                                    className="input input-bordered input-primary w-full "
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author</span>
                                </label>
                                <input
                                    type="text"
                                    id='author'
                                    value={author}
                                    required
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="Type here"
                                    className="input input-bordered input-primary w-full "
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">add book</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;