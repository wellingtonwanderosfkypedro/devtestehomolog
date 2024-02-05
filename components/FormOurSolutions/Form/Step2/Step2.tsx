import React from 'react';
import { Controller } from 'react-hook-form';
import { areas } from '../areas';

interface Step2Props {
  control: any;
  errors: any;
}

const Step2: React.FC<Step2Props> = ({ control, errors }) => {
  return (
    <div>
      <div className='mb-[10px] tablet:mb-[15px] relative'>
        <Controller
          name="corporateEmail"
          control={control}
          render={({ field }) => (
            <input className='bg-neutral-100 w-[100%] focus-visible:outline-none h-[39.62px] tablet:h-[56px] text-neutral-300 placeholder:text-neutral-300 
              px-[16px] placeholder:font-archivo font-archivo placeholder:text-[11.31px] text-[11.31px] 
              placeholder:leading-[16.97px] leading-[16.97px] placeholder:font-normal font-normal
              tablet:placeholder:text-[16px] tablet:text-[16px] tablet:placeholder:leading-[24px]'
              placeholder='Email Corporativo' {...field} />
          )}
        />
        {errors.corporateEmail?.message && (
          <span className='text-red-700 mt-1 text-[11.31px] tablet:text-[12px] absolute left-0 bottom-[-15px]'>
            {errors.corporateEmail?.message}
          </span>
        )}
      </div>

      <div className='mb-[10px] tablet:mb-[15px] relative'>
        <Controller
          name="demand"
          control={control}
          render={({ field }) => (
            <input className='bg-neutral-100 w-[100%] focus-visible:outline-none h-[39.62px] tablet:h-[56px] text-neutral-300 placeholder:text-neutral-300 
              px-[16px] placeholder:font-archivo font-archivo placeholder:text-[11.31px] text-[11.31px] 
              placeholder:leading-[16.97px] leading-[16.97px] placeholder:font-normal font-normal
              tablet:placeholder:text-[16px] tablet:text-[16px] tablet:placeholder:leading-[24px]'
              placeholder='Comente sua demanda' {...field}
            />
          )}
        />
        {errors.demand?.message && (
          <span className='text-red-700 mt-1 text-[11.31px] tablet:text-[12px] absolute left-0 bottom-[-15px]'>
            {errors.demand?.message}
          </span>
        )}
      </div>

      <div className='mb-[10px] tablet:mb-[15px] relative'>
        <div className='relative'>
          <div className='before:absolute before:content-[""] before:top-1/2 before:border-t-[1px] before:border-neutral-300 before:w-[6px] before:right-[20px] before:transform before:rotate-45
          after:absolute after:content-[""] after:top-1/2 after:border-t-[1px] after:border-border-neutral-300 after:w-[6px] after:right-[16px] after:transform after:rotate-50'
          >
            <Controller
              name="helpAreas"
              control={control}
              render={({ field }) => (
                <select className='bg-neutral-100 cursor-pointer appearance-none w-[100%] focus-visible:outline-none h-[39.62px] tablet:h-[56px] text-neutral-300 px-[16px] font-archivo text-[11.31px] 
              leading-[16.97px] font-normal tablet:text-[16px] tablet:leading-[24px]'
                  {...field}
                  value={field.value || "option1"}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option className='text-neutral-300 font-archivo text-[11.31px] leading-[16.97px] font-normal tablet:text-[16px] tablet:leading-[24px]'
                    value="option1" hidden
                  >
                    Em quais áreas podemos te ajudar?
                  </option>
                  {areas.map((item, index) => {
                    return (
                      <option
                        key={index}
                        className='text-neutral-300 font-archivo text-[11.31px] leading-[16.97px] font-normal tablet:text-[16px] tablet:leading-[24px]'
                        value={item}
                      >
                        {item}
                      </option>
                    )
                  })}
                </select>
              )}
            />
          </div>
        </div>
        {errors.helpAreas?.message && (
          <span className='text-red-700 mt-1 text-[11.31px] tablet:text-[12px] absolute left-0 bottom-[-15px]'>
            {errors.helpAreas?.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Step2;
