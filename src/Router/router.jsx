import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
<<<<<<< HEAD
import InfoForm from '../pages/InfoForm/InfoForm';
=======
import Credits from '../pages/Credits/Credits';
>>>>>>> 0fbf9acf63d5ebada1f9e5c492119d92ae0f2d1e
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
<<<<<<< HEAD
                path: '/infoForm',
                element: <InfoForm />
=======
                path: '/credits',
                element: <Credits></Credits>
>>>>>>> 0fbf9acf63d5ebada1f9e5c492119d92ae0f2d1e
            }
        ]

    }
])

export default router;