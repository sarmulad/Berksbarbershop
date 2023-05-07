import { Input, Select } from "components/inputs";
import { Wrapper } from "components/navigation";
import { PageHeader } from "components/utils";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import validation from "utils/validation";
import largeMap from "assets/images/large-map.png";
import { contact, programs } from "utils/constants";
import { submitForm } from "utils/functions";

const defaultValues = {
  name: "",
  email: "",
  interested_program: "",
  address: "",
  city: "",
  state: "",
  zip_code: "",
};

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) =>
    submitForm("contact", data, () => reset(defaultValues));

  return (
    <Wrapper className={"bg-berk-white relative"}>
      <div className="hidden xl:block absolute animate__animated animate__fadeIn right-0 top-[25vh] h-[587px] w-[182px] bg-berk-red" />
      <div className="mt-[9px] relative">
        <PageHeader black_text={"Contact"} gold_text={"Us"} />
        <div className="max-w-largest mx-auto flex flex-col justify-center xl:flex-row xl:space-x-[97px]">
          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-[29px] mt-11 xl:mt-[65px] px-5 xl:w-[558px]"
          >
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
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  required
                />
              )}
            />
            <Controller
              control={control}
              rules={validation.isRequiredString}
              name="interested_program"
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  options={programs.map((prog) => ({
                    label: prog.name,
                    value: prog.name,
                  }))}
                  placeholder={"What program are you interested in?"}
                  hasError={!!errors.interested_program}
                  name="interested_program"
                />
              )}
            />
            <Controller
              control={control}
              rules={validation.isRequiredString}
              name="address"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  hasError={!!errors.address}
                  placeholder="Address"
                  name="address"
                />
              )}
            />
            <Controller
              control={control}
              rules={validation.isRequiredString}
              name="city"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  hasError={!!errors.city}
                  placeholder="City"
                  name="city"
                />
              )}
            />
            <Controller
              control={control}
              rules={validation.isRequiredString}
              name="state"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  hasError={!!errors.state}
                  placeholder="State"
                  name="state"
                />
              )}
            />
            <Controller
              control={control}
              rules={validation.isRequiredString}
              name="zip_code"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  hasError={!!errors.zip_code}
                  placeholder="Zip code"
                />
              )}
            />
            <div className="pt-[64px] pb-[73.98px] xl:pb-[130px] xl:pt-[29px] xl:justify-start flex items-center justify-center">
              <button
                type="submit"
                className="bg-berk-red py-[10px] px-[34px] rounded-[16.68px] text-white text-[13.34px] leading-[16.68px]"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="px-[50px] flex items-center justify-center pb-[75.64px] xl:px-0">
            <a href={contact.location} rel="noreferrer" target="_blank">
              <img
                src={largeMap}
                alt="map"
                className="w-[290px] h-[290px] xl:w-auto xl:h-auto animate__animated animate__fadeInRight"
              />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
