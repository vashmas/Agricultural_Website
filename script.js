function orderProduct(productName) {
    let customerName = prompt("Enter your name:");
    let customerPhone = prompt("Enter your phone number:");

    if(customerName && customerPhone){
        alert("Thank you " + customerName + "! Your order for " + productName + " has been received.\nWe will contact you at " + customerPhone);
        console.log("Order Received:", productName, "Customer:", customerName, "Phone:", customerPhone);
    } else {
        alert("Order cancelled. Please provide your details.");
    }
}
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});


function toggleMember(element) {
  const allMembers = document.querySelectorAll('.member');

  allMembers.forEach(member => {
    if (member.querySelector('h3') !== element) {
      member.classList.remove('active');
    }
  });

  element.parentElement.classList.toggle('active');
}

function showMessage() {
  alert("Thank you for your interest! Please contact us to explore career opportunities.");
}
function applyJob() {
  alert("Please send your CV at agrinovapakistan99@gmail.com");
}

function showContact(){
  alert("Kindly contact us at:\n📞 Phone: 0300-8735599\n📧 Email: agrinovapakistan99@yahoo.com");
}


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");

  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
