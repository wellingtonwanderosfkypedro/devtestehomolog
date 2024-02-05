interface ButtonProps {
    message: string;
    type: "button" | "submit" | "reset" | undefined;
    onNextStep?: () => void;
}

const Button: React.FC<ButtonProps> = ({message, type, onNextStep}) => {
    return (
        <button className='bg-blue-500 flex justify-center font-rajdhani text-[11.31px] font-semibold text-white w-[100%] pt-[11.31px] pb-[11.31px] 
            mt-4 border border-solid border-blue-500 tablet:text-blue-500 tablet:hover:bg-blue-500 tablet:hover:transition-all tablet:hover:text-white tablet:text-[16px] 
            tablet:pt-4 tablet:pb-4 tablet:bg-white'
            type={type}
            onClick={() => onNextStep ? onNextStep() : undefined}
        >
            {message}
        </button>
    )
}

export default Button;