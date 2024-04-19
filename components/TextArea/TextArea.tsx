interface TextAreaProps {
    title?: string;
    sub_title?: string;
}

const TextArea = ({ title, sub_title }: TextAreaProps) => {
    return (
        <div className="max-w-screen-xl pb-8 mx-12 ml-12 lg:mt-24 lg:m-auto mt-9">
            <p className="text-orange-600 font-roboto text-3 font-semibold uppercase pb-4">{title}</p>
            <p className="font-rajdhani text-6 text-gray-500 font-bold lg:text-11 leading-7 lg:leading-[3.9rem]">
                {sub_title}
            </p>
        </div>
    )
}



export default TextArea