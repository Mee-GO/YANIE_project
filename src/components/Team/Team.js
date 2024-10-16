import './Team.css';
import person1 from '../../dist/img/person1.png';
import person2 from '../../dist/img/person2.png';
import person3 from '../../dist/img/person3.png';

function Team() {
    return (
        <div className="Team">
            <div className="Team_wrapper">
                <h3 className="Team_title">Команда</h3>
                <div className="Team_members">
                    <div className="Team_member">
                        <div className="Team_member_logo">
                            <img src={person1} className="App-logo" alt="logo" />
                        </div>
                        <div className="Team_member_title"> Котельников Ян Юрьевич
                            CEO YANIE invest group </div>
                        <div className="Team_member_text"> Проведение финансовой аналитики, написание аналитических статей,
                            реализация методологических функций, составление персональных стратегий и рекомендаций </div>
                    </div>

                    <div className="Team_member">
                    <div className="Team_member_logo">
                        <img src={person2} className="App-logo" alt="logo" /> </div>
                    <div className="Team_member_title"> Ильина Елена Владимировна
                        CEO YANIE invest group </div>
                    <div className="Team_member_text"> Управление и менеджмент, маркетинг
                        и продажи, финансовое консультирование, исполнение сделок, дизайн </div>
                </div>

                <div className="Team_member">
                <div className="Team_member_logo">
                    <img src={person3} className="App-logo" alt="logo" />
                </div>
                <div className="Team_member_title"> Кот Виктор Олегович
                    Member of  YANIE invest group </div>
                <div className="Team_member_text"> Полное техническое сопровождение проекта, внедрение необходимых элементов дизайна
                    и функционала в код сайта, устранение возможных неполадок</div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
