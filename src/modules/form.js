const form = () => {
  const textInputs = document.querySelectorAll(
    'form input[type="text"]:not([name="user_name"]):not([name="user_message"]), form input:not([type]):not([name="user_name"]):not([name="user_message"])',
  );
  const emailInputs = document.querySelectorAll('form input[type="email"]');
  const telInputs = document.querySelectorAll(
    'form input[type="tel"]:not([name="user_phone"])',
  );
  const userNameInputs = document.querySelectorAll('form [name="user_name"]');
  const userPhoneInputs = document.querySelectorAll('form [name="user_phone"]');
  const userMessageInputs = document.querySelectorAll(
    'form [name="user_message"]',
  );
  const closedInputs = [
    ...userNameInputs,
    ...userPhoneInputs,
    ...userMessageInputs,
  ];

  const cleanClosedInputs = () => {
    userNameInputs.forEach((input) => {
      input.value = input.value.replace(/[^А-Яа-яЁё\s]/g, "");
    });
    userPhoneInputs.forEach((input) => {
      input.value = input.value.replace(/[^0-9+()\-]/g, "");
    });
    userMessageInputs.forEach((input) => {
      input.value = input.value.replace(/[^А-Яа-яЁё0-9\s\p{P}]/gu, "");
    });
  };

  const squareInput = document.querySelectorAll("#calc .calc-square");
  const countInput = document.querySelectorAll("#calc .calc-count");
  const dayInput = document.querySelectorAll("#calc .calc-day");

  textInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^А-Яа-яЁё -]/g, "");
    });
  });

  emailInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^A-Za-z0-9@\-._!~*']/g, "");
    });
  });

  telInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9()-]/g, "");
    });
  });

  closedInputs.forEach((input) => {
    input.addEventListener("input", cleanClosedInputs);
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", cleanClosedInputs);
  });

  [squareInput, countInput, dayInput].forEach((inputs) => {
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, "");
      });
    });
  });
};

export default form;
