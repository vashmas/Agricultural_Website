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
const counters = document.querySelectorAll('.counter');
const speed = 100;

const startCounter = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
};

let statsSection = document.querySelector('.stats');

if (statsSection) {
  window.addEventListener('scroll', () => {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
      startCounter();
    }
  });
}
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");

      const answer = item.querySelector(".faq-answer");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
  const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button
    filterButtons.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    products.forEach(product => {
      if (filter === "all" || product.dataset.category === filter) {
        product.classList.remove("hide");
      } else {
        product.classList.add("hide");
      }
    });

  });
});
const productDetails = {
  "Lufenuron": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lufenuron:..50 gm/ltr.(5.3% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Imidacloprid": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Imidacloprid:..200 gm/ltr.(17.85% w/w) \n"+
  "Other Ingredients:..To Make 100%",

"Nova Jen": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Nova Jen:..200 gm/ltr.(17.85% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Diafenthiuron": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Diafenthiuron:..500 gm/ltr.(47.5% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Acetamiprid": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Acetamiprid:..20% w/w \n"+
  "Other Ingredients:..To Make 100%",

  "Leera": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Diafenthiuron:..800 gm/kg.(80% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Vergo": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Emamectin Benzoate:..50 gm/kg.(5% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Doxan": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Dianeutroferon:..20% w/w \n"+
  "Other Ingredients:..To Make 100%",

  "Shiding": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lambda-Cyhalothrin:..10 gm/ltr(1.03% w/w) \n"+
  "Triazophos:..200 gm/ltr (20.62% w/w)\n"+
  "Other Ingredients:..To Make 100%",

  "Bifenthrin": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Bifenthrin:..10%EC(w/v) (11% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Yupu": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Emamectin Benzoate:..50 g/l.(5% w/w) \n"+
  "Lufenuron:..400 g/l.(40% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Triazhophos": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Triazhophos:..(40% w/v)EC (38.85% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Hector": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lambda-Chyhalothrin:..(10% w/w) \n"+
  "Other Ingredients:..To Make 100%",
  
  "Pyriproxyfen": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Pyriproxyfen:..100G/L.(11.80% w/w) \n"+
  "Other Ingredients:..To Make 100%",
  
  "Chlorfenapiar": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Chlorfenapiar:..36% w/v (31.63% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..800 gm/kg.(80% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Anaaj Goli": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Aluminium Phosphide:..56% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Xi Chu": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Abamectin:..10 gm/kg.(1% w/w) \n"+
  "Nitenpyram:..290 gm/kg.(29% w/w) \n"+
  "Other Ingredients:..To Make 100%",
  
   "Acephate": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Acephate:..75% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Bapoo": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Pyriproxyfen:..200 gm/kg.(20% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Monomehypo": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Monomehypo:..5% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Chlorpyrifos": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Chlorpyrifos:..40% w/v (34.35% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Editor": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Thiocyclam Hydrogen Oxalate:..250 gm/kg.(25% w/w) \n"+
  "Acetamiprid:..30 gm/kg.(1% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Sega Plus": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Nitenpyram:..200 gm/kg.(w/w) \n"+
  "Thiamethoxam:..300 gm/kg.(w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "King Poker": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..10 gm/kg.(1% w/w) \n"+
  ":..290 gm/kg.(29% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Fipronil": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Chlorpyrifos:..40% w/v (34.35% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Leera": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..800gm/kg. (90% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Lambda": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lambda cyhalothrin:..25 g/l (2.75% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Dimethoate": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Dimethoate:..400 G/L (34.20% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Yupu": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lufenuron:..400 gm/kg.(40% w/w) \n"+
  "Emamectin Benzoate:..50 gm/kg.(5% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Pattern": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Chlorfenapyr:..100gm/kg. (10% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Trichlorfon": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Trichlorfon:..800gm/kg. (30% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Dino": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Dinofefuran:..200gm/kg. (20% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Instant Super": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Nintenpyram:..50% w/w \n"+
  "Other Ingredients:..To Make 100%",

  "Buprofezin": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Buprofezin:..25% w/w \n"+
  "Other Ingredients:..To Make 100%",

  "Beta-Cyfluthrin": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Beta-Cyfluthrin:..25gm/ltr. (2.40% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Shiding": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lambda-Cyhalothrin:..10 gm/kg.(1.03% w/w) \n"+
  "Triazophos:..200 gm/kg.(20.62% w/w) \n"+
  "Other Ingredients:..To Make 100%",

    "Imidacloprid": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Imidacloprid:..250gm/kg (25% w/w) \n"+
  "Other Ingredients:..To Make 100%",

    "Lembda": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..25% w/w \n"+
  "Other Ingredients:..To Make 100%",

  "Puncher": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Thiocyclam Hydrogen Oxalate:..334 gm/kg.(33.4% w/w) \n"+
  "Acetamiprid:..60 gm/kg.(6% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Thiamethoxam": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..10 gm/kg.(1.03% w/w) \n"+
  ":..200 gm/kg.(20.62% w/w) \n"+
  "Other Ingredients:..To Make 100%",

"Pora Jen": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..10 gm/kg.(1.03% w/w) \n"+
  ":..200 gm/kg.(20.62% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Ceedo": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Clothianidin:..200gm/ltr. (17.50% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Spirofur": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Spirotetramate:..100gm/ltr. (92.5% w/w) \n"+
  "Dinotefuron:..100gm/ltr. (92.5% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Curfew": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Thiamethoxam:..250gm/ltr. (25% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Toshah": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Lambda-Cyhalothrin:..2.5%EC(w/v) (2.82% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Sega Pest Clear": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Emamectin Benzoate:..10 gm/ltr.(0.95% w/w) \n"+
  "Lufenuron:..20 gm/ltr.(1.90% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  // Fungicides
   "Cymoxynill + Mancozeb": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Cymoxynill:..8% w/w \n"+
  "Mancozeb:..64% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Thiophanate Methyl": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..% w/w \n"+
  ":..% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Pivot": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Pyraclostrobin:..67gm/kg(6.7% w/w) \n"+
  "Dimethomorph:..120gm/kg(12% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Metalaxyl + Mancozeb": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Metalaxyl:..08% w/w (80gm/kg)\n"+
  "Mancozeb:..64% w/w(640gm/kg) \n"+
  "Other Ingredients:..To Make 100%",

  "Chisel": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Chlorothalonil:..300gm/kg(30% w/w) \n"+
  "Cymoxinill:..60gm/kg (6% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Kachaloo": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Difenoconazole:..80gm/kg(8% w/w) \n"+
  "Validamycin:..40gm/kg (4% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Dimethomorph + Mancozeb": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Dimethomorph:..60gm/kg(6% w/w) \n"+
  "Mancozeb:..440gm/kg (44% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Puncheng Star": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..gm/kg(30% w/w) \n"+
  ":..gm/kg (6% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Pyrazol": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..gm/kg(30% w/w) \n"+
  ":..gm/kg (6% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Sulfur": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Sulfur:..800gm/kg(80% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Triadimefon": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..gm/kg(30% w/w) \n"+
  ":..gm/kg (6% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Finer": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Azomystrobin:..200gm/ltr(16.9% w/w) \n"+
  "Tebuconazole:..300gm/ltr (25.4% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  // Weedicide
  "Clodinafop": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Clodinafop Propargyl:..150gm/kg(15% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Glyphosate": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Glyphosate:..(88.8% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Winsta": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  ":..110gm/kg(18% w/w) \n"+
  ":..120gm/kg (10% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Konkowest": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Abamactin:..18gm/ltr(1.99% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Recall": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Pendimethalin:..170gm/ltr(15% w/w) \n"+
  "Acetochlor:..250gm/ltr (23% w/w) \n"+
  "Other Ingredients:..To Make 100%",

  "Trimen": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Tribenuron Methyl:..14.3% w/w \n"+
  "Metsulfuron Methyl:..14.3% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Dormal": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "HelloSulfuran Methyl:..75% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Pendimethanlin": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Pendimethalin:..330gm/ltr(33% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Gazonner": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Quizalofop-p-Ethyl:..150gm/ltr(15.7% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Winsta": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Bispyribac Sodium:..180gm/kg(18% w/w) \n"+
  "Bensulfuron Methyl:..120gm/kg (12% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Missile": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Acetochlor:..250gm/ltr(25.40% w/w) \n"+
  "Pendimethalin:..200gm/ltr (20.30% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Paraquat": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Paraquat:..200gm/ltr(18.5% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Butachlor": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Butachlor:..600gm/ltr(58.2% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Nova Gold": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "S-Metolachlor:..960(w/v) 85% (w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "HaloSulfuran Methyl": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "HaloSulfuran Methyl:..750gm/kg(75% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Metribuzin": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Metribuzin:..750% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Deft": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Melsulfuron Methyl:..100gm/kg(10% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Full Control": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Mesotriene:..100gm/kg(10% w/w) \n"+
  "Atrasine:..400gm/kg (40% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Atrazine": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Atrazine:..38% SC W/V(34.8% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Organic Matter": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Organic Matter:..25% w/w \n"+
  "C:N ratio<20:1 \n"+
  "CEC>60me/100g",

   "Pera Plus": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Humic Acid:..40% w/w \n"+
  "Potassium K2O:..7% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Sop": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Potassium:..50% w/w \n"+
  "Sulphur:..18% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Orgamat": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Organic Matter:..250gm/kg(25% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Robkar": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Humic Acid:..100gm/ltr(10% w/w) \n"+
  "Potassium:..35gm/ltr 3.5(% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Pera Potash": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Potassium:..240gm/ltr(10% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Carbofuron": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Carbofuron:..3% w/w \n"+
  ":..gm/ltr (% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Cartap": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Cartap:..4% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Firpronil": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Firpronil:..4gm/kg(0.4% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Sulphur": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Sulphur:..800gm/kg(80% w/w) \n"+
  "Other Ingredients:..To Make 100%",

   "Monomehypo": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Monomehypo:..5% w/w \n"+
  "Other Ingredients:..To Make 100%",

   "Mancozaim Mix": "Chemical Composition On 100% Basis.\n" + "Active Ingredient:\n"+
  "Zn:6%..60gm/kg(6% w/w) \n"+
  "Fe:3%..30gm/kg (3% w/w) \n"+
  "Cu:1%..10gm/kg (1% w/w) \n"+
  "Other Ingredients:..To Make 100%",
};

const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const dismissButton = document.querySelector(".dismiss");

viewButtons.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    const name = this.getAttribute("data-name");
    modalTitle.textContent = name;
    modalDescription.textContent = productDetails[name] || "Product details coming soon.";
    modal.classList.add("active");
  });
});

if (dismissButton) {
  dismissButton.addEventListener("click", function() {
    modal.classList.remove("active");
  });
}

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
// Contact Page
 function submitForm(e) {
        e.preventDefault();
        const success = document.getElementById('formSuccess');
        success.style.display = 'flex';
        document.getElementById('contactForm').reset();
        setTimeout(() => { success.style.display = 'none'; }, 5000);
    }
    // Blogs Page
    /* ── FILTER ── */
const btabs = document.querySelectorAll('.btab');
const bcards = document.querySelectorAll('#blog-grid .blog-card');
const featuredWrap = document.getElementById('featured-wrap');
const heroChips = document.querySelectorAll('.hero-chip');

function filterCrop(f) {
    featuredWrap.style.display = (f === 'all' || f === 'wheat') ? '' : 'none';
    bcards.forEach(c => { c.style.display = (f === 'all' || c.dataset.category === f) ? 'flex' : 'none'; });
    btabs.forEach(t => t.classList.toggle('active', t.dataset.filter === f));
    heroChips.forEach(c => c.classList.remove('active'));
}
function filterAll() {
    featuredWrap.style.display = '';
    bcards.forEach(c => c.style.display = 'flex');
    btabs.forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
    heroChips.forEach(c => c.classList.remove('active'));
    if(heroChips[0]) heroChips[0].classList.add('active');
}
btabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const f = tab.dataset.filter;
        if(f === 'all') filterAll(); else filterCrop(f);
    });
});

/* ── ARTICLE MODAL ── */
const articles = {
  'wheat-rust': {
    tag: '🌾 Wheat — Rabi Season',
    title: 'How to Control Yellow Rust & Powdery Mildew in Pakistani Wheat Fields',
    time: '6 min read',
    banner: 'linear-gradient(135deg,#1b5e20,#2e7d32,#558b2f)',
    content: `
      <p>Yellow rust (<em>Puccinia striiformis</em>) and powdery mildew are the two most destructive fungal diseases affecting wheat crops across Punjab, Sindh, and KPK. Together, they can devastate up to <strong>70% of a field's yield</strong> if left unmanaged. Early action is the most powerful tool a farmer has.</p>
      <h3>Identifying Yellow Rust</h3>
      <p>Yellow rust appears as <strong>bright yellow-orange powdery stripes</strong> running parallel along the leaf blade. Unlike brown rust which forms circular pustules, yellow rust follows the leaf veins in distinct rows. It thrives in cool, humid conditions — typically between 10–15°C — making it most dangerous during early Rabi (November–January).</p>
      <div class="highlight-box">⚠️ Key Sign: If you see yellow powder on your fingers after touching wheat leaves, yellow rust is already spreading. Spray within 48 hours.</div>
      <h3>Identifying Powdery Mildew</h3>
      <p>Powdery mildew shows as <strong>white, talcum-like patches</strong> on the upper leaf surface and stems. It spreads rapidly in conditions with high humidity and moderate temperatures (15–22°C). Severe infection causes leaves to yellow and die prematurely.</p>
      <h3>Recommended Spray Program</h3>
      <ul>
        <li><strong>First Spray:</strong> At tillering stage (30–40 days after sowing) — use a preventive fungicide if weather conditions favour rust</li>
        <li><strong>Second Spray:</strong> At flag leaf emergence — this is the most critical stage; protect the flag leaf at all costs</li>
        <li><strong>Third Spray (if needed):</strong> At heading stage if infection pressure is high</li>
      </ul>
      <h3>Agrinova Recommended Fungicides</h3>
      <p>For yellow rust control, triazole-based fungicides (Tebuconazole, Propiconazole) and strobilurin combinations give the best results. For powdery mildew, sulfur-based products or Triadimefon provide effective control. Always rotate between fungicide classes to prevent resistance.</p>
      <div class="highlight-box">💡 Pro Tip: Always apply fungicide in the morning when dew is absent and temperature is below 30°C for maximum absorption and effectiveness.</div>
    `
  },
  'bollworm': {
    tag: '🌿 Cotton — Kharif Season',
    title: 'Bollworm Control in Cotton: Full Spray Schedule & Insecticide Rotation Guide',
    time: '6 min read',
    banner: 'linear-gradient(135deg,#0d47a1,#1565c0,#1976d2)',
    content: `
      <p>Pink bollworm (<em>Pectinophora gossypiella</em>) and American bollworm (<em>Helicoverpa armigera</em>) are the two most damaging pests for cotton farmers in Punjab and Sindh. A single uncontrolled generation can reduce lint yield by <strong>30–50%</strong>. Timely identification and a disciplined spray schedule are essential.</p>
      <h3>Understanding the Two Bollworms</h3>
      <p><strong>Pink Bollworm:</strong> Attacks bolls from inside. Larvae enter young bolls and feed on seeds, causing stained lint and boll shedding. Very difficult to detect early as damage is internal.</p>
      <p><strong>American Bollworm:</strong> Larger caterpillar that feeds on squares, flowers, and bolls from outside. Entry holes are visible on bolls. More susceptible to contact insecticides.</p>
      <h3>Recommended Spray Schedule</h3>
      <ul>
        <li><strong>45–50 days after sowing:</strong> First preventive spray at squaring stage</li>
        <li><strong>60–65 days:</strong> Second spray at early flowering — critical window</li>
        <li><strong>75–80 days:</strong> Third spray at peak boll formation</li>
        <li><strong>90–95 days:</strong> Fourth spray if infestation pressure continues</li>
      </ul>
      <div class="highlight-box">⚠️ Economic Threshold: Spray when 5–10% squares or green bolls show fresh damage, or when 2–3 larvae per plant are found on scouting.</div>
      <h3>Insecticide Rotation — Critical for Resistance Management</h3>
      <p>Never use the same insecticide class for two consecutive sprays. Rotate between these groups:</p>
      <ul>
        <li>Spray 1: Insect Growth Regulators (e.g., Lufenuron)</li>
        <li>Spray 2: Organophosphates (e.g., Chlorpyrifos)</li>
        <li>Spray 3: Emamectin Benzoate-based products (e.g., Vergo)</li>
        <li>Spray 4: Pyrethroids (e.g., Bifenthrin) — use sparingly</li>
      </ul>
    `
  },
  'maize-herb': {
    tag: '🌽 Maize — Kharif Season',
    title: 'Pre & Post-Emergence Herbicides for Maize in Pakistan: A Practical Guide',
    time: '4 min read',
    banner: 'linear-gradient(135deg,#bf360c,#d84315,#e64a19)',
    content: `
      <p>Weed competition during the first 4–6 weeks after sowing is the <strong>single biggest yield-reducing factor</strong> in Pakistani maize fields. Research across Punjab and KPK shows that uncontrolled weeds can reduce maize yield by up to 50%. Herbicides, applied at the right time, are your most cost-effective defence.</p>
      <h3>Pre-Emergence Herbicides</h3>
      <p>Apply within <strong>2–3 days of sowing</strong>, before crop emergence. The soil must be moist for best results. Pre-emergence herbicides form a chemical barrier in the soil that prevents weed seeds from germinating.</p>
      <ul>
        <li><strong>Atrazine:</strong> Broad-spectrum, controls most grasses and broadleaf weeds. Apply at 1.5–2.0 kg a.i./ha.</li>
        <li><strong>Acetochlor + Pendimethalin:</strong> Combined products like Recall give broader spectrum control for both grass and broadleaf weeds.</li>
        <li><strong>S-Metolachlor (Nova Gold):</strong> Excellent for early grass weed suppression, especially in heavy textured soils.</li>
      </ul>
      <h3>Post-Emergence Herbicides</h3>
      <p>Apply between <strong>2–4 leaf stage of maize</strong> (10–20 days after emergence) when weeds are small and actively growing.</p>
      <ul>
        <li><strong>Atrazine + Mesotrione (Full Control):</strong> Excellent broad-spectrum post-emergence option.</li>
        <li><strong>Nicosulfuron:</strong> For grassy weed control post-emergence. Do not use with organophosphate insecticides within 7 days.</li>
      </ul>
      <div class="highlight-box">💡 Key Rule: Never spray herbicides when maize is stressed (drought, waterlogging, or disease). Wait for crop recovery before spraying.</div>
    `
  },
  'sugarcane-borer': {
    tag: '🎋 Sugarcane — Full Season',
    title: 'Stem Borer Management in Sugarcane: Granule Application Timing & Dosage',
    time: '5 min read',
    banner: 'linear-gradient(135deg,#1b5e20,#2e7d32,#388e3c)',
    content: `
      <p>Stem borers — primarily <em>Chilo infuscatellus</em> (early shoot borer) and <em>Sesamia inferens</em> (pink borer) — are the most yield-damaging insect pests in Pakistani sugarcane. Combined losses can reach <strong>20–40% of total yield</strong> in severe infestations, with significant reduction in sugar recovery percentage.</p>
      <h3>Two Critical Attack Windows</h3>
      <p><strong>Early Shoot Borer (March–May):</strong> Attacks young shoots during the grand growth phase. Causes "dead heart" — the central whorl turns yellow and pulls out easily with a hollow, rotten smell.</p>
      <p><strong>Internode Borer (June–September):</strong> Attacks the stalk internodes. Entry holes visible with frass (excrement) pushed out. Causes "dead top" at later stages.</p>
      <h3>Granular Insecticide Application — The Most Effective Method</h3>
      <p>Granular insecticides are the gold standard for sugarcane stem borer control because they provide <strong>systemic, long-lasting protection</strong> through soil absorption and root uptake.</p>
      <ul>
        <li><strong>At Planting:</strong> Apply Carbofuran 3G or Fipronil 0.4G in the planting furrow at 30–40 kg/acre. Cover with 2–3 cm of soil immediately.</li>
        <li><strong>30–40 Days After Planting:</strong> Second granule application if early shoot borer is detected at &gt;5% dead heart level.</li>
        <li><strong>Ratoon Crop:</strong> Apply granules in irrigation channels or alongside rows after cutting at 25–30 kg/acre.</li>
      </ul>
      <div class="highlight-box">⚠️ Critical: Always water the field immediately after granule application. Dry conditions dramatically reduce granule effectiveness.</div>
    `
  },
  'whitefly': {
    tag: '🌿 Cotton — Kharif Season',
    title: 'Whitefly in Cotton: Early Detection, Monitoring & Best Control Products',
    time: '5 min read',
    banner: 'linear-gradient(135deg,#0d47a1,#1565c0,#283593)',
    content: `
      <p>The silverleaf whitefly (<em>Bemisia tabaci</em>) is Pakistan cotton's most persistent and economically important sucking pest. Beyond direct feeding damage, whitefly acts as a <strong>vector for Cotton Leaf Curl Virus (CLCuV)</strong> — the disease that devastated Pakistani cotton production in the 1990s and remains a constant threat today.</p>
      <h3>Early Detection — The Key to Control</h3>
      <p>Begin monitoring from <strong>30 days after transplanting</strong>. Check the <em>underside</em> of young leaves — whiteflies prefer to lay eggs and feed on young foliage. Use yellow sticky traps at 4–6 traps per acre to monitor population trends.</p>
      <p><strong>Economic Threshold:</strong> Spray when 6–8 adult whiteflies are found per leaf on average, or when 15–20% of plants show CLCV symptoms.</p>
      <h3>Monitoring Method</h3>
      <ul>
        <li>Check 5 plants per acre, 2 leaves per plant (4th leaf from top)</li>
        <li>Count adults and nymphs on underside of leaf</li>
        <li>Record twice weekly during peak season (June–September)</li>
        <li>Use yellow sticky traps to track adult movement</li>
      </ul>
      <h3>Recommended Insecticides for Whitefly</h3>
      <ul>
        <li><strong>Imidacloprid (200 ml/acre):</strong> Excellent systemic activity, ideal for early season</li>
        <li><strong>Diafenthiuron:</strong> Highly effective against all whitefly life stages including eggs</li>
        <li><strong>Pyriproxyfen:</strong> Insect Growth Regulator — disrupts nymph development, reduces population build-up</li>
        <li><strong>Buprofezin:</strong> Effective against nymphs, safe for beneficial insects</li>
      </ul>
      <div class="highlight-box">💡 Rotate between these groups every spray. Do NOT use the same product more than twice per season — whitefly builds resistance extremely fast in Pakistani conditions.</div>
    `
  },
  'wheat-weeds': {
    tag: '🌾 Wheat — Rabi Season',
    title: 'Top 5 Weeds That Cut Wheat Yield in Pakistan — and How to Control Them',
    time: '5 min read',
    banner: 'linear-gradient(135deg,#4e342e,#6d4c41,#795548)',
    content: `
      <p>Weeds are the silent thieves of wheat yield. In Pakistani conditions, research from NARC and the Punjab Agriculture Department shows that <strong>uncontrolled weeds can reduce wheat yield by 25–45%</strong> depending on the weed species and density. Here are the five most damaging weeds and how to manage them.</p>
      <h3>1. Wild Oat (Avena fatua) — Jangli Jai</h3>
      <p>The most economically damaging weed in Pakistani wheat. Competes aggressively for nitrogen and water. One wild oat plant per square meter can reduce yield by 2–5%. Control with Clodinafop-propargyl (Clodinafop) applied at 2–3 leaf stage of wild oat.</p>
      <h3>2. Bathua (Chenopodium album) — Broadleaf</h3>
      <p>Extremely common across Punjab and Sindh. Thrives in cool, moist conditions. One plant can produce up to 75,000 seeds. Control with 2,4-D or Isoproturon applied early post-emergence.</p>
      <h3>3. Kandyari (Phalaris minor) — Little Seed Canary Grass</h3>
      <p>Most prevalent in irrigated Punjab. Has developed resistance to Isoproturon in some areas. Use Pinoxaden or Clodinafop + safener combinations for resistant biotypes.</p>
      <h3>4. Soji (Rumex dentatus) — Toothed Dock</h3>
      <p>Broadleaf weed most common in poorly drained fields. Control with Metsulfuron Methyl or Tribenuron Methyl applied at early post-emergence.</p>
      <h3>5. Junglee Palak (Rumex crispus) — Curly Dock</h3>
      <p>Persistent perennial weed in heavy soils. Requires contact + systemic herbicide combinations for effective control.</p>
      <div class="highlight-box">⏰ Most Important Rule: Apply all wheat weedicides between 21–35 days after sowing. Too early or too late significantly reduces effectiveness.</div>
    `
  },
  'resistance': {
    tag: '📋 General — Crop Protection',
    title: 'Insecticide Resistance in Pakistan: Why Rotating Chemicals Protects Your Crop',
    time: '7 min read',
    banner: 'linear-gradient(135deg,#4a148c,#6a1b9a,#7b1fa2)',
    content: `
      <p>Insecticide resistance is one of the most serious threats to crop protection in Pakistan. The problem has been building for decades — particularly in cotton whitefly, bollworm, and rice stem borer — and has now reached crisis levels in some districts of Punjab. Understanding why resistance develops and how to prevent it is essential knowledge for every Pakistani farmer.</p>
      <h3>How Resistance Develops</h3>
      <p>Every pest population contains a small number of individuals with natural genetic resistance to a particular insecticide. When the same insecticide is used repeatedly, the susceptible individuals die but the naturally resistant ones survive and reproduce. Within <strong>3–5 generations</strong>, the majority of the population may be resistant.</p>
      <div class="highlight-box">📊 Reality Check: Pakistani cotton whitefly is now resistant to multiple insecticide classes including organophosphates, pyrethroids, and some neonicotinoids in districts of Rahim Yar Khan and Multan.</div>
      <h3>The IRAC Mode of Action Groups</h3>
      <p>Insecticides are classified into groups based on how they work (mode of action). Key groups used in Pakistan:</p>
      <ul>
        <li><strong>Group 1A/B:</strong> Organophosphates & Carbamates (Chlorpyrifos, Acephate)</li>
        <li><strong>Group 3A:</strong> Pyrethroids (Lambda-cyhalothrin, Bifenthrin)</li>
        <li><strong>Group 4A:</strong> Neonicotinoids (Imidacloprid, Acetamiprid)</li>
        <li><strong>Group 6:</strong> Avermectins (Emamectin benzoate, Abamectin)</li>
        <li><strong>Group 15:</strong> Insect Growth Regulators (Lufenuron)</li>
      </ul>
      <h3>Rotation Rules</h3>
      <ul>
        <li>Never use the same MODE OF ACTION group in consecutive sprays</li>
        <li>Rotate to a <em>completely different</em> group for each spray</li>
        <li>Limit any single group to 2 sprays per season maximum</li>
        <li>Include at least one IGR (insect growth regulator) per season to disrupt pest development</li>
      </ul>
    `
  },
  'armyworm': {
    tag: '🌽 Maize — Kharif Season',
    title: 'Fall Armyworm in Maize: Identification, Damage Signs & Control in Pakistan',
    time: '5 min read',
    banner: 'linear-gradient(135deg,#bf360c,#d84315,#bf360c)',
    content: `
      <p>Fall armyworm (<em>Spodoptera frugiperda</em>), first confirmed in Pakistan in 2019, has rapidly spread to become a <strong>major threat to maize production</strong> across KPK, Punjab, and Sindh. Without timely management, a single FAW infestation can destroy 30–70% of a maize field's yield potential.</p>
      <h3>How to Identify Fall Armyworm</h3>
      <p><strong>Eggs:</strong> Laid in clusters of 100–200 on the upper surface of lower leaves, covered with a hair-like mass. Appear greyish-green to cream colored.</p>
      <p><strong>Young Larvae (1st–2nd instar):</strong> Tiny, pale green caterpillars that feed in the whorl. Leaves show small "window pane" holes — transparent patches where larvae scraped the leaf surface.</p>
      <p><strong>Older Larvae (3rd–6th instar):</strong> Brown/grey caterpillar up to 4 cm long. Look for the distinctive <strong>inverted Y shape on the head capsule</strong> and 4 dark spots arranged in a square on the last body segment — these are unique to FAW.</p>
      <h3>Damage Pattern</h3>
      <p>FAW larvae prefer to feed inside the whorl of the maize plant. Fresh wet frass (droppings) inside the whorl is the clearest indicator of active infestation. Heavy feeding before tasselling causes the characteristic <strong>"ragged whorl"</strong> appearance.</p>
      <h3>Control Strategy</h3>
      <ul>
        <li><strong>Scout twice weekly</strong> from 15 days after emergence</li>
        <li><strong>Spray threshold:</strong> When 20% of plants show fresh feeding damage OR 1–2 larvae per plant found</li>
        <li><strong>Best products:</strong> Emamectin benzoate, Spinetoram, Chlorantraniliprole (diamides)</li>
        <li><strong>Spray timing:</strong> Evening spray into the whorl is most effective — larvae feed at night</li>
      </ul>
      <div class="highlight-box">💡 Add sugar (200g/15L water) to your spray mix — FAW is attracted to sweet solutions and will consume more insecticide.</div>
    `
  },
  'wheat-fert': {
    tag: '🌾 Wheat — Rabi Season',
    title: 'Wheat Fertilizer Guide: Right Nutrients at the Right Stage for Maximum Yield',
    time: '5 min read',
    banner: 'linear-gradient(135deg,#1b5e20,#33691e,#558b2f)',
    content: `
      <p>Fertilizer management is the most direct lever a farmer has over wheat yield. Research across Pakistan shows that <strong>balanced, timely nutrition can increase wheat yield by 25–40%</strong> compared to unfertilized fields. The key is applying the right nutrient at the right growth stage.</p>
      <h3>Nutrient Requirements by Stage</h3>
      <p><strong>At Sowing (Basal Application):</strong> Apply full Phosphorus (P) and Potassium (K) dose with first one-third of Nitrogen. Phosphorus is critical for root development in the early stages — it cannot be moved easily through soil so must be placed near the seed at planting.</p>
      <p><strong>At Crown Root Initiation (25–30 DAS):</strong> Apply second dose of Nitrogen. This is when the plant establishes its tiller potential — the number of shoots that will eventually become ears.</p>
      <p><strong>At Jointing / Stem Elongation (60–70 DAS):</strong> Final Nitrogen application. Supports flag leaf development and grain filling. Use urea top-dressing with irrigation.</p>
      <h3>Recommended Doses for Pakistani Conditions</h3>
      <ul>
        <li><strong>Nitrogen (N):</strong> 120–150 kg/ha (split into 3 applications)</li>
        <li><strong>Phosphorus (P₂O₅):</strong> 60–90 kg/ha (all at sowing)</li>
        <li><strong>Potassium (K₂O):</strong> 60 kg/ha (all at sowing in K-deficient soils)</li>
        <li><strong>Zinc (ZnSO₄):</strong> 25 kg/ha (highly beneficial in Sindh and southern Punjab)</li>
      </ul>
      <div class="highlight-box">⚠️ Common Mistake: Many Pakistani farmers apply all Nitrogen at sowing. This causes excessive early growth, lodging, and disease — and misses the critical jointing stage application that drives grain weight.</div>
    `
  },
  'sucking-pest': {
    tag: '🌿 Cotton — Kharif Season',
    title: 'Aphids, Jassids & Thrips in Cotton: Complete Sucking Pest Management Guide',
    time: '6 min read',
    banner: 'linear-gradient(135deg,#0d47a1,#1565c0,#0d47a1)',
    content: `
      <p>Sucking pests — particularly aphids, jassids (leafhoppers), and thrips — are the <strong>earliest and most widespread</strong> insect threats to Pakistani cotton. They begin attacking from seedling stage and, if uncontrolled, can cause significant early-season stress that permanently reduces yield potential.</p>
      <h3>Aphids (Aphis gossypii)</h3>
      <p>Soft-bodied, pale green to black insects clustered on undersides of leaves and growing tips. Excrete sticky honeydew that leads to sooty mould, blocking photosynthesis. Population can triple in 3–4 days in warm, humid weather. <strong>Economic threshold: 250 aphids per leaf.</strong></p>
      <h3>Jassids (Amrasca devastans)</h3>
      <p>Small, wedge-shaped green insects that feed on leaf undersides. Cause characteristic "jassid burn" — leaf margins curl downward and turn yellow to red-brown. Even moderate infestations cause significant yield loss. <strong>Economic threshold: 1–2 jassids per leaf.</strong></p>
      <h3>Thrips (Thrips tabaci)</h3>
      <p>Tiny, slender insects (barely visible) that rasp leaf surfaces. Cause silvery streaking on leaves. Most damaging to young plants up to 45 days. Also vectors of Tomato Spotted Wilt Virus. <strong>Spray when 8–10 thrips per leaf found on young plants.</strong></p>
      <h3>Control Recommendations</h3>
      <ul>
        <li><strong>Imidacloprid / Acetamiprid:</strong> Excellent systemic control of all three pests — ideal for early season</li>
        <li><strong>Nova Jen (Imidacloprid-based):</strong> Provides 2–3 week residual protection against jassids and aphids</li>
        <li><strong>Avoid pyrethroids in early season</strong> — they kill beneficial predators (lacewings, ladybirds) that naturally suppress sucking pests</li>
      </ul>
      <div class="highlight-box">🌿 Integrated Approach: Preserve natural enemies by avoiding broad-spectrum sprays until economic thresholds are crossed. Lady beetles and lacewings can control aphids effectively below threshold levels.</div>
    `
  },
  'cotton-stages': {
    tag: '🌿 Cotton — Full Season Guide',
    title: 'Cotton Crop Growth Stages: A Complete Protection Guide for Pakistani Farmers',
    time: '7 min read',
    banner: 'linear-gradient(135deg,#0d47a1,#283593,#1a237e)',
    content: `
      <p>Cotton requires <strong>180–200 days</strong> from sowing to harvest in Pakistani conditions. Each growth stage brings specific pest and disease threats. Knowing what to watch for — and what to apply — at each stage is the foundation of a successful crop protection program.</p>
      <h3>Stage 1: Germination & Seedling (0–20 DAS)</h3>
      <p>Main threats: Damping off, root rot, termites, cutworms. Apply seed treatment fungicide. If termite pressure is high, use Fipronil granules in furrow at sowing. Scout for cutworm at night.</p>
      <h3>Stage 2: Early Vegetative (21–45 DAS)</h3>
      <p>Main threats: Jassids, aphids, thrips, early whitefly. This is the critical window for sucking pest management. Monitor twice weekly. Apply Imidacloprid or Acetamiprid when thresholds are crossed. Avoid broad-spectrum sprays to preserve beneficials.</p>
      <h3>Stage 3: Squaring (46–65 DAS)</h3>
      <p>Main threats: Pink bollworm (early), whitefly build-up, Thrips. First bollworm spray if damage exceeds 5% squares. Rotate insecticide class — use IGR (Lufenuron) for first bollworm spray. Monitor whitefly with sticky traps.</p>
      <h3>Stage 4: Flowering & Boll Setting (66–100 DAS)</h3>
      <p>Main threats: American bollworm, pink bollworm, whitefly, boll rot. Most intensive spray period. Maintain strict rotation schedule. Scout every 3–4 days. Apply Emamectin benzoate for heavy bollworm pressure.</p>
      <h3>Stage 5: Boll Opening & Harvest (100+ DAS)</h3>
      <p>Main threats: Boll weevil, mealy bugs, secondary pests. Reduce spray frequency. Observe pre-harvest intervals strictly. Harvest at 60% open bolls for best fiber quality.</p>
      <div class="highlight-box">📅 Record Keeping: Maintain a spray diary noting product, dose, date, and pest observed. This is essential for proper rotation and for identifying resistance patterns early.</div>
    `
  }
};

function openModal(id) {
    const a = articles[id];
    if (!a) return;
    const overlay = document.getElementById('artModalOverlay');
    document.getElementById('modalTag').textContent = a.tag;
    document.getElementById('modalTitle').textContent = a.title;
    document.getElementById('modalTime').innerHTML = '<i class="fa-regular fa-clock"></i> ' + a.time;
    document.getElementById('modalBannerBg').style.background = a.banner;
    document.getElementById('modalContent').innerHTML = a.content;
    document.getElementById('artModal').scrollTop = 0;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(e) {
    if (e && e.target !== document.getElementById('artModalOverlay') && !e.target.classList.contains('art-modal-close') && !e.target.closest('.art-modal-close')) return;
    document.getElementById('artModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') { document.getElementById('artModalOverlay').classList.remove('open'); document.body.style.overflow = ''; } });