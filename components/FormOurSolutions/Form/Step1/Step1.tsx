import React from "react";
import { Controller } from "react-hook-form";
import Button from "../Button";
import { areas } from "../areas";

interface Step1Props {
  control: any;
  onNextStep: (value: number) => void;
  errors: any;
  textButton: string;
}

const Step1 = ({ control, onNextStep, errors, textButton }: Step1Props) => {
  return (
    <div>
      <div className="mb-[10px] tablet:mb-[15px] relative">
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <input
              className="bg-neutral-100 w-[100%] focus-visible:outline-none h-[39.62px] tablet:h-[56px] first-line:text-skin-variation-light placeholder:text-skin-variation-light 
              px-[16px] placeholder:font-archivo font-archivo placeholder:text-[11.31px] text-[11.31px] 
              placeholder:leading-[16.97px] leading-[16.97px] placeholder:font-normal font-normal
              tablet:placeholder:text-4 tablet:text-4 tablet:placeholder:leading-[24px]"
              placeholder="Empresa"
              {...field}
            />
          )}
        />
        {errors.company?.message && (
          <span className="text-red-700 mt-1 text-[11.31px] tablet:text-[12px] absolute left-0 bottom-[-15px]">
            {errors.company?.message}
          </span>
        )}
      </div>

      <div className="mb-[10px] tablet:mb-[15px] relative">
        <div className="relative">
          <div
            className='before:absolute before:content-[""] before:top-1/2 before:border-t-[1px] before:border-neutral-300 before:w-[6px] before:right-[20px] before:transform before:rotate-45
          after:absolute after:content-[""] after:top-1/2 after:border-t-[1px] after:border-border-neutral-300 after:w-[6px] after:right-[16px] after:transform after:rotate-50'
          >
            <Controller
              name="area"
              control={control}
              render={({ field }) => (
                <select
                  className="bg-neutral-100 cursor-pointer appearance-none w-[100%] focus-visible:outline-none h-[39.62px] tablet:h-[56px] text-skin-variation-light px-[16px] font-archivo text-[11.31px] 
                  leading-[16.97px] font-normal tablet:text-4 tablet:leading-[24px]"
                  {...field}
                  value={field.value || "option1"}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option
                    className="text-skin-variation-light font-archivo text-[11.31px] leading-[16.97px] font-normal tablet:text-4 tablet:leading-[24px]"
                    value="option1"
                    hidden
                  >
                    Selecione sua área / cargo.
                  </option>
                  {areas.map((item, index) => {
                    return (
                      <option
                        key={index}
                        className="text-skin-variation-light font-archivo text-[11.31px] leading-[16.97px] font-normal tablet:text-4 tablet:leading-[24px]"
                        value={item}
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </div>
        </div>
        {errors.area?.message && (
          <span className="text-red-700 mt-1 text-[11.31px] tablet:text-[12px] absolute left-0 bottom-[-15px]">
            {errors.area?.message}
          </span>
        )}
      </div>

      {/* <div className='mb-[10px] tablet:mb-[15px] relative'>
        <div className='relative'>
          <div className='before:absolute before:content-[""] before:top-1/2 before:border-t-[1px] before:border-neutral-300 before:w-[6px] before:right-[20px] before:transform before:rotate-45
          after:absolute after:content-[""] after:top-1/2 after:border-t-[1px] after:border-border-neutral-300 after:w-[6px] after:right-[16px] after:transform after:rotate-50'
          >
            <Controller
              name="office"
              control={control}
              render={({ field }) => (
                <select className='bg-neutral-100 cursor-pointer appearance-none w-[100%] focus-visible:outline-none h-[39.62px] tablet:h-[56px] text-skin-variation-light px-[16px] font-archivo text-[11.31px] 
              leading-[16.97px] font-normal tablet:text-4 tablet:leading-[24px]'
                  {...field}
                  value={field.value || "option1"}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option className='text-skin-variation-light font-archivo text-[11.31px] leading-[16.97px] font-normal tablet:text-4 tablet:leading-[24px]'
                    value="option1" hidden
                  >
                    Selecione seu cargo
                  </option>
                  {areas.map((item, index) => {
                    return (
                      <option
                        key={index}
                        className='text-skin-variation-light font-archivo text-[11.31px] leading-[16.97px] font-normal tablet:text-4 tablet:leading-[24px]'
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
        {errors.office?.message && (
          <span className='text-red-700 mt-1 text-[11.31px] tablet:text-[12px] absolute left-0 bottom-[-15px]'>
            {errors.office?.message}
          </span>
        )}
      </div> */}

      <Button
        message={textButton}
        type="submit"
        onNextStep={() => onNextStep(2)}
      />
    </div>
  );
};

export default Step1;
