function log() {

    var emeil1 = document.getElementById("email").value;
    var paroli = document.getElementById("password").value;


    if (emeil1 == "" || emeil1.lenght == 0) {
        window.alert("ჩაწერილი ელფოსტის ფორმატი არასწორია, გთხოვთ შეიყვანოთ ელფოსტა");
    } else if (paroli == "" || paroli.lenght < 6) {
        window.alert("შეყვანილი მონაცემები არასწორია, გთხოვთ შეიყვანეთ ელფოსტა");
    }


}