import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Signup from '@/pages/Signup';
import PrivateRoute from './privateRoute';
import Books from '@/pages/Books';
import BookDetails from '@/pages/BookDetails';
import AddNewBook from '@/pages/AddNewBook';
import EditBook from '@/pages/EditBook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/edit-book/:id',
        element: <EditBook />,
      },
      {
        path: '/add-new-book',
        element: (
          // <PrivateRoute>
          <AddNewBook />
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
