(function () {
  emailjs.init("zqUTWt_2j5FWGLG69"); 
})();

function sendEmailForm(event) {
  event.preventDefault();

  const activeForm = document.querySelector(".content.active");
  const prefix = activeForm.id === "consultation" ? "Consult" : "Course";

  const formData = {
    fullName: document.getElementById(`fullName${prefix}`).value.trim(),
    dob: document.getElementById(`dob${prefix}`).value.trim(),
    gender: document.getElementById(`gender${prefix}`).value.trim(),
    email: document.getElementById(`email${prefix}`).value.trim(),
    phone: document.getElementById(`wnumber${prefix}`).value.trim(),
    address: document.getElementById(`address${prefix}`).value.trim(),
    timezone: document.getElementById("timezone")?.value.trim() || "N/A",
    consultMode: document.getElementById("consultMode")?.value.trim() || "N/A",
    concern: document.getElementById("concern")?.value.trim() || "N/A",
    medications: document.getElementById("medications")?.value.trim() || "N/A",
    practices: document.getElementById("practices")?.value.trim() || "N/A",
    courseDate: document.getElementById("CourseDates")?.value.trim() || "N/A",
    refundPolicy: document.getElementById("refundPolicyCheck").checked
      ? "Agreed"
      : "Not Agreed",
  };

let selectedServices = [];
if (prefix === "Consult") {
  document.querySelectorAll('input[name="consultationService"]:checked').forEach((el) => {
    selectedServices.push(el.value);
  });
} else {
  document.querySelectorAll('input[name="courseService"]:checked').forEach((el) => {
    selectedServices.push(el.value);
  });
}

formData.selectedServices = selectedServices.length > 0
  ? selectedServices.join(", ")
  : "No service selected";



  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;


  if (!formData.fullName) {
    alert("Please enter your full name.");
    document.getElementById(`fullName${prefix}`).focus();
    return;
  }

  if (!formData.dob) {
    alert("Please select your Date of Birth.");
    document.getElementById(`dob${prefix}`).focus();
    return;
  }

  if (!formData.gender) {
    alert("Please select your gender.");
    document.getElementById(`gender${prefix}`).focus();
    return;
  }

  if (!formData.email || !emailPattern.test(formData.email)) {
    alert("Please enter a valid email address.");
    document.getElementById(`email${prefix}`).focus();
    return;
  }

  if (!formData.phone || !phonePattern.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    document.getElementById(`wnumber${prefix}`).focus();
    return;
  }

  if (!formData.address) {
    alert("Please enter your address.");
    document.getElementById(`address${prefix}`).focus();
    return;
  }

  if (activeForm.id === "consultation" && !formData.timezone) {
    alert("Please select your timezone.");
    document.getElementById("timezone").focus();
    return;
  }

  if (activeForm.id === "consultation" && !formData.consultMode) {
    alert("Please select consultation mode.");
    document.getElementById("consultMode").focus();
    return;
  }

  if (!formData.concern || formData.concern === "N/A") {
    alert("Please describe your concern or goal.");
    document.getElementById("concern")?.focus();
    return;
  }

  if (!formData.courseDate || formData.courseDate === "N/A") {
    alert("Please select a preferred date & time.");
    document.getElementById("CourseDates").focus();
    return;
  }

  if (formData.refundPolicy !== "Agreed") {
    alert("You must agree to the Cancellation & Refund Policy.");
    document.getElementById("refundPolicyCheck").focus();
    return;
  }

  console.log("Validated Data:", formData);

  const serviceID = "service_z4ao0v8";
  const templateID = "template_99kwujm";

  emailjs
    .send(serviceID, templateID, formData)
    .then(() => {
      alert("Your details have been sent successfully!");
      console.log("Form Data Sent:", formData);

      activeForm.querySelectorAll("input, select, textarea").forEach((el) => {
        if (el.type === "checkbox" || el.type === "radio") {
          el.checked = false;
        } else {
          el.value = "";
        }
      });
      document.getElementById("refundPolicyCheck").checked = false;
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send details. Please try again later.");
    });
}
 