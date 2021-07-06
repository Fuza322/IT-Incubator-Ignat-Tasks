const initState: HW10StateType = {
    loading: false
}

type HW10StateType = {
    loading: boolean
}

export const loadingReducer = (state: HW10StateType = initState, action: LoadingActionType): HW10StateType => {
    switch (action.type) {
        case "LOADING-HW10": {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: "LOADING-HW10", loading: loading} as const
}

type LoadingActionType = ReturnType<typeof loadingAC>