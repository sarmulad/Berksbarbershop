import { toast } from "react-hot-toast";

export const setProgramsVisible = (shouldBeVisible = true) => {
  const selector = ".desktop-program-links";
  const links = document.querySelector(selector);
  if (links) {
    if (shouldBeVisible) {
      links.classList.add("visible");
    } else {
      links.classList.remove("visible");
    }
  }
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const submitForm = (formName, data, resetter) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": formName, ...data }),
  })
    .then(() => {
      toast.success("Your entries have been submitted!");
      resetter();
    })
    .catch((error) => {
      console.log(error);
      toast.error("There was an error");
    });
};
