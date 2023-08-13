window.onload = function() {

    
    let retrievedSummaryTable = JSON.parse(localStorage.getItem('newSummaryTable'));

  

    if (retrievedSummaryTable) {
        document.getElementById('fnameSummary').innerHTML = retrievedSummaryTable.fnameSummary;
        document.getElementById('chosenDateTableU').innerHTML = retrievedSummaryTable.chosenDateTableU;
        document.getElementById('totalnumhrsU').innerHTML = retrievedSummaryTable.selectedTimeSlotU;
        document.getElementById('durationfullU').innerHTML = retrievedSummaryTable.totalnumhrsU+" ("+retrievedSummaryTable.durationfullU+")";
        document.getElementById('phoneSummary').innerHTML = retrievedSummaryTable.phoneSummary;
        document.getElementById('emailSummary').innerHTML = retrievedSummaryTable.emailSummary;
        document.getElementById('genderSummary').innerHTML = retrievedSummaryTable.genderSummary;
        document.getElementById('slAdultSummaryU').innerHTML = retrievedSummaryTable.slAdultSummaryU;
        document.getElementById('slChildSummaryU').innerHTML = retrievedSummaryTable.slChildSummaryU;
        document.getElementById('fAdultSummaryU').innerHTML = retrievedSummaryTable.fAdultSummaryU;
        document.getElementById('fChildSummaryU').innerHTML = retrievedSummaryTable.fChildSummaryU;
        document.getElementById('infantSummaryU').innerHTML = retrievedSummaryTable.infantSummaryU;
        document.getElementById('slAdultSummaryPriceU').innerHTML = retrievedSummaryTable.slAdultSummaryPriceU;
        document.getElementById('slChildSummaryPriceU').innerHTML = retrievedSummaryTable.slChildSummaryPriceU;
        document.getElementById('fAdultSummaryPriceU').innerHTML = retrievedSummaryTable.fAdultSummaryPriceU;
        document.getElementById('fChildSummaryPriceU').innerHTML = retrievedSummaryTable.fChildSummaryPriceU;
        document.getElementById('infantSummaryPriceU').innerHTML = retrievedSummaryTable.infantSummaryPriceU;
        document.getElementById('totalPayableSummaryU').innerHTML = retrievedSummaryTable.totalPayableSummaryU;
    }

    var fields = [cardName, cardNumber, expiryDate, cvv];

    var errorElements = [
        document.getElementById("nameError"), 
        document.getElementById("numberError"), 
        document.getElementById("expiryError"), 
        document.getElementById("cvvError")
    ];
  
    fields.forEach(function(field, index) {
        field.addEventListener('input', function() {
            validateNotEmpty(cardName, errorElements[0], "Please enter the card holder's name.");
            validateCardNumber(cardNumber, errorElements[1], "Please enter a valid card number.");
            validateExpiryDate(expiryDate, errorElements[2], "Please enter the expiry date.", "Your card has expired.");
            validateCVV(cvv, errorElements[3], "Please enter a valid CVV.");
  
            var areAllFieldsValid = errorElements.every(function(errorElement) {
                
                return errorElement.textContent === "";
            });
  
            if (areAllFieldsValid) {
                
                var nextButton = document.querySelector('.hero-btn');
                nextButton.style.display = 'block';
                
               
                let totalPayableSummary = localStorage.getItem('totalPayableSummary');
      
               
                if (totalPayableSummary) {
                    nextButton.textContent = "Pay " + totalPayableSummary;
                } else {
                   
                    console.error('Total payable summary not found in local storage');
                }
            } else {
                
                document.querySelector('.hero-btn').style.display = 'none';
            }
        });
    });

  };


    
    function validateNotEmpty(input, errorElement, errorMessage) { 
        if(input.value.trim() === "") {
            input.className = "invalid";
            errorElement.textContent = errorMessage;
        } else {
            input.className = "valid";
            errorElement.textContent = "";
        }
    }
    
    function validateCardNumber(input, errorElement, errorMessage) { 
        var cardNum = input.value.trim();
        if(isNaN(cardNum) || cardNum.length !== 16) {
            input.className = "invalid";
            errorElement.textContent = errorMessage;
        } else {
            input.className = "valid";
            errorElement.textContent = "";
        }
    }

    function validateExpiryDate(input, errorElement, errorMessage, expiredMessage) {
        var expiry = input.value.trim().split('/');
        if(expiry.length !== 2 || isNaN(expiry[0]) || isNaN(expiry[1]) || expiry[0].length !== 2 || expiry[1].length !== 2) {
            input.className = "invalid";
            errorElement.textContent = errorMessage;
        } else {
            var currentYear = new Date().getFullYear() % 100; 
            var currentMonth = new Date().getMonth() + 1; 
            var expiryMonth = parseInt(expiry[0]);
            var expiryYear = parseInt(expiry[1]);
    
            if(expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                input.className = "invalid";
                errorElement.textContent = expiredMessage;
            } else {
                input.className = "valid";
                errorElement.textContent = "";
            }
        }
    }
    
    function validateCVV(input, errorElement, errorMessage) { 
        var cvvNum = input.value.trim();
        if(isNaN(cvvNum) || cvvNum.length !== 3) {
            input.className = "invalid";
            errorElement.textContent = errorMessage;
        } else {
            input.className = "valid";
            errorElement.textContent = "";
        }
    }

