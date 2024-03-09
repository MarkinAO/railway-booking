import style from "./Logo.module.scss";

interface ILogo {
    url?: string
}

export default function Logo({url}: ILogo) {
    return(
        <div className={style.container}>
            { url && <img src={url} alt="Лого" /> }
            { !url && "Лого" }
        </div>
    )
}