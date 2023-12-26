const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

document.addEventListener("DOMContentLoaded", renderPage);

form.addEventListener("input", (event) => {
  
    const { email, message } = event.currentTarget.elements;
    const userData = {
        email: email.value.trim(),
        message: message.value.trim(),
        };
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
    
  });
  
  form.addEventListener('submit',  (event)=> {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;
    if (email.value === "" || message.value === "") {
      return;
    } else {
      const userData = {
        email: email.value.trim(),
        message: message.value.trim(),
      };
      console.log(userData);
      
    event.currentTarget.reset();
    localStorage.removeItem(localStorageKey);
    }

  });

function renderPage() {
  const lsData = JSON.parse(localStorage.getItem(localStorageKey));
  if (lsData) {
    form.email.value = lsData.email;
    form.message.value = lsData.message ;
     } 
};


