import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import { Controller, useForm } from "react-hook-form";
import validation from "utils/validation";
import { Input } from "components/inputs";
import { submitForm } from "utils/functions";

const defaultValues = {
  name: "",
  phone: "",
  email: "",
};

const BeginJourney = ({ program }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    submitForm("begin-journey", { ...data, program }, () =>
      reset(defaultValues)
    );
  };

  return (
    <div className="mx-auto max-w-largest">
      <h5
        className={clsx(
          texts.berk_h5_bold,
          "text-berk-white text-center mb-[57px] xl:mb-8 xl:text-[24px] xl:leading-[30px]"
        )}
      >
        Begin your Journey
      </h5>
      <form
        method="POST"
        name="begin-journey"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="begin-journey" />
        <div className="flex flex-col space-y-[23px] justify-center items-center">
          <Controller
            control={control}
            rules={validation.isRequiredString}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                hasError={!!errors.name}
                placeholder="Name"
                name="name"
                className={"max-w-[635px] w-full"}
              />
            )}
          />
          <Controller
            control={control}
            rules={validation.isRequiredString}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                hasError={!!errors.phone}
                placeholder="Phone"
                name="phone"
                className={"max-w-[635px] w-full"}
              />
            )}
          />
          <Controller
            control={control}
            rules={validation.isRequiredEmail}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                hasError={!!errors.email}
                placeholder="Email"
                className={"max-w-[635px] w-full"}
                name="email"
              />
            )}
          />

          <div className="mt-[23px] mb-[46px] xl:mb-4 mx-12">
            <p className="text-berk-blue text-[10px] leading-6 text-center max-w-[654px] xl:mx-auto">
              *By submitting my number above, I agree to receive calls/SMS/text
              messages (data rates may apply) and/or prerecorded message from
              Berks barber school or its subsidiaries with marketing offers and
              opportunities of interest.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mb-[77.98px] bg-berk-red py-[12px] w-[180px] px-[34px] rounded-[16.68px] text-white text-[16px] leading-[16.68px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BeginJourney;
