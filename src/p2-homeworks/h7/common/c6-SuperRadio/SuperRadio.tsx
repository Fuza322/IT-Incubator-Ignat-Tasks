import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

export const SuperRadio: React.FC<SuperRadioPropsType> = ({
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions = options ? options.map((option, i) => (
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                name={name}
                value={option}
                checked={value === option}
                onChange={onChangeCallback}
            />
            {option}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}