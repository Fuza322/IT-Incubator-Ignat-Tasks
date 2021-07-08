const initState: HW12StateType = {
    theme: "some"
}

type HW12StateType = {
    theme: string
}

export const themeReducer = (state: HW12StateType = initState, action: ChangeThemeActionType): HW12StateType => {
    switch (action.type) {
        case "CHANGE-THEME-HW12": {
            return {...state, theme: action.theme}
        }
        default:
            return state
    }
}

export const changeThemeAC = (theme: string) => {
    return {type: "CHANGE-THEME-HW12", theme: theme} as const
}

type ChangeThemeActionType = ReturnType<typeof changeThemeAC>