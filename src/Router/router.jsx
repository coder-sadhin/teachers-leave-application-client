import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import LeavesMain from '../Layout/LeavesMain/LeavesMain';
import Main from '../Layout/Main';
import CreditForm from '../pages/CreditForm/CreditForm';
import CreditDetails from '../pages/Credits/Credit/CreditDetails';
import Credits from '../pages/Credits/Credits';
import AddDepartment from '../pages/Dashboard/AddDepartment/AddDepartment';
import AddLeave from '../pages/Dashboard/AddLeave/AddLeave';
import DashBoard from '../pages/Dashboard/Dashboard';
import Pending from '../pages/Dashboard/Pending/Pending';
import ErrorPage from '../pages/Error/ErrorPage';
import InfoForm from '../pages/InfoForm/InfoForm';
import LeavesForm from '../pages/LeavesForm/LeavesForm';
import LoginForm from '../pages/LoginForm/LoginForm';
import SingUpForm from '../pages/SingUpForm/SignUpForm';
import Verification from '../pages/SingUpForm/Verification';
import ViewStatus from '../pages/ViewStatus/ViewStatus';
import PrivateRoute from './PrivetRoute';
import History from '../pages/Dashboard/History/History';
import Home from '../pages/Home';
import { serverApi } from '../ServerApi/ServerApi';
import LeavesHistory from '../pages/LeavesHistory/LeavesHistory';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home /></PrivateRoute>
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/register',
                element: <SingUpForm />
            },
            {
                path: '/infoForm',
                element: <PrivateRoute><InfoForm /></PrivateRoute>
            },
            {
                path: '/confirm',
                element: <Verification />
            },
            {
                path: '/leavesForm',
                element: <PrivateRoute><LeavesForm /></PrivateRoute>
            },
            {
                path: '/credits',
                element: <Credits />
            },
            {
                path: '/creditForm',
                element: <CreditForm />
            },
            {
                path: '/credit/:id',
                element: <CreditDetails />,
                loader: ({ params }) => fetch(`${serverApi}/credit/${params.id}`)

            },
        ]

    },
    {
        path: '/leaves',
        element: <LeavesMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/leaves',
                element: <PrivateRoute><LeavesForm /></PrivateRoute>
            },
            {
                path: '/leaves/leaveFrom',
                element: <PrivateRoute><LeavesForm /></PrivateRoute>
            },
            {
                path: '/leaves/leavesHistory',
                element: <LeavesHistory />
            },
            {
                path: '/leaves/viewStatus',
                element: <PrivateRoute><ViewStatus /></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard /></PrivateRoute>
            },
            {
                path: '/dashboard/addDepartment',
                element: <PrivateRoute><AddDepartment /></PrivateRoute>
            },
            {
                path: '/dashboard/addLeave',
                element: <PrivateRoute><AddLeave /></PrivateRoute>
            },
            {
                path: '/dashboard/pending',
                element: <PrivateRoute><Pending /></PrivateRoute>
            },
            {
                path: '/dashboard/history',
                element: <PrivateRoute><History /></PrivateRoute>
            }
        ]
    },
])

export default router;