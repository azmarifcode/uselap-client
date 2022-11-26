import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout';
import Main from '../Layouts/Main';
import AllBuyer from '../Pages/Dashboard/Panel/AdminPanel/AllBuyer';
import AllProduct from '../Pages/Dashboard/Panel/AdminPanel/AllProduct';
import AllSeller from '../Pages/Dashboard/Panel/AdminPanel/AllSeller';
import Report from '../Pages/Dashboard/Panel/AdminPanel/Report';
import Home from '../Pages/Dashboard/Home/Home';
import AddProduct from '../Pages/Dashboard/Panel/SellerPanel/AddProduct';
import MyProduct from '../Pages/Dashboard/Panel/SellerPanel/MyProduct';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import Welcome from '../Pages/Dashboard/Panel/Welcome';
import MyOrder from '../Pages/Dashboard/Panel/BuyerPanel/MyOrder';
import CategoriesData from '../Pages/Dashboard/Home/Category/Categories/CategoriesData';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
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
                path: '/categories-data/:category',
                element: <CategoriesData />,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_LOCALHOST}/categories-data/${params.category}`)},
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/all-buyer',
                element: <AllBuyer />,
            },
            {
                path: '/dashboard/all-seller',
                element: <AllSeller />,
            },
            {
                path: '/dashboard/all-product',
                element: <AllProduct />,
            },
            {
                path: '/dashboard/report',
                element: <Report />,
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct />,
            },
            {
                path: '/dashboard/my-product',
                element: <MyProduct />,
            },
            {
                path: '/dashboard/my-order',
                element: <MyOrder />,
            },
            {
                path: '/dashboard/welcome',
                element: <Welcome />,
            },
        ],
    },
]);
export default router;
