import cl from './button.module.scss';
import { FC } from "react";

interface IButtonProps {
    type: "button" | "submit" | "reset"
    buttonLabel: string
    isBorderedButton?: boolean
    isButtonWithPlus?: boolean
    isBackgroundedButton?: boolean 
    onClick?: ()=> void
}

const Button:FC<IButtonProps> = ({type, buttonLabel, isBorderedButton, isButtonWithPlus, isBackgroundedButton, onClick}) => {

    const classes = [cl.button]
    isBorderedButton && classes.push(cl.button_bordered)
    isButtonWithPlus && classes.push(cl.button_withPlus)
    isBackgroundedButton && classes.push(cl.button_backgrounded)
    
    return (
        <button 
        type={type}
            className={classes.join(' ')}
            onClick={onClick}    
        >
            {buttonLabel}
        </button>
    );
};

export default Button;