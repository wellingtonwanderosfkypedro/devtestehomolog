import Link from 'next/link'

import ChildItem from "./ChildItem";
import { MenuItem } from '@/typings/global';

interface RenderMenuItemProps {
    menuItem: MenuItem;
}

const RenderMenuItem: React.FC<RenderMenuItemProps> = ({ menuItem }) => {
    const url: string | undefined = menuItem?.path !== '#' ? menuItem?.path : undefined;
    return (
        <li className='min-w-[100%] tablet:min-w-[180px] desktop:min-w-[auto] desktop:ml-[40px]' 
            key={menuItem?.id}
        >
            {url ? (
                <Link className='flex text-theme-primary-500 font-rajdhani font-bold text-xl my-5 tablet:mt-0 desktop:mt-0'
                    href={url}
                >
                    {menuItem?.label}
                </Link>
            ) : (
                <span className='flex text-theme-primary-500 font-rajdhani font-bold text-xl my-5 tablet:mt-0 desktop:mt-0'>
                    {menuItem?.label}
                </span>
            )}
            {menuItem?.childItems && (
                <ul>{menuItem?.childItems?.edges?.map((childItem) => {
                    return (
                        <ChildItem 
                            key={childItem?.node?.id} 
                            childItem={childItem}
                        />
                    )
                })}
                </ul>
            )}
        </li>
    )
};

export default RenderMenuItem