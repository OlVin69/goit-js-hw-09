const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

document.addEventListener("DOMContentLoaded", renderPage);

form.addEventListener("input", (event) => {
  if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA") {
    const { email, message } = event.currentTarget.elements;
    const userData = {
        email: email.value.trim(),
        message: message.value.trim(),
        };
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
    }
  });
  
  form.addEventListener('submit',  (event)=> {
    event.preventDefault();
const { email, message } = event.currentTarget.elements;
const userData = {
        email: email.value.trim(),
        message: message.value.trim(),
      };
      console.log(userData);
      
    form.reset();
    localStorage.removeItem(localStorageKey);
  });

function renderPage() {
  const lsData = JSON.parse(localStorage.getItem(localStorageKey));
  if (lsData) {
    form.email.value = lsData.email;
    form.message.value = lsData.message ;
     } else {
     form.email.value = "";
     form.message.value = "";
  };
};


