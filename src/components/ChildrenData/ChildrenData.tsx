import React, { FC } from 'react';
import { fieldsNames, IChildData } from '../../types';
import { addUniqueId } from '../../utils';
import Child from '../Child/Child';
import Button from '../UI/Button/Button';
import cl from './childrenData.module.scss';

interface IChildrenDataProps {
    data: IChildData[]
    setData: (d:IChildData[])=> void
}

const ChildrenData:FC<IChildrenDataProps> = ({data, setData}) => {

    function changeHandler(e:React.ChangeEvent<HTMLInputElement>, index: number) {
        const target = e.target
        const value = target.value 
        switch (target.name) {
            case fieldsNames.NAME:
                const dataWithNewName = [...data];
                dataWithNewName[index].name = value
                setData(dataWithNewName)
                break
            case fieldsNames.AGE:
                const dataWithNewAge = [...data];
                dataWithNewAge[index].age = value
                setData(dataWithNewAge)
                break
        }       
    }

    function addChildHandler() {
        if (data.length < 5) {
            const newData = [...data]
            newData.push({name:'', age:'', id: addUniqueId(data)})
            setData(newData)
        }
    }

    function deleteChildHandler(index:number) {
        const newData = data.filter((element, elementIndex)=> elementIndex !==index);
        setData(newData)
    }

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
                                    changeHandler={(e)=>changeHandler(e,index)}
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