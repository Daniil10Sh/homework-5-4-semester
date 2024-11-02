const formDataStorage = {};
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault(); 
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  formDataStorage.name = formData.name;
  formDataStorage.email = formData.email;
  formDataStorage.message = formData.message;
  document.getElementById("responseMessage").textContent = "Форма успішно відправлена. Дякуємо за зворотний зв'язок!";
  document.getElementById("contactForm").reset();
});
