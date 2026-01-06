const lengthInput = document.getElementById("length");
const showLength = document.getElementById("showLength");
const generate = document.getElementById("generate");
const form = document.getElementById("form");
const genPass = document.getElementById("genPass");

showLength.textContent = lengthInput.value;

lengthInput.addEventListener("input", function() {
    showLength.textContent = this.value;
});

generate.addEventListener("click", function() {
    event.preventDefault();
   function getType() {
        var x = document.getElementsByName('passType');

        for (i = 0; i < x.length; i++) {
            if (x[i].checked) {
                return x[i].value;
            }
        }
   }

   const passLength = lengthInput.value;
   const passType = getType();


   if (passType == "num") {
        function randPass(length) {
            const char = "0123456789"
            let result = '';
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * char.length));
            }

            return result
        }
        
        genPass.textContent = "🎉 " + randPass(passLength) + " 🎉";
   }

    else if (passType == "alp") {
        function randPass(length) {
            const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            let result = '';
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * char.length));
            }

            return result
        }
        
        genPass.textContent = "🎉 " + randPass(passLength) + " 🎉";
   }

   else if (passType == "alpnum") {
        function randPass(length) {
            const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            let result = '';
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * char.length));
            }

            return result
        }
        
        genPass.textContent = "🎉 " + randPass(passLength) + " 🎉";
   } else {
    genPass.textContent = "Please Select Password Type 👎";
   }


});
