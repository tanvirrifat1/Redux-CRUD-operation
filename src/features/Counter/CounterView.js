import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './CounterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => { dispatch(increment()) }}
                className='btn h-4 rounded-full'
            >increment</button>
            <button onClick={() => { dispatch(decrement()) }}
                className='btn h-4 rounded-full'
            >decrement</button>
            <button onClick={() => { dispatch(reset()) }}
                className='btn h-4 rounded-full'
            >reset</button>
            <button onClick={() => { dispatch(incrementByAmount(5)) }}
                className='btn h-4 rounded-full'
            >incrementBy5</button>
        </div>
    );
};

export default CounterView;