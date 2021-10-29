import React, { FC } from 'react';
import { IChildData } from '../../types';
import Child from '../Child/Child';
import Button from '../UI/Button/Button';
import cl from './childrenData.module.scss';

interface IChildrenDataProps {
    data: IChildData[]
    onInputChange: (e:React.ChangeEvent<HTMLInputElement>, index: number)=> void
    addChildHandler: ()=> void
    deleteChildHandler: (index:number) => void
}

const ChildrenData:FC<IChildrenDataProps> = ({data, onInputChange, addChildHandler, deleteChildHandler}) => { 

    return (
        <section className={cl.childrenData}>
            <div className={cl.childrenData__header}>
                <h2>Дети (макс. 5)</h2>
                {data.length<5
                    ?   <Button type="button" buttonLabel="Добавить ребенка" isBorderedButton={true} isButtonWithPlus={true} onClick={addChildHandler} />
                    :   <div></div>
                }                                
            </div>  
            <div>
                    {data.map((child, index) => {
                        return (
                            <div key={child.id} className={cl.childrenData__childWrapper}>
                                <Child 
                                    child={child} 
                                    index={index} 
                                    changeHandler={(e)=>onInputChange(e,index)}
                                    deleteChildHandler={()=>deleteChildHandler(index)} 
                                />
                            </div>
                        )                        
                    })}
            </div>            
        </section>
    );
};

export default ChildrenData;