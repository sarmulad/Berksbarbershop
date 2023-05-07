var validEmailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;

const validation = {
  isRequiredString: { validate: (v) => v?.trim()?.length > 0, required: true },
  isRequiredEmail: {
    validate: (v) => v?.trim()?.length > 0 && validEmailRegex.test(v),
    required: true,
  },
};

export default validation;
