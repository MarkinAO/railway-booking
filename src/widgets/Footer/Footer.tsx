import style from "./Footer.module.scss";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";
import skype from "../../assets/images/skype.svg";
import geo from "../../assets/images/geo.svg";
import youtube from "../../assets/images/youtube.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google.svg";
import linked from "../../assets/images/linked.svg";
import Logo from "../../shared/ui/Logo/Logo";

export default function Footer() {    
    return(
        <footer className={style.wrap}>
            <div className={style.container}>
            <section className={style.contacts}>
                <h3>Свяжитесь с нами</h3>
                <div className={style.item}>
                    <img src={phone} alt="" />
                    <a href="tel:88000000000">8 (800) 000 00 00</a>
                </div>
                <div className={style.item}>
                    <img src={mail} alt="" />
                    <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
                </div>
                <div className={style.item}>
                    <img src={skype} alt="" />
                    <a href="tu.train.tickets">tu.train.tickets</a>
                </div>
                <div className={style.item}>
                    <img src={geo} className={style.imgGeo} alt="" />
                    <a href="#">
                        г. Москва <br />
                        ул. Московская 27-35 <br />
                        555 555
                    </a>
                </div>
            </section>
            <section className={style.subscribe}>
                <h3>Подписка</h3>
                <label>Будьте в курсе событий</label>
                <div className={style.subskribe_block}>
                    <input type="text" placeholder="e-mail"/>
                    <button>ОТПРАВИТЬ</button>
                </div>
                <h3>Подписывайтесь на нас</h3>
                <ul>
                    <li>
                        <a href="#">
                            <img src={youtube} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={linked} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={google} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={facebook} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={twitter} alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            </div>
            
            <section className={style.bottom}>
                <div className={style.content}>
                    <Logo />
                    <div>1</div>
                    <span>2018 WEB</span>
                </div>                
            </section>
        </footer>
    )
}