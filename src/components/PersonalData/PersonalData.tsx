import React, { FC } from 'react';
import { fieldsNames, IPersonData } from '../../types';
import TextInput from '../UI/TextInput/TextInput';
import cl from './PersonalData.module.scss';

interface IPersonalDataProps {
    data: IPersonData
    setData: (d:IPersonData)=> void
}

const PersonalData:FC<IPersonalDataProps> = ({data, setData}) => {
    

    function changeHandler(e:React.ChangeEvent<HTMLInputElement>) {
        const target = e.target
        const value = target.value
        switch (target.name) {
            case fieldsNames.NAME:
                setData({...data, name: value})
                break
            case fieldsNames.AGE:
                setData({...data, age: value})
                break
        }
        
    }

    return (
        <section className={cl.personalData}>
            <h2>Персональные данные</h2>
            <div>
                <TextInput                     
                    inputLabel="Имя"
                    type = "text"
                    name={fieldsNames.NAME}
                    value={data.name}
                    onChange={changeHandler}
                />
                <TextInput 
                    inputLabel="Возраст"
                    type = "number"
                    name={fieldsNames.AGE}
                    value={data.age}
                    onChange={changeHandler}
                />
            </div>
        </section>
    );
};

export default PersonalData;