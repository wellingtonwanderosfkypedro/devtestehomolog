import IdentifiesSteps from "./IdentifiesSteps";

interface FormHeaderProps {
    currentStep: number;
    onNextStep: (value: number) => void;
}

const FormHeader: React.FC<FormHeaderProps> = ({ currentStep, onNextStep }) => {
    return (
        <div>
            <IdentifiesSteps currentStep={currentStep} onNextStep={onNextStep} />
            <h3 className='text-[16px] leading-[20px] text-black-300 pt-[20px] pb-[15px] tablet:pt-[10px] tablet:pb-[10px] font-archivo font-bold tablet:text-[24px] tablet:leading-[30px]'>
                {currentStep === 1 ? (
                    <>
                        Preencha o formulário e <strong className='text-orange-300'>conheça as nossas soluções!</strong>
                    </>
                ) : (
                    <>
                        Preencha o formulário e faça o <strong className='text-orange-300'>teste da plataforma da Neoway!</strong>
                    </>
                )}
            </h3>
        </div>
    )
}

export default FormHeader