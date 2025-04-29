let dollar = prompt ("enter dollar")
function convert() {
  const amount = document.getElementById("amount").value;
  const conversionType = document.getElementById("conversion-type").value;
  const resultDiv = document.getElementById("result");

  if (amount === "") {
    resultDiv.innerText = "لطفاً مقداری وارد کنید.";
    return;
  }

   
  let result = 0;

  if (conversionType === "dollar-to-rial") {
    result = amount * dollar;
    resultDiv.innerText = `${amount} دلار = ${result.toLocaleString()} ریال`;
  } else {
    result = amount / dollar;
    resultDiv.innerText = `${amount} ریال = ${result.toFixed(4)} دلار`;
  }
}
