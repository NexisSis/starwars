import * as React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import PeopleContainer from './PeopleContainer';
import PeopleListContainer from './PeopleListContainer';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <PeopleListContainer />,
        errorElement: <NotFound />,
    },
    {
        path: "/people/:id",
        element: <PeopleContainer />,
    },
]);

const AppContainer: React.FC = () => {
    return (
      <RouterProvider router={router} />
    )
};

export default AppContainer;
