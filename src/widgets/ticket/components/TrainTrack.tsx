import style from './TrainTrack.module.scss';
import train from '../../../assets/images/train.svg'

export interface ITrainTrack {
}

export default function TrainTrack({}: ITrainTrack) {
    return (
        <div className={style.container}>
          <div>
            <img src={train} alt="" />
          </div>
          Томск - Москва - Сочи
        </div>
    );
}
