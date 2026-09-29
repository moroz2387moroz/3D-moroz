const sendForm = ({ formId, elems = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо. Наш менеджер с Вами свяжется";

  const validate = (list) => {
    let success = true;
    // list.forEach((input) => {
    //   if (!input.classList.contains("success")) {
    //     success = false;
    //   }
    // });
    return validate;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      // return fetch("./server.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "aplication/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElems = form.querySelectorAll("input");

    const formData = new FormData(form);
    const formBody = {};
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    elems.forEach((el) => {
      const elem = document.getElementById(el.id);
      if (el.type === "block") {
        formBody[el.id] = elem.textContent;
      } else if (el.type === "input") {
        formBody[el.id] = elem.value;
      }
    });

    if (validate(formElems)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElems.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Напиши правильные данные!");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
