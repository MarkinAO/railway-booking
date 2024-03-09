import style from './Ticket.module.scss';
import TrainTrack from './components/trainTrack';

interface ITicket {

}

export default function Ticket({}: ITicket) {
    return(
        <section className={style.container}>
            <TrainTrack />
        </section>
    )
}