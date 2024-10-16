import './About.css';
import pic1 from '../../dist/img/pic1.png';

function About() {
    return (
        <div className="About">
            <div className="About_wrapper">
                <h3 className="About_title">Почему мы?</h3>

                <div className="Cards">

                    <div className="Card">
                        <div className="Card_logo">
                            <img src={pic1} className="App-logo" alt="logo" />
                        </div>
                        <div className="Card_title"> Доверительное управление </div>
                        <div className="Card_text"> Подбор инвестиционной стратегии
                            с учётом финансовых целей и уровня риска </div>
                    </div>

                    <div className="Card">
                    <div className="Card_logo">
                        <img src={pic1} className="App-logo" alt="logo" />
                    </div>
                    <div className="Card_title"> Консультация </div>
                    <div className="Card_text"> Индивидуально, составляется под запрос клиента </div>
                </div>

                <div className="Card">
                <div className="Card_logo">
                    <img src={pic1} className="App-logo" alt="logo" />
                </div>
                <div className="Card_title"> Анализ </div>
                <div className="Card_text"> Проведение анализа
                    и предоставление по его результатам отчёта</div>
            </div>

                    {/*<div className="Card">*/}
                    {/*    <div className="Card_logo">*/}
                    {/*        <img src={pic1} className="App-logo" alt="logo" />*/}
                    {/*    </div>*/}
                    {/*    <div className="Card_title"> Еженедельные обзорные статьи </div>*/}
                    {/*    <div className="Card_text"> Глубокий и подробный анализ рынка криптовалют</div>*/}
                    {/*</div>*/}

                    {/*<div className="Card">*/}
                    {/*    <div className="Card_logo">*/}
                    {/*        <img src={pic1} className="App-logo" alt="logo" />*/}
                    {/*    </div>*/}
                    {/*    <div className="Card_title"> Вебинары и прямые эфиры  </div>*/}
                    {/*    <div className="Card_text"> О главных трендах, которые актуальны на крипторынке</div>*/}
                    {/*</div>*/}

                    {/*<div className="Card">*/}
                    {/*    <div className="Card_logo">*/}
                    {/*        <img src={pic1} className="App-logo" alt="logo" />*/}
                    {/*    </div>*/}
                    {/*    <div className="Card_title"> Обучение криптоинвестированию </div>*/}
                    {/*    <div className="Card_text"> На платформах-партнёрах проекта</div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
}

export default About;
