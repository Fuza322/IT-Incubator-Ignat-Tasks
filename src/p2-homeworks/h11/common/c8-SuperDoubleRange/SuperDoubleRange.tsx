import React, {ChangeEvent} from "react"
import Slider from "@material-ui/core/Slider"
import style from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    value?: Array<number>
    onChangeRange?: (value: number | number[]) => void
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value,
        onChangeRange
    }
) => {

    const handleChangeSlider = (event: ChangeEvent<{}>, value: number | number[]): void => {
        if (onChangeRange)
            onChangeRange(value)
    }

    return (
        <div className={style.sliderHW11Style}>
            <Slider
                value={value}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )
}