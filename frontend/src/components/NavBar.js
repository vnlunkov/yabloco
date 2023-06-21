import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { AppContext } from './AppContext.js'

// import CheckAuth from './CheckAuth.js'
// import FetchBasket from './FetchBasket.js'

const NavBar = observer(() => {
    const { user } = useContext(AppContext)
    // if (!user.isAuth) return;
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to="/" className="navbar-brand">Главная</NavLink>
                <Nav className="ml-auto">
                    {/* <CheckAuth> */}
                        {user.isAuth ? (
                            <>
                            <NavLink to="/orders" className="nav-link">Заказы</NavLink>
                            <NavLink to="/user" className="nav-link">Личный кабинет</NavLink>
                            </>
                        ) : (
                            
                            <NavLink to="/login" className="nav-link">Войти</NavLink>
                                
                        )}
                        {user.isAdmin && (
                            <NavLink to="/admin" className="nav-link">Панель управления</NavLink>
                        )}
                    {/* </CheckAuth> */}
                </Nav>
            </Container>
        </Navbar>
    )
})

export default NavBar