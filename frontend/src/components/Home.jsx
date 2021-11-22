import React from 'react';

function Home({ message }) {
    return (
        <div>
            <p> {message || 'No Message'} </p>
        </div>
    );
}
export default Home;
