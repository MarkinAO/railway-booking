import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import Logo from "../../shared/ui/Logo/Logo";
import Booking from "./components/Booking/Booking";

export default function Header() {
    return(
        <div className={style.container}>            
            <div className={style.head}>
                <div className={style.logo}>
                    <Logo />
                </div>                
                <ul className={style.navigate}>
                    <li><Link to={'/about'}>О нас</Link></li>
                    <li><Link to={'/description'}>Как это работает</Link></li>
                    <li><Link to={'/reviews'}>Отзывы</Link></li>
                    <li><Link to={'/contacts'}>Контакты</Link></li>
                </ul>
            </div>
            <div className={style.content}>                
                <div className={style.text}>Вся жизнь - <span>путешествие!</span></div>
                <div className={style.booking}>
                    <Booking />
                </div>                
            </div>
        </div>
    )
}