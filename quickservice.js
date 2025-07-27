document.addEventListener("DOMContentLoaded", () => {
    const serviceSelect = document.getElementById("dropdown");
    const addonsContainer = document.getElementById("addonsContainer");
    const addonsSelect = document.getElementById("addons");
    const totalCostSpan = document.getElementById("totalCost");
    const form = document.getElementById("commissionForm");
    
    document.getElementById("commissionForm").addEventListener("submit", function (e) {
      const termsCheckbox = document.getElementById("termsCheckbox");
    
      if (!termsCheckbox.checked) {
        e.preventDefault(); 
        alert("you must accept the t.o.s before submitting the form ૮ ◞ ﻌ ◟ ა");
      }
    });

    const addOnsData = {
      animation: { name: "animation - £10", cost: 10 },
      detailedBackground: { name: "detailed background - £10", cost: 10 },
      extrapack: {name: "pack of three - £10", cost: 10},
      customdomain: {name: "custom domain - £10", cost: 10}
    };
  
    serviceSelect.addEventListener("change", () => {
      const selectedService = serviceSelect.options[serviceSelect.selectedIndex];
      const availableAddOns = selectedService.getAttribute("data-addons");
  
      addonsSelect.innerHTML = ""; 
      if (availableAddOns) {
        addonsContainer.style.display = "block";
        const addOnKeys = availableAddOns.split(",");
        addOnKeys.forEach(addOnKey => {
          const option = document.createElement("option");
          option.value = addOnsData[addOnKey].cost;
          option.textContent = addOnsData[addOnKey].name;
          addonsSelect.appendChild(option);
        });
  
        addonsSelect.size = Math.min(addOnKeys.length, 5); // Show up to 5 at once
      } else {
        addonsContainer.style.display = "none";
      }
  
      updateTotalCost();
    });

    const updateTotalCost = () => {
      let total = 0;

      const serviceCost = parseInt(serviceSelect.value) || 0;
      total += serviceCost;
 
      Array.from(addonsSelect.selectedOptions).forEach(option => {
        total += parseInt(option.value);
      });
  
      totalCostSpan.textContent = total;
    };
  
    addonsSelect.addEventListener("change", updateTotalCost);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const selectedService = serviceSelect.options[serviceSelect.selectedIndex].text;
      const selectedAddOns = Array.from(addonsSelect.selectedOptions).map(opt => opt.text).join(", ");
      const totalCost = totalCostSpan.textContent;
  
      const emailContent = `
        Name/Username: ${formData.get("name")}
        Email: ${formData.get("email")}
        Service: ${selectedService}
        Add-ons: ${selectedAddOns || "None"}
        Total Cost: £${totalCost}
        PayPal/Ko-fi Username: ${formData.get("payment-username")}
        Extra Info: ${formData.get("extra-info")}
      `;

      console.log(emailContent);
      alert("Form submitted! Check the console for details.");
      form.reset();
      totalCostSpan.textContent = 0;
      addonsContainer.style.display = "none";
    });
  });
  