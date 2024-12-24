import React, { useState } from 'react';
import { Navbar } from '../components/layout';

export const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Navbar/>
            <h1>Test Component</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
};