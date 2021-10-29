import cl from './PersonInfo.module.scss';
import { FC } from 'react';

interface IPersonInfoProps {
    name: string
    age: string
    isBackgrounded?: boolean
}

const PersonInfo:FC<IPersonInfoProps> = ({name, age, isBackgrounded}) => {

    const classes = [cl.personInfo]
    isBackgrounded && classes.push(cl.personInfo_backgrounded)

    return (
        <div className={classes.join(' ')}>
            <span>{name}, </span>
            <span>{age}</span>
        </div>
    );
};

export default PersonInfo; 