
(function() {
  emailjs.init({
    publicKey: "Tj8ch3-_L-pzXUVMM"
  });
})();

const buttons = document.querySelectorAll(".coursebtn");
const contents = document.querySelectorAll(".content");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    buttons.forEach((b) => b.classList.remove("btnactive"));
    e.currentTarget.classList.add("btnactive");
    contents.forEach((c) => c.classList.remove("active"));
    const selected = document.getElementById(id);
    if (selected) selected.classList.add("active");
  });
});

const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity()) {
      sendEmail(form);
    }
    form.classList.add("was-validated");
  });
});

function sendEmail(form) {
  const params = {
    fullName: document.getElementById("fullName").value.trim(),
    dob: document.getElementById("age").value.trim(),
    gender: document.getElementById("gender").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("wnumber").value.trim(),
    address: document.getElementById("address").value.trim(),
    timezone: document.getElementById("timezone").value.trim(),
    consultMode: document.getElementById("consultMode").value.trim(),
    concern: document.getElementById("concern").value.trim(),
    medications: document.getElementById("medications").value.trim(),
    practices: document.getElementById("practices").value.trim(),
    courseDate: document.getElementById("CourseDates").value.trim(),
    refundPolicy: document.getElementById("checkDefault").checked ? "Agreed" : "Not Agreed",
  };

  const serviceID = "service_kiyxotg";
  const templateID = "template_rfemca6";

  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent to Juno Naturals Healing!");
      form.reset();
      form.classList.remove("was-validated");
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Message failed to send. Try again!");
    });
}
