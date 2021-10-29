import cl from './form.module.scss';
import PersonalData from '../../components/PersonalData/PersonalData';
import Button from '../../components/UI/Button/Button';
import ChildrenData from '../../components/ChildrenData/ChildrenData';
import React, { useLayoutEffect, useState } from 'react';
import { IChildData, IData, IDataActionTypes, IPersonData } from '../../types'; 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Form = () => {
    const [personalData, setPersonalData] = useState<IPersonData>({
        name: '', age:''
    })
    const [childrenData, setChildrenData] = useState<IChildData[]>([])

    const dispatch = useDispatch()
    const router=useHistory()

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
    
    return (        
        <form className={cl.form} onSubmit={submitHandler}>
            <PersonalData data={personalData} setData={setPersonalData} />
            <ChildrenData data={childrenData} setData={setChildrenData} />
            <div className={cl.form__buttons}>
                <Button type="submit" buttonLabel="Сохранить" isBackgroundedButton={true} />
                <Button type="reset" buttonLabel="Очистить" onClick={resetFormHandler} />
            </div>
            
        </form>
    );
};

export default Form;  