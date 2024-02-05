import { MenuItem } from '@/typings/global';
import React from 'react';
import BackToTopButton from './BackToTopButton/BackToTopButton';
import CopyWritting from './CopyWritting/CopyWritting';
import InformativeContent from './InformativeContent/InformativeContent';
import RenderMenuItem from './Menu/RenderMenuItem';
import Summary from './Summary/Summary';
import { mockData } from './mockData';


const Footer: React.FC = () => {
  return (
    <footer className='bg-white'>
      <section className='pb-8 pt-12 laptop:pb-20'>
        <div className='relative flex flex-wrap mx-6 gap-[20px] tablet:gap-[16px] tablet:flex-nowrap tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] laptop:px-24 desktop:pr-12 maxDesktop:max-w-[1440px] '>
          <BackToTopButton />
          <InformativeContent />
          <ul className='flex flex-wrap w-[100%] justify-between my-auto tablet:gap-y-10 tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[1085px] desktop:gap-y-0 desktop:flex-nowrap '>
            {mockData.footerMenus.edges?.map((menuItem: MenuItem) => {
              return (
                <RenderMenuItem
                  key={menuItem?.id}
                  menuItem={menuItem}
                />
              )
            })}
          </ul>
        </div>
      </section>
      <section>
        <Summary />
        <CopyWritting />
      </section>
    </footer>
  );
};

export default Footer;