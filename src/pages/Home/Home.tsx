import Slider from "../../widgets/Slider/Slider";
import HowItWork from "../../widgets/HowItWork/HowItWork";
import style from "./Home.module.scss";

import Ticket from "../../widgets/ticket/Ticket";

export default function Home() {
    return(
        <>
            <section className={style.container}>
                <div className={`${style.textBox} ${style.margin}`}>
                    <h3 className={style.title}>О НАС</h3>
                    <div className={style.content}>
                        <p>
                            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
                            все больше людей заказывают жд билеты через интернет.
                        </p>
                        <p>
                            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                            Мы расскажем о преимуществах заказа через интернет.
                        </p>
                        <p className={style.highlight}>
                            Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                        </p>
                    </div>
                </div>
                <Ticket />
                <HowItWork />
                <div className={`${style.margin} ${style.slider}`}>
                    <Slider />
                </div>
            </section>
        </>
    )
}