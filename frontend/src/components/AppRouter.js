import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home.js'
import Login from '../pages/login.js'
import Signup from '../pages/signup.js'
// import Delivery from '../pages/Delivery.js'
// import Contacts from '../pages/Contacts.js'
import User from '../pages/User.js'
import NotFound from '../pages/notfound.js'
import Admin from '../pages/admin.js'
import { AppContext } from './AppContext.js'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

const publicRoutes = [
    {path: '/login', Component: Login},
    {path: '/signup', Component: Signup},
    {path: '/', Component: Login},
    // {path: '/delivery', Component: Delivery},
    // {path: '/contacts', Component: Contacts},
    {path: '*', Component: NotFound},
]

const authRoutes = [
    {path: '/', Component: Home},
    {path: '/user', Component: User},
]

const adminRoutes = [
    {path: '/admin', Component: Admin},
]

const AppRouter = observer(() => {
    const { user } = useContext(AppContext)
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            {user.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
    )
})

export default AppRouter