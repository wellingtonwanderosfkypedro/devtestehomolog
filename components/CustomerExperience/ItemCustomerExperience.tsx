import Image from 'next/image';
import { Customer } from "./CustomerCarousel"

interface ItemCustomerExperienceProps{
    customer: Customer;
    index: number;
}

const ItemCustomerExperience: React.FC<ItemCustomerExperienceProps> = ({customer, index}) => {
    return(
        <div className='bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-[387px] tablet:pt-[18px] tablet:h-[350px] tablet:w-[400px]'>
            <div className='tablet:mb-[30px]'>
                <Image src={customer.image} alt={`${index}`} />
            </div>
            <span className='text-[16px] font-medium leading-[25.6px] text-neutral-300'>“</span>
            <p className='text-[16px] font-medium leading-[25.6px] text-neutral-300'>{customer.text}</p>
        </div>
    )
}

export default ItemCustomerExperience