import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import InfoForm from '../pages/InfoForm/InfoForm';
import LeavesForm from '../pages/LeavesForm/LeavesForm';
import LoginForm from '../pages/LoginForm/LoginForm';
import SingUpForm from '../pages/SingUpForm/SignUpForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: '/leavesForm',
                element: <LeavesForm />
            },
        ]

    }
])

export default router;