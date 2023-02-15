import React, { useState } from 'react';

const AddBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    return (
        <div className="hero mt-8">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;







{/* <form>
                <label htmlFor="author">Title:</label>
                <input
                    type="text"
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Type here"
                    required
                    className="input input-bordered input-primary w-full "
                />
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id='author'
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full "
                />
            </form> */}