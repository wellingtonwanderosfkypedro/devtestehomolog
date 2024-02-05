interface TextAreaProps {
    message1?: any;
    message2?: any;
    message3?: any;
}

const TextArea = ({ message1, message2, message3 }: TextAreaProps) => {
    return (
        <div>
            {message1 && message2 && (
                <div className="mb-[30px] laptop:max-w-[557px] laptop:mb-[90px]">
                    <h2 className="text-white font-rajdhani font-semibold text-[34px] leading-[42px] tablet:text-[58px] tablet:leading-[72.5px]">
                        {message1}
                    </h2>
                    {message2}
                </div>
            )}
            {message3}
        </div>
    )
}

export default TextArea