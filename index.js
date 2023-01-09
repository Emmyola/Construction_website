function sendMail() {
  var mail = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    message: document.getElementById("note").value,
  };

  const serviceID = "service_83rfs5n";
  const templateID = "template_3rbywop";

  emailjs
    .send(serviceID, templateID, mail)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("note").value = "";

      console.log(res);
      alert("message sent successfully");
    })
    .catch((err) => console.log(err));
}
