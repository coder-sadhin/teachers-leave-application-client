import { createBrowserRouter } from 'react-router-dom';
import LeavesMain from '../Layout/LeavesMain/LeavesMain';
import Main from '../Layout/Main';
import Credits from '../pages/Credits/Credits';
import InfoForm from '../pages/InfoForm/InfoForm';
import LeavesForm from '../pages/LeavesForm/LeavesForm';
import LoginForm from '../pages/LoginForm/LoginForm';
import SingUpForm from '../pages/SingUpForm/SignUpForm';
import Verification from '../pages/SingUpForm/Verification';

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
            },
            {
                path: '/leaves',
                element: <LeavesMain />,
                children: [
                    {
                        path: '/leaves',
                        element: <LeavesForm />
                    },
                ]
            },
        ]

    },
])

export default router;