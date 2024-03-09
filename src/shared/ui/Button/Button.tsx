import style from "./Button.module.scss";

interface IButton {
    text: string
    type?: "base" | "white" | "mini" | "transparent" | "dark"
    handler: Function
    disable?: boolean
}

export default function Button({text, type, handler, disable}: IButton) {
    const disableClass = disable && ` ${style["disable"]} ` || "";
    const castomClass = type && ` ${style[type]} ` || "";
    const resultClass = style["base"] + castomClass + disableClass;
    const resultText = type === "mini" || type === "transparent" ? text : text.toUpperCase();
    return(
        <button
            className={resultClass}
            onClick={() => handler()}
        >
            {resultText}
        </button>
    )
}