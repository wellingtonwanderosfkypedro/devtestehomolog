import Form from "../FormOurSolutions/Form/Form"
import TextArea from "../FormOurSolutions/TextArea/TextArea"

const FormAnalyticalSolutions = () => {
    return (
        <div className={`bg-banner-form-solutions bg-no-repeat w-[100%] bg-[length:100%_100%] desktop:h-[692px]`}>
            <div className="flex flex-wrap justify-center gap-[30px] items-center mx-6 py-8 tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] lg:px-24 laptop:flex-nowrap desktop:justify-between laptop:gap-6 laptop:pt-[60px] maxDesktop:max-w-[1440px]">
                <TextArea
                    message3={
                        <span className="text-white text-[22px] font-rajdhani font-semibold leading-[27.1px] tablet:text-[48px] tablet:leading-[60px]">
                            Soluções analíticas disponíveis em plataforma e APIs para você tomar <strong className="font-bold">decisões ainda mais estratégicas.</strong>
                        </span>
                    }
                />
                <Form />
            </div>
        </div>
    )
}

export default FormAnalyticalSolutions