import Image from 'next/image'

import Divider from "@/assets/images/home/form/divider.svg";
import Step1 from "@/assets/images/home/form/step-1.svg";
import Step2 from "@/assets/images/home/form/step-2.svg";
import Step2Selected from "@/assets/images/home/form/step-2-selected.svg";
import StepConfirmed from "@/assets/images/home/form/step-confirmed.svg";

interface IdentifiesStepsProps {
    currentStep: number;
    onNextStep: (value: number) => void;
}

const IdentifiesSteps: React.FC<IdentifiesStepsProps> = ({ currentStep, onNextStep }) => {
    return (
        <div className="flex items-center justify-center gap-1">
            <button type="submit" onClick={() => onNextStep(1)}>
                {currentStep === 1 ? (
                    <Image
                        src={Step1}
                        width={19}
                        height={20}
                        alt="Divider"
                    />
                ) : (
                    <Image
                        src={StepConfirmed}
                        width={19}
                        height={20}
                        alt="StepConfirmed"
                    />
                )}
            </button>
            <Image
                src={Divider}
                width={24}
                height={1}
                alt="Divider"
            />
            <button type="submit" onClick={() => onNextStep(2)}>
                {currentStep === 1 ? (
                    <Image
                        src={Step2}
                        width={19}
                        height={20}
                        alt="Step2"
                    />
                ) : (
                    <Image
                        src={Step2Selected}
                        width={19}
                        height={20}
                        alt="Step2Selected"
                    />
                )}
            </button>
        </div>
    )
}

export default IdentifiesSteps