interface ButtonProps {
    message: string;
    type: "button" | "submit" | "reset" | undefined;
    onNextStep?: () => void;
}

const Button: React.FC<ButtonProps> = ({message, type, onNextStep}) => {
    return (
        <button className='bg-theme-primary-500 flex justify-center font-rajdhani text-[11.31px] font-semibold text-skin-primary w-[100%] pt-[11.31px] pb-[11.31px] 
            mt-4 border border-solid border-theme-primary-500 tablet:text-theme-primary-500 tablet:hover:bg-theme-primary-500 tablet:hover:transition-all tablet:hover:text-skin-primary tablet:text-4 
            tablet:pt-4 tablet:pb-4 tablet:bg-skin-default'
            type={type}
            onClick={() => onNextStep ? onNextStep() : undefined}
        >
            {message}
        </button>
    )
}

export default Button;