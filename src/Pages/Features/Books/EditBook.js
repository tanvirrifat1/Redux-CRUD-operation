import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateBook } from './BookSlice';

const EditBook = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBook({ id, author, title }))
        navigate('/show_books')
        toast.success('Edit confirmed', { autoClose: 500 })
    }

    return (
        <div>
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
                                    <button className="btn btn-primary">edit book</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBook;