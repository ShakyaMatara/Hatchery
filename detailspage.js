window.onload = function() {

let startHour = JSON.parse(localStorage.getItem('startHour'));
let endHour = JSON.parse(localStorage.getItem('endHour'));


const retrievedSummaryTable = JSON.parse(localStorage.getItem('summaryTable'));

if (retrievedSummaryTable) {
    
    document.getElementById('chosenDateTable').innerHTML = retrievedSummaryTable.chosenDateTable;
    document.getElementById('totalnumhrs').innerHTML = startHour + " to " + endHour ;
    document.getElementById('durationfull').innerHTML = retrievedSummaryTable.totalnumhrs+" ("+retrievedSummaryTable.durationfull+")";

    document.getElementById('slAdultSummary').innerHTML = retrievedSummaryTable.slAdultSummary;
    document.getElementById('slChildSummary').innerHTML = retrievedSummaryTable.slChildSummary;
    document.getElementById('fAdultSummary').innerHTML = retrievedSummaryTable.fAdultSummary;
    document.getElementById('fChildSummary').innerHTML = retrievedSummaryTable.fChildSummary;
    document.getElementById('infantSummary').innerHTML = retrievedSummaryTable.infantSummary;

    document.getElementById('slAdultSummaryPrice').innerHTML = retrievedSummaryTable.slAdultSummaryPrice;
    document.getElementById('slChildSummaryPrice').innerHTML = retrievedSummaryTable.slChildSummaryPrice;
    document.getElementById('fAdultSummaryPrice').innerHTML = retrievedSummaryTable.fAdultSummaryPrice;
    document.getElementById('fChildSummaryPrice').innerHTML = retrievedSummaryTable.fChildSummaryPrice;
    document.getElementById('infantSummaryPrice').innerHTML = retrievedSummaryTable.infantSummaryPrice;

    document.getElementById("totalPayableSummary").textContent = retrievedSummaryTable.totalPayableSummary;
  } else {
   
    console.log("No summaryTable data in localStorage.");
  }

   
    const storedSummaryTable = JSON.parse(localStorage.getItem('summaryTable'));


    let chosenDateTable2;
    let selectedTimeSlot2;
    let totalnumhrs2;
    let durationfull2;
    let slAdultSummary2;
    let slChildSummary2;
    let fAdultSummary2;
    let fChildSummary2;
    let infantSummary2;
    let slAdultSummaryPrice2;
    let slChildSummaryPrice2;
    let fAdultSummaryPrice2;
    let fChildSummaryPrice2;
    let infantSummaryPrice2;
    let totalPayableSummary2;
  
   
    if (storedSummaryTable) {
      chosenDateTable2 = storedSummaryTable.chosenDateTable;
      selectedTimeSlot2 = startHour + " to " + endHour;
      totalnumhrs2 = storedSummaryTable.totalnumhrs;
      durationfull2 = storedSummaryTable.durationfull;
      slAdultSummary2 = storedSummaryTable.slAdultSummary;
      slChildSummary2 = storedSummaryTable.slChildSummary;
      fAdultSummary2 = storedSummaryTable.fAdultSummary;
      fChildSummary2 = storedSummaryTable.fChildSummary;
      infantSummary2 = storedSummaryTable.infantSummary;
      slAdultSummaryPrice2 = storedSummaryTable.slAdultSummaryPrice;
      slChildSummaryPrice2 = storedSummaryTable.slChildSummaryPrice;
      fAdultSummaryPrice2 = storedSummaryTable.fAdultSummaryPrice;
      fChildSummaryPrice2 = storedSummaryTable.fChildSummaryPrice;
      infantSummaryPrice2 = storedSummaryTable.infantSummaryPrice;
      totalPayableSummary2 = storedSummaryTable.totalPayableSummary;
    }

   
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('conemail');
    const phoneInput = document.getElementById('phone');
    const nameInput = document.getElementById('fname');


    emailInput.addEventListener('input', function() {
        if (emailInput.checkValidity()) {
            emailInput.style.borderColor = 'green';
        } else {
            emailInput.style.borderColor = 'red';
        }
    });

    confirmEmailInput.addEventListener('input', function() {
        if (confirmEmailInput.value !== emailInput.value) {
            confirmEmailInput.setCustomValidity('Email addresses do not match');
            confirmEmailInput.style.borderColor = 'red';
        } else {
            confirmEmailInput.setCustomValidity('');
            confirmEmailInput.style.borderColor = 'green';
        }
    });


    phoneInput.addEventListener('input', function() {
        if (phoneInput.checkValidity()) {
            phoneInput.style.borderColor = 'green';
        } else {
            phoneInput.style.borderColor = 'red';
        }
    });

    nameInput.addEventListener('input', function() {
        if (nameInput.checkValidity()) {
            nameInput.style.borderColor = 'green';
        } else {
            nameInput.style.borderColor = 'red';
        }
    });

    

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        document.getElementById('fnameSummary').innerHTML = nameInput.value;
        document.getElementById('chosenDateTableU').innerHTML = chosenDateTable2; 
        document.getElementById('totalnumhrsU').innerHTML = selectedTimeSlot2 ;
        document.getElementById('durationfullU').innerHTML = totalnumhrs2+durationfull2 ;
        document.getElementById('phoneSummary').innerHTML = phoneInput.value; 
        document.getElementById('emailSummary').innerHTML = emailInput.value; 
        document.getElementById('genderSummary').innerHTML = document.getElementById('gender').value; 
        document.getElementById('slAdultSummaryU').innerHTML = slAdultSummary2;
        document.getElementById('slChildSummaryU').innerHTML = slChildSummary2;
        document.getElementById('fAdultSummaryU').innerHTML = fAdultSummary2;
        document.getElementById('fChildSummaryU').innerHTML = fChildSummary2;
        document.getElementById('infantSummaryU').innerHTML = infantSummary2;

        document.getElementById('slAdultSummaryPriceU').innerHTML = slAdultSummaryPrice2;
        document.getElementById('slChildSummaryPriceU').innerHTML =  slChildSummaryPrice2;
        document.getElementById('fAdultSummaryPriceU').innerHTML = fAdultSummaryPrice2;
        document.getElementById('fChildSummaryPriceU').innerHTML =  fChildSummaryPrice2;
        document.getElementById('infantSummaryPriceU').innerHTML = infantSummaryPrice2;

        document.getElementById('totalPayableSummaryU').innerHTML = totalPayableSummary2;

        let newSummaryTable = { 
            fnameSummary: nameInput.value,
            chosenDateTableU: chosenDateTable2,
            selectedTimeSlotU: selectedTimeSlot2,
            totalnumhrsU: totalnumhrs2,
            durationfullU: durationfull2,
            phoneSummary: phoneInput.value,
            emailSummary: emailInput.value,
            genderSummary: document.getElementById('gender').value,
            slAdultSummaryU: slAdultSummary2,
            slChildSummaryU: slChildSummary2,
            fAdultSummaryU: fAdultSummary2,
            fChildSummaryU: fChildSummary2,
            infantSummaryU: infantSummary2,
            slAdultSummaryPriceU: slAdultSummaryPrice2,
            slChildSummaryPriceU: slChildSummaryPrice2,
            fAdultSummaryPriceU: fAdultSummaryPrice2,
            fChildSummaryPriceU: fChildSummaryPrice2,
            infantSummaryPriceU: infantSummaryPrice2,
            totalPayableSummaryU: totalPayableSummary2
        };
    
        
        localStorage.setItem('newSummaryTable', JSON.stringify(newSummaryTable));

        
        document.querySelector('.hero-btn').style.display = 'block';
    });

    
};