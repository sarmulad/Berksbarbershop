import { DateSelector, Input, Select } from "components/inputs";
import { Wrapper } from "components/navigation";
import { PageHeader } from "components/utils";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { serviceMenuList } from "utils/constants";
import { submitForm } from "utils/functions";
import validation from "utils/validation";

const services = serviceMenuList.map((service) => ({
  value: service.title,
  label: service.title,
}));

const defaultValues = {
  first_name: "",
  last_name: "",
  cell_phone: "",
  email: "",
  service_type: "",
  schedule_date: "",
  comments: "",
};

const BookAppointment = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) =>
    submitForm("book-appointment", data, () => reset(defaultValues));

  return (
    <Wrapper className="bg-berk-white">
      <PageHeader black_text={"Book an"} gold_text={"Appointment"} />
      <div className="mt-[9px] max-w-largest mx-auto animate__animated animate__fadeIn">
        <form
          method="POST"
          name="book-appointment"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-11 px-5">
            <div className="flex flex-col xl:justify-center space-y-[29px] mb-[29px] xl:flex-row xl:space-y-0 xl:space-x-5">
              {/* first name */}
              <Controller
                control={control}
                rules={validation.isRequiredString}
                name="first_name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    hasError={!!errors.first_name}
                    placeholder="First Name"
                    name="first_name"
                    className={"xl:flex-1 xl:max-w-[482px] xl:flex-shrink-0"}
                  />
                )}
              />
              {/* last name */}
              <Controller
                control={control}
                rules={validation.isRequiredString}
                name="last_name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    name="last_name"
                    hasError={!!errors.last_name}
                    placeholder="Last Name"
                    className={"xl:flex-1 xl:max-w-[482px] xl:flex-shrink-0"}
                  />
                )}
              />
            </div>
            <div className="flex flex-col space-y-[29px] mb-[29px] justify-center xl:flex-row xl:space-y-0 xl:space-x-5">
              {/* cell phone */}
              <Controller
                control={control}
                rules={validation.isRequiredString}
                name="cell_phone"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    name="cell_phone"
                    onChange={onChange}
                    hasError={!!errors.cell_phone}
                    placeholder="Cell Phone"
                    className={"xl:flex-1 xl:max-w-[482px] xl:flex-shrink-0"}
                  />
                )}
              />
              {/* email */}
              <Controller
                control={control}
                rules={validation.isRequiredEmail}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    name="email"
                    onChange={onChange}
                    hasError={!!errors.email}
                    placeholder="E-Mail"
                    className={"xl:flex-1 xl:max-w-[482px] xl:flex-shrink-0"}
                  />
                )}
              />
            </div>
            <div className="flex flex-col space-y-[29px] mb-[29px] justify-center xl:flex-row xl:space-y-0 xl:space-x-5">
              {/* service type */}
              <Controller
                control={control}
                rules={validation.isRequiredString}
                name="service_type"
                render={({ field: { onChange, value } }) => (
                  <div
                    className={"xl:flex-1 xl:max-w-[482px] xl:flex-shrink-0"}
                  >
                    <Select
                      name="service_type"
                      options={services}
                      placeholder="Service Type"
                      hasError={!!errors.service_type}
                      onChange={onChange}
                    />
                  </div>
                )}
              />
              {/* schedule date */}

              <Controller
                control={control}
                rules={validation.isRequiredString}
                name="schedule_date"
                render={({ field: { onChange, value } }) => (
                  <div
                    className={"xl:flex-1 xl:max-w-[482px] xl:flex-shrink-0"}
                  >
                    <DateSelector
                      value={value ? new Date(value) : null}
                      hasError={!!errors.schedule_date}
                      onChange={(val) => onChange(val?.toISOString())}
                      placeholder={"Schedule Date"}
                      name="schedule_date"
                    />
                  </div>
                )}
              />
            </div>
            <div className="w-full flex xl:justify-center">
              {/* comments */}
              <Controller
                control={control}
                rules={validation.isRequiredString}
                name="comments"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    hasError={!!errors.comments}
                    placeholder="Comments"
                    isTextArea
                    className="flex-1 max-w-[984px]"
                    name="comments"
                  />
                )}
              />
            </div>
          </div>
          <div className="pt-[79px] pb-[73.96px] flex items-center justify-center">
            <button
              type="submit"
              className="bg-berk-red py-[10px] px-[34px] rounded-[16.68px] text-white text-[13.34px] leading-[16.68px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default BookAppointment;
