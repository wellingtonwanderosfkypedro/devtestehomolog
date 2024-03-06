import IdentifiesSteps from "./IdentifiesSteps";

interface FormHeaderProps {
    currentStep: number;
    onNextStep: (value: number) => void;
    titleStep1: TitleStep1;
    titleStep2: TitleStep2;
}

type TitleStep1 = {
    title1: string;
    title2: string;
}

type TitleStep2 = {
    title1: string;
    title2: string;
}

const FormHeader = ({
    currentStep,
    onNextStep,
    titleStep1,
    titleStep2
}: FormHeaderProps) => {
    return (
        <>
            <IdentifiesSteps
                currentStep={currentStep}
                onNextStep={onNextStep}
            />
            <h3 className='text-[16px] leading-[20px] text-black-300 pt-[20px] pb-[15px] tablet:pt-[10px] tablet:pb-[10px] font-archivo font-bold tablet:text-[24px] tablet:leading-[30px]'>
                {currentStep === 1 ? (
                    <>
                        {titleStep1?.title1} {titleStep1?.title2 && (<strong className='text-orange-300'>{titleStep1?.title2}</strong>)}
                    </>
                ) : (
                    <>
                        {titleStep2?.title1} {titleStep2?.title2 && (<strong className='text-orange-300'>{titleStep2?.title2}</strong>)}
                    </>
                )}
            </h3>
        </>
    )
}

export default FormHeader