import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react"
import style from "./SuperInputText.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const SuperInputText: React.FC<SuperInputTextPropsType> = ({
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange, onChangeText,
    onKeyPress, onEnter,
    error,
    className, spanClassName,
    ...restProps// все остальные пропсы попадут в объект restProps
}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        e.key === "Enter"
        && onEnter
        && onEnter()
    }

    const finalSpanClassName = `${style.error} ${spanClassName ? spanClassName : ""}`
    const finalInputClassName = `${error ? style.errorInput : style.superInput}`

    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error ? <span className={finalSpanClassName}>{error}</span> : null}
        </>
    )
}