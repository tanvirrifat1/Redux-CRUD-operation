import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './Actions/TodosActions';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (
        <div>
            <h2>Todos App</h2>
            <div className='flex justify-center'>
                {isLoading && <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>}
            </div>
            {error && <h3>{error.message}</h3>}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-blue-900 gap-5 text-white'>
                {
                    todos && todos.map((todo) => {
                        return (
                            <article key={todo.id}>
                                <h4>{todo.id}</h4>
                                <h4>{todo.title}</h4>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Todos;