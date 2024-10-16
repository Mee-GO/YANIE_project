import './navigation.css';
import logo from '../../dist/img/y_logo.png';


function Navigation() {
    return (
        <div className="Nav">
            <div className="Logo_block">
                <a href={'main'}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
            <div className="Buttons">
                <button className="Button">Преимущества</button>
                <button className="Button">Команда</button>
                <button className="Button">Тарифы</button>
                <button className="Button">Контакты</button>
                <button className="Button">Личный кабинет</button>
            </div>
        </div>
    );
}

export default Navigation;
