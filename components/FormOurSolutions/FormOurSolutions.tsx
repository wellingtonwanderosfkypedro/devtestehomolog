import Form from "./Form/Form"
import TextArea from "./TextArea/TextArea"

const FormOurSolutions = () => {
    return (
        <div className={`bg-banner-form bg-no-repeat w-[100%] bg-[length:100%_100%] desktop:h-[760px]`}>
            <div className="flex flex-wrap justify-center items-center pt-[120px]  mx-6 py-8 tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] lg:px-24 laptop:pt-[160px] laptop:flex-nowrap desktop:justify-between laptop:gap-6 maxDesktop:max-w-[1440px]">
                <TextArea
                    message1={
                    <>Somos o maior hub de <strong className='text-orange-300 laptop:flex laptop:w-[500px]'>inteligência analítica</strong> do Brasil.</>
                    }
                    message2={
                    <span className="text-white text-[12px] font-roboto font-normal leading-[18px] tablet:text-[18px] tablet:leading-[27px] laptop:flex laptop:w-[574px]">
                        Tenha acesso a soluções analíticas de Prevenção de Perdas, Mercado de Capitais e Marketing e Vendas disponíveis em plataformas e APIs.
                    </span>
                    }
                />
                <Form />
            </div>
        </div>
    )
}

export default FormOurSolutions