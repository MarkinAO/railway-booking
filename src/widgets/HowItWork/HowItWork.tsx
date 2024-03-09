import style from "./HowItWork.module.scss";
import icon1 from "./assets/1.svg";
import icon2 from "./assets/2.svg";
import icon3 from "./assets/3.svg";

export default function HowItWork() {
    return(
        <div className={style.container}>
            <div className={style.header}>
                <h3 className={style.title}>КАК ЭТО РАБОТАЕТ</h3>

            </div>
            <div className={style.content}>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src={icon1} alt="Удобный заказ на сайте" />
                    </div>
                    <div className={style.itemText}>Удобный заказ на сайте</div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src={icon2} alt="Нет необходимости ехать в офис" />
                    </div> 
                    <div className={style.itemText}>Нет необходимости ехать в офис</div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src={icon3} alt="Огромный выбор направлений" />
                    </div>
                    <div className={style.itemText}>Огромный выбор направлений</div>
                </div>
            </div>
        </div>
    )
}