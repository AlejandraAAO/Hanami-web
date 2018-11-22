$('.carousel').carousel()

// FORMULARIO
const email = ()=>{
  emailjs.init("user_gZyN0deotOBOjaLDlSdpj");
}

email();

window.onload = function() {
  document.getElementById('myform').addEventListener('submit', function(event) {
      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('default_service', 'template_d9msTopR', this)
      .then(function(){ 
        console.log("Sent!");
         
      }, function(err) {
         console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));

      });
  });
}