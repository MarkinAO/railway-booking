import style from './FeedbackCard.module.scss';
import userMockImg from '../../../assets/images/user-astronaut.svg';

export interface IFeedbackCard {
    item: {
        img: string
        name: string
        text: string
    }    
}

export default function FeedbackCard(props: IFeedbackCard) {
    const { img, name, text } = props.item;
    return(
        <div className={style.container}>
            <div className={style.imgWrap}>
                <img src={img || userMockImg} alt={name} />
            </div>
            <div className={style.content}>
                <h4 className={style.name}>{name}</h4>
                <p className={style.text}>"{text}"</p>
            </div>            
        </div>
    )
}