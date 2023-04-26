import * as React from 'react'
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <>
            Page not found. <Link to="/">Go to main</Link>
        </>
    );
};

export default NotFound;
