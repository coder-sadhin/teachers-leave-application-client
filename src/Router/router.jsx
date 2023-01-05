import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Credits from '../pages/Credits/Credits';
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
                path: '/credits',
                element: <Credits></Credits>
            }
        ]

    }
])

export default router;