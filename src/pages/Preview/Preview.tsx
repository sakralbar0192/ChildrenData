import cl from './preview.module.scss';
import PersonInfo from '../../components/UI/PersonInfo/PersonInfo';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useLayoutEffect, useState } from 'react';
import { IData } from '../../types';

const Preview = () => {

    const enteredData = useTypedSelector(state=> state.data)

    const [data, setData] = useState<IData>(enteredData)

    useLayoutEffect(()=> {
        if (data.personalData.name === '') {
            const savedData = sessionStorage.getItem('data')
            if (savedData!==null) {
                const parsedSavedData: IData = JSON.parse(savedData)
                setData(parsedSavedData)
            } 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className={cl.preview}>
            <section>
                <h2>Персональные данные</h2>
                {data.personalData.name 
                    ?   <PersonInfo 
                            name={data.personalData.name}
                            age={data.personalData.age}
                        />
                    : <span>Вы пока не ввели данные о себе</span>
                } 
            </section>
            <section >
                <h2>Дети</h2>
                <div className={cl.preview__childrenList}>
                    {data.childrenData.length!==0
                        ?   data.childrenData.map(child=> {
                            if (child.name === '') {
                                return null
                            }                               
                            return (
                                <PersonInfo 
                                    key={child.id}
                                    name={child.name}
                                    age={child.age}
                                    isBackgrounded={true}
                                />
                            )
                        })
                        : <span>Вы пока не ввели данные о детях</span>
                    }
                </div>                 
            </section>
        </div>        
    );
};

export default Preview;