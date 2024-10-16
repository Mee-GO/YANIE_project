import './Contacts.css';

function Contacts() {
    return (
        <div className="Contacts">
            <div className="Text">
                <div className="Text_title">
                    Контакты
                </div>
                <div className="Contacts_info">
                 <div>Телефон: +7 963 150 82 47</div>
                 <div>Почта: Iaiukotelnikov@edu.hse.ru</div>
                </div>
                <div className="Contacts_links">
                    Мы в соцсетях
                    {/*<button> ТГ </button>*/}
                    {/*<button> WA </button>*/}
                </div>
            </div>
        </div>
    );
}

export default Contacts;
