import './navigation.css';
import logo from '../../dist/img/y_logo.png';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="Nav">
            <div className="Logo_block">
                <Link to='/'>
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </div>
            <div className="Buttons">
                <button className="Button">Преимущества</button>
                <button className="Button">Команда</button>
                <button className="Button">Тарифы</button>
                <button className="Button">Контакты</button>
                <Link to="/cabinet"><button className="Button">Личный кабинет</button></Link>
            </div>
        </div>
    );
}

export default Navigation;