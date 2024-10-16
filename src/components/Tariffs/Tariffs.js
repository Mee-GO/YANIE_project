import './Tariffs.css';
import number1 from '../../dist/img/number1.png';

function Tariffs() {
    return (
        <div className="Tariffs">
            <div className="Tariffs_wrapper">
                <h3 className="Tariffs_wrapper_title">Тарифы</h3>
                <div className="Tariffs_list">
                    <div className="Tariffs_list_item">
                        <div className="Tariffs_list_item_logo">
                            <img src={number1} className="App-logo" alt="logo" />
                        </div>
                        <div className="Tariffs_list_item_title"> Старт </div>
                        <div className="Tariffs_list_item_text"> От 10 000 руб.
                            до 49 999 руб.
                            Еженедельная отчётность
                            25% комиссия
                            Поддержка 24/7 </div>
                    </div>

                    <div className="Tariffs_list_item">
                        <div className="Tariffs_list_item_logo">
                            <img src={number1} className="App-logo" alt="logo" />
                        </div>
                        <div className="Tariffs_list_item_title_special"> Стандарт </div>
                        <div className="Tariffs_list_item_text"> От 50 000 руб.
                            до 149 999 руб.
                            Еженедельная отчётность
                            20% комиссия
                            Поддержка 24/7 </div>
                </div>

                <div className="Tariffs_list_item">
                    <div className="Tariffs_list_item_logo">
                        <img src={number1} className="App-logo" alt="logo" />
                    </div>
                    <div className="Tariffs_list_item_title">Премиум </div>
                    <div className="Tariffs_list_item_text"> От 150 000 руб.
                        до 499 999 руб.
                        Ежедневная отчётность
                        17% комиссия
                        Поддержка 24/7
                        Видеовстречи 1 раз в неделю</div>
            </div>

                    <div className="Tariffs_list_item">
                        <div className="Tariffs_list_item_logo">
                            <img src={number1} className="App-logo" alt="logo" />
                        </div>
                        <div className="Tariffs_list_item_title">VIP </div>
                        <div className="Tariffs_list_item_text"> От 500 000 руб.
                            и более
                            Ежедневная отчётность
                            15% комиссия
                            Поддержка 24/7
                            Видеовстречи 2 раза в неделю
                            Личный наставник
                            Индивидуальное обучение торговли и инвестированию
                        </div>
                    </div>
                </div>
                <button className="Tariffs_buttons" onClick={() => alert('куплено')}> Купить подписку </button>
            </div>
        </div>
    );
}

export default Tariffs;
