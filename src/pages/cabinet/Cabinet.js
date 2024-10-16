import './cabinet.css';
import logo from "../../dist/img/y_logo.png";

const person = {
    last_name: "Ильина",
    first_name: "Елена",
    middle_name: "Владимировно",
    birth_date: "17.12.2004",
    phone: "79991114477",
    email: "yanie@yandex.ru",
    pass: "123",
}

function Cabinet() {
    return (
        <div className="Cabinet">
            <div className="Cabinet_buttons">
                <button className="Cabinet_button" onClick={() => alert('Вход')}> Вход</button>
                <button className="Cabinet_button" onClick={() => alert('Регистрация')}> Регистрация</button>
            </div>

            <div className="Cabinet_info">
                <div className="Cabinet_info_item">
                    <div className="Cabinet_info_item_left">Фамилия</div>
                    <div className="Cabinet_info_item_right">{person.last_name}</div>
                </div>

                <div className="Cabinet_info_item">
                    <div className="Cabinet_info_item_left">Имя</div>
                    <div className="Cabinet_info_item_right">{person.first_name}</div>
                </div>

                <div className="Cabinet_info_item">
                    <div className="Cabinet_info_item_left">Отчество</div>
                    <div className="Cabinet_info_item_right">{person.middle_name}</div>
                </div>

                <div className="Cabinet_info_item">
                    <div className="Cabinet_info_item_left">Дата рождения</div>
                    <div className="Cabinet_info_item_right">{person.birth_date}</div>
                </div>

                <div className="Cabinet_info_item">
                    <div className="Cabinet_info_item_left">Почта</div>
                    <div className="Cabinet_info_item_right">{person.email}</div>
                </div>

                <div className="Cabinet_info_item">
                    <div className="Cabinet_info_item_left">Пароль</div>
                    <div className="Cabinet_info_item_right">{person.pass}</div>
                </div>

                <div className="Agreement_block">
                    <div className="Agreement_block_item">
                        <a className="Agreement_block_item_link" href={'personal-agreement'}>
                            * Согласие на обработку персональных данных
                        </a>
                        <a className="Agreement_block_item_link" href={'smm-agreement'}>
                            * Согласие на рассылку рекламных объявлений
                        </a>
                </div>
                </div>

                <div className="Cabinet_footer">
                    <div className="Cabinet_footer_logo">
                        <a href={'main'}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </a>
                    </div>
                    <div className="Cabinet_footer_navigation">
                        <button className="Cabinet_footer_navigation_button" onClick={() => alert('Отправлено')}>>>></button>
                    </div>
                </div >

            </div>
        </div>
    );
}

export default Cabinet;
