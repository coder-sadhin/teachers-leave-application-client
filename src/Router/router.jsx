import { createBrowserRouter } from 'react-router-dom';
import LeavesMain from '../Layout/LeavesMain/LeavesMain';
import Main from '../Layout/Main';
import Credits from '../pages/Credits/Credits';
import ErrorPage from '../pages/Error/ErrorPage';
import InfoForm from '../pages/InfoForm/InfoForm';
import LeavesForm from '../pages/LeavesForm/LeavesForm';
import LeavesManage from '../pages/LeavesManage/LeavesManage';
import LoginForm from '../pages/LoginForm/LoginForm';
import SingUpForm from '../pages/SingUpForm/SignUpForm';
import Verification from '../pages/SingUpForm/Verification';
import ViewStatus from '../pages/ViewStatus/ViewStatus';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <LoginForm />
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
                element: <InfoForm />
            },
            {
                path: '/confirm',
                element: <Verification />
            },
            {
                path: '/leavesForm',
                element: <LeavesForm />
            },
            {
                path: '/credits',
                element: <Credits />
            }
        ]

    },
    {
        path: '/leaves',
        element: <LeavesMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/leaves/leaveFrom',
                element: <LeavesForm />
            },
            {
                path: '/leaves/leavesManage',
                element: <LeavesManage />
            },
            {
                path: '/leaves/viewStatus',
                element: <ViewStatus />
            },
        ]
    }
])

export default router;