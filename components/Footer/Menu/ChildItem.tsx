import Link from 'next/link'

import { ChildItem } from '@/typings/global';

interface ChildItemProps {
    childItem: ChildItem;
}
const ChildItem: React.FC<ChildItemProps> = ({ childItem }) => (
    <li className='my-3 desktop:whitespace-nowrap last:desktop:whitespace-normal' key={childItem?.node?.id}>
        <Link className='text-gray-200 hover:text-blue-500 text-[18.86px] font-roboto font-normal tablet:text-[18px] tablet:leading-[28.8px]' 
            href={childItem?.node?.path && childItem?.node?.path}
        >
            {childItem?.node?.label}
        </Link>
    </li>
);

export default ChildItem