import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AppContext } from './AppContext.js'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import CheckAuth from './CheckAuth.js'
// import FetchBasket from './FetchBasket.js'

const NavBar = observer(() => {
    const { user, basket } = useContext(AppContext)
    if (!user.isAuth) return;
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to="/" className="navbar-brand">Магазин</NavLink>
                <Nav className="ml-auto">
                    <NavLink to="/delivery" className="nav-link">Доставка</NavLink>
                    <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
                    <CheckAuth>
                        {user.isAuth ? (
                            <NavLink to="/user" className="nav-link">Личный кабинет</NavLink>
                        ) : (
                            <>
                                <NavLink to="/login" className="nav-link">Войти</NavLink>
                                <NavLink to="/signup" className="nav-link">Регистрация</NavLink>
                            </>
                        )}
                        {user.isAdmin && (
                            <NavLink to="/admin" className="nav-link">Панель управления</NavLink>
                        )}
                    </CheckAuth>
                </Nav>
            </Container>
        </Navbar>
    )
})

export default NavBar