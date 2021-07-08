import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react"
import style from "./SuperRange.module.css"

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    value?: number
    onChangeRange?: (value: number) => void
}

export const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        value,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${style.range} ${className ? className : ""}`

    return (
        <>
            <input
                type={"range"}
                value={value}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                {...restProps}
            />
        </>
    )
}
