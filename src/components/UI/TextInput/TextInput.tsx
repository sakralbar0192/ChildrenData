import React, { FC } from 'react';
import { fieldsNames } from '../../../types';
import cl from './textInput.module.scss';

interface IInputProps {
    inputLabel: string    
    type: string
    name: string
    value?: string 
    onChange: (e:React.ChangeEvent<HTMLInputElement>, index?:number)=> void        
}

const TextInput:FC<IInputProps> = ({inputLabel, type, name, value, onChange}) => {


    function changeHandler (e:React.ChangeEvent<HTMLInputElement>) {
        const target = e.target
        let value = target.value
        if (target.value === '') {
            target.setCustomValidity('Поле не должно быть пустым!')
        }else {
            target.setCustomValidity('')
        }
        if (target.name === fieldsNames.AGE && parseInt(value) > 100) {
            target.setCustomValidity('Возраст не должен быть больше 100!')
        }else if (target.name === fieldsNames.NAME && value.length> 12) {
            target.setCustomValidity('Самым длинным именем считается женское имя Александрина, которое включает в себя 12 букв')        
        } else  {
            target.setCustomValidity('')
        }                 
        target.reportValidity()         
        onChange(e)
    }

    return (
        <label className={cl.textInput}>
            <span>{inputLabel}</span>
            <input 
                type={type} 
                name={name} 
                value={value!==undefined && value !== ''
                        ? value[0].toUpperCase() + value.slice(1)
                        : value
                    } 
                onChange={changeHandler} 
            />        
        </label>
        
    );
};

export default TextInput; 