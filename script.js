function calculateSI(){

    let principal =
        parseFloat(document.getElementById("principal").value);

    let rate =
        parseFloat(document.getElementById("rate").value);

    let time =
        parseFloat(document.getElementById("time").value);

    if(
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(time) ||
        principal <= 0 ||
        rate <= 0 ||
        time <= 0
    ){
        document.getElementById("result").innerHTML =
        "⚠️ Please enter valid positive numbers.";
        return;
    }

    let interest =
        (principal * time * rate) / 100;

    let total =
        principal + interest;

    document.getElementById("result").innerHTML =
    `
    📈 Interest Earned:
    <span class="highlight">₹${interest.toFixed(2)}</span>
    <br><br>
    💰 Total Amount:
    <span class="highlight">₹${total.toFixed(2)}</span>
    `;
}
