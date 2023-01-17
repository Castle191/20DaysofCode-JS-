function calculateHCF() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var hcf = findHCF(num1, num2, num3);
    document.getElementById("result").innerHTML = "The HCF of " + num1 + ", " + num2 + ", and " + num3 + " is " + hcf + ".";
  }
  
  function findHCF(num1, num2, num3) {
    var min = Math.min(num1, num2, num3);
    for (var i = min; i > 0; i--) {
      if (num1 % i == 0 && num2 % i == 0 && num3 % i == 0) {
        return i;
      }
    }
  }
  