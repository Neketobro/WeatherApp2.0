import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HomePage, FavoritePage } from '@pages';

const routerConfig = [
    {
        path: '/',
        errorElement: <ErrorPage />,
        id: 'root',
        children: [
            { index: true, element: <HomePage /> },
            { path: '/favorite', element: <FavoritePage /> }
        ],
    },
];

export const router = createBrowserRouter(routerConfig);