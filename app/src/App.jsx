import './App.css';
import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';
// import Home from './components/home/Home';
// import HomePage from './components/home/HomePage';
// import Login from './components/user/Login';
// import Signup from './components/user/Signup';
// import Error from './components/common/Error';
// import AddProject from './components/admin/AddProject';
// import AddCategory from './components/admin/AddCategory';
import EditorPage from './components/editor/EditorPage';

function App() {

    const route = createBrowserRouter([
        {
        //     path: 'admin',
        //     element: <Home />,
        //     errorElement: <Error />,
        //     children: [
        //         {
        //             path: '',
        //             element: <AddProject />
        //         }, {
        //             path: 'category',
        //             element: <AddCategory />
        //         }
        //     ]
        // }, {
          path: '',
            element: <EditorPage />,
            // errorElement: <Error />
        // }, {
        //     path: 'dashboard',
        //     element: <Home />,
        //     errorElement: <Error />,
        //     children: [
        //         {
        //             path: '',
        //             element: <HomePage />
        //         }, {
        //             path: 'user',
        //             element: <ProtectedRoute><Outlet /></ProtectedRoute>,
        //         }
        //     ]
        // }, {
        //     path: '',
        //     element: <Login />
        // }, {
        //     path: 'signup',
        //     element: <Signup />
        }
    ])
    return (
        <RouterProvider router={route}></RouterProvider>
    );
}
export default App;