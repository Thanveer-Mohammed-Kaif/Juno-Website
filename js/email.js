function sendEmailIndex() {
  const formData = {
    firstName: document.getElementById("IndexName").value,
    email: document.getElementById("IndexEmail").value,
    phone: document.getElementById("IndexPhone").value,
    message: document.getElementById("IndexMessage").value,
    submit: document.getElementById("submit").value,
  };

  if (
    !formData.firstName ||
    !formData.email ||
    !formData.phone ||
    !formData.message
  ) {
    alert("Please fill in all the   fields");
  } else {
    emailjs.send("service_z4ao0v8", "template_sdv31mr", formData).then(() => {
      console.log(
        formData.firstName,
        formData.email,
        formData.phone,
        formData.message
      );

      alert(`Your details have been sent successfully`);
      document.getElementById("first_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
    });
  }
}

function sendEmailContact() {
  const formData = {
    firstName: document.getElementById("ContactName").value,
    email: document.getElementById("ContactEmail").value,
    phone: document.getElementById("ContactPhone").value,
    message: document.getElementById("ContactMessage").value,
    submit: document.getElementById("ContactSubmit").value,
  };

  if (
    !formData.firstName ||
    !formData.email ||
    !formData.phone ||
    !formData.message
  ) {
    alert("Please fill in all the   fields");
  } else {
    emailjs.send("service_kiyxotg", "template_sdv31mr", formData).then(() => {
      console.log(
        formData.firstName,
        formData.email,
        formData.phone,
        formData.message
      );

      alert(`Your details have been sent successfully`);
      document.getElementById("first_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
    });
  }
}

function sendEmailOurService() {
  const formData = {
    firstName: document.getElementById("ourServiceName").value,
    email: document.getElementById("ourServiceEmail").value,
    phone: document.getElementById("ourServicePhone").value,
    message: document.getElementById("ourServiceMessage").value,
    submit: document.getElementById("ourServiceSubmit").value,
  };

  if (
    !formData.firstName ||
    !formData.email ||
    !formData.phone ||
    !formData.message
  ) {
    alert("Please fill in all the   fields");
  } else {
    emailjs.send("service_z4ao0v8", "template_myl93bo", formData).then(() => {
      console.log(
        formData.firstName,
        formData.email,
        formData.phone,
        formData.message
      );

      alert(`Your details have been sent successfully`);
      document.getElementById("first_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
    });
  }
}
