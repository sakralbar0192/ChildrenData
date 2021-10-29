
import { combineReducers } from "redux";
import { dataReduser } from "./dataReduser";


export const rootReduser = combineReducers({
    data: dataReduser,
})

export type RootState = ReturnType<typeof rootReduser>