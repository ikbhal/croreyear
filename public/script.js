document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("investmentForm");
    const resultContainer = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
        const growthRate = parseFloat(document.getElementById("growthRate").value);
        const months = parseInt(document.getElementById("months").value);

        const finalAmount = calculateFinalAmount(initialInvestment, growthRate, months);
        displayResult(finalAmount);
    });

    function calculateFinalAmount(initialInvestment, growthRate, months) {
        const growthFactor = 1 + growthRate / 100;
        return initialInvestment * Math.pow(growthFactor, months);
    }

    function displayResult(amount) {
        const originalAmount = amount; 
        const crore = Math.floor(amount / 10000000);
        amount %= 10000000;
    
        const lakh = Math.floor(amount / 100000);
        amount %= 100000;
    
        const thousand = Math.floor(amount / 1000);
    
        let resultMessage = "Your investment will grow to ";
        
        if (crore > 0) {
            resultMessage += crore + " Crores ";
        }
        
        if (lakh > 0) {
            resultMessage += lakh + " Lakhs ";
        }
        
        if (thousand > 0) {
            resultMessage += thousand + " Thousand ";
        }
    
        if (crore === 0 && lakh === 0 && thousand === 0) {
            resultMessage += "approximately ₹" + amount.toFixed(2);
        }
    
        resultMessage += ".";
        
        resultContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                ${resultMessage}
                <p>Exact amount: ₹${originalAmount.toFixed(2)}</p>
            </div>
        `;
    }
    
});
