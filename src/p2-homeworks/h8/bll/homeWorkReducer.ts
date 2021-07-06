import {PeopleType} from "../HW8"

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionsType): any => {
    switch (action.type) {
        case "sort": {
            let copyState = [...state]
            if (action.payload === "up") {
                copyState.sort((a, b) => {
                    switch (a.name > b.name) {
                        case true:
                            return 1
                        case false:
                            return -1
                        default:
                            return 0
                    }
                })
                return copyState
            } else if (action.payload === "down") {
                copyState.sort((a, b) => {
                    switch (a.name > b.name) {
                        case true:
                            return -1
                        case false:
                            return 1
                        default:
                            return 0
                    }
                })
                return copyState
            } else
                return state
        }
        case "check": {
            return state.filter(item => item.age >= 18)
        }
        default:
            return state
    }
}

type SortActionType = {
    type: "sort"
    payload: "up" | "down"
}
type CheckActionType = {
    type: "check"
    payload: 18
}
type ActionsType = SortActionType | CheckActionType