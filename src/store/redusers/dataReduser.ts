import { IData, IDataAction, IDataActionTypes } from "../../types"

const initialDataState: IData = {
    personalData: {
        name: '',
        age: ''
    }, 
    childrenData: []
}
    
export const dataReduser = (state= initialDataState, action: IDataAction): IData => {
    switch (action.type) {
        case IDataActionTypes.ADD_DATA: 
            sessionStorage.setItem('data', JSON.stringify(action.payload))
            return action.payload  
        case IDataActionTypes.RESET_DATA:
            sessionStorage.removeItem('data')  
            return initialDataState
        default: 
            return state
    }
}