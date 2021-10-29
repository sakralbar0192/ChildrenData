import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import cl from './header.module.scss'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__logo}>
                <Link to="/form">
                    <img src={logo} alt="Alef" width="93" height="29" />
                </Link>
            </div>            
            <nav className = {cl.header__nav}> 
                <Link to="/form">
                    Форма
                </Link>
                <Link to="/preview">
                    Превью
                </Link>
            </nav>
        </header>
    );
};

export default Header;