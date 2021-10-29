export enum fieldsNames {
    NAME="NAME",
    AGE="AGE"
}
export interface IPersonData {
    name: string
    age: string
}

export interface IChildData {
    name: string
    age: string
    id: number
} 


export interface IData {
    personalData: IPersonData
    childrenData: IChildData[]
}

export enum IDataActionTypes {
    ADD_DATA='ADD_DATA',
    RESET_DATA='RESET_DATA'
}

interface IAddDataAction {
    type: IDataActionTypes.ADD_DATA
    payload: IData
}

interface IResetDataAction {
    type: IDataActionTypes.RESET_DATA
}

export type IDataAction = IAddDataAction | IResetDataAction