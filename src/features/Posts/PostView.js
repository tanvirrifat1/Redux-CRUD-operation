import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './PostSlice';

const PostView = () => {
    const { isLoading, error, posts } = useSelector((state) => state.posts)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div className='grid gap-[0.5rem] bg-black text-white p-[0.4rem]'>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <section>
                {posts && posts.map((post) => {
                    return <article key={post.id}>
                        <h5>{post.title}</h5>
                        <h5>{post.body}</h5>
                    </article>
                })}
            </section>
        </div>
    );
};

export default PostView;