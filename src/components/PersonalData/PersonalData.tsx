import React, { FC } from 'react';
import { fieldsNames, IPersonData } from '../../types';
import TextInput from '../UI/TextInput/TextInput';
import cl from './PersonalData.module.scss';

interface IPersonalDataProps {
    data: IPersonData
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

const PersonalData:FC<IPersonalDataProps> = ({data, onInputChange}) => {  
    
    return (
        <section className={cl.personalData}>
            <h2>Персональные данные</h2>
            <div>
                <TextInput                     
                    inputLabel="Имя"
                    type = "text"
                    name={fieldsNames.NAME}
                    value={data.name}
                    onChange={onInputChange}
                />
                <TextInput 
                    inputLabel="Возраст"
                    type = "number"
                    name={fieldsNames.AGE}
                    value={data.age}
                    onChange={onInputChange}
                />
            </div>
        </section>
    );
};

export default PersonalData;