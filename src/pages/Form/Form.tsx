import cl from './form.module.scss';
import PersonalData from '../../components/PersonalData/PersonalData';
import Button from '../../components/UI/Button/Button';
import ChildrenData from '../../components/ChildrenData/ChildrenData';
import React, { useLayoutEffect, useState } from 'react';
import { fieldsNames, IChildData, IData, IDataActionTypes, IPersonData } from '../../types'; 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addUniqueId } from '../../utils';

const Form = () => {
    const [personalData, setPersonalData] = useState<IPersonData>({name: '', age:''});
    const [childrenData, setChildrenData] = useState<IChildData[]>([]);

    const dispatch = useDispatch()
    const router = useHistory()

    useLayoutEffect(()=> {
        const savedData = sessionStorage.getItem('data')
        if (savedData!==null) {
            const parsedSavedData: IData = JSON.parse(savedData)
            setPersonalData(parsedSavedData.personalData)
            setChildrenData(parsedSavedData.childrenData)
        }
    },[])

    function submitHandler(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch({type: IDataActionTypes.ADD_DATA, payload: {
            personalData,childrenData
        }})
        router.push('/preview')
    }

    function resetFormHandler () {
        setPersonalData({name: '', age:''})
        setChildrenData([])
        dispatch({type: IDataActionTypes.RESET_DATA})
    }   

    function onPersonalDataInputsChange(e:React.ChangeEvent<HTMLInputElement>) {
        const target = e.target
        const value = target.value
        switch (target.name) {
            case fieldsNames.NAME:
                setPersonalData({...personalData, name: value})
                break
            case fieldsNames.AGE:
                setPersonalData({...personalData, age: value})
                break
        }  
    }

    function onChildrenDataInputsChange(e:React.ChangeEvent<HTMLInputElement>, index: number) {
        const target = e.target
        const value = target.value 
        switch (target.name) {
            case fieldsNames.NAME:
                const dataWithNewName = [...childrenData];
                dataWithNewName[index].name = value
                setChildrenData(dataWithNewName)
                break
            case fieldsNames.AGE:
                const dataWithNewAge = [...childrenData];
                dataWithNewAge[index].age = value
                setChildrenData(dataWithNewAge)
                break
        } 
    }

    function addChildHandler() {
        if (childrenData.length < 5) {
            const newData = [...childrenData]
            newData.push({name:'', age:'', id: addUniqueId(childrenData)})
            setChildrenData(newData)
        }
    }

    function deleteChildHandler(index:number) {
        const newData = childrenData.filter((element, elementIndex)=> elementIndex !==index);
        setChildrenData(newData)
    }
    
    return (        
        <form className={cl.form} onSubmit={submitHandler}>
            <PersonalData 
                data={personalData} 
                onInputChange={onPersonalDataInputsChange} 
            />
            <ChildrenData 
                data={childrenData} 
                onInputChange={onChildrenDataInputsChange}
                addChildHandler={addChildHandler}
                deleteChildHandler={deleteChildHandler}
            />
            <div className={cl.form__buttons}>
                <Button 
                    type="submit" 
                    buttonLabel="Сохранить" 
                    isBackgroundedButton={true} 
                />
                <Button 
                    type="reset" 
                    buttonLabel="Очистить" 
                    onClick={resetFormHandler} 
                />
            </div>            
        </form>
    );
};

export default Form;  