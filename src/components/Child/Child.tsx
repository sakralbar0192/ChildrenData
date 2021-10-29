import cl from './child.module.scss';
import Button from '../UI/Button/Button';
import TextInput from '../UI/TextInput/TextInput';
import { fieldsNames, IPersonData } from '../../types';
import { FC } from 'react';

interface IChildrenProps {
    child: IPersonData
    index: number
    changeHandler:(e:React.ChangeEvent<HTMLInputElement>, index?:number)=> void
    deleteChildHandler: (index:number)=> void
}

const Child:FC<IChildrenProps> = ({child, index,changeHandler, deleteChildHandler}) => {
    return (
        <div className={cl.child}>
            <TextInput 
                inputLabel="Имя" 
                type="text" 
                name={fieldsNames.NAME} 
                value={child.name} 
                onChange={(e)=>changeHandler(e,index)} 
            />
            <TextInput 
                inputLabel="Возраст" 
                type="number"
                name={fieldsNames.AGE}
                value={child.age}
                onChange={(e)=>changeHandler(e,index)}
            />
            <Button type="button" buttonLabel="Удалить" onClick={()=> deleteChildHandler(index)} />
        </div>
    );
};

export default Child; 