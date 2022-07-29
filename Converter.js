function currencyConvert(){
    let amount = parseFloat(document.getElementById("amount").value);

    if(document.getElementById("usd").checked){
        alert((amount / 92).toFixed(2) +" Dollar");
    }

    else if(document.getElementById("rupee").checked){
        alert((amount * 0.84).toFixed(2) +" Rupee");
    }

    else if(document.getElementById("rupee").checked){
        alert((amount * 0.84).toFixed(2) +" Rupee");
    }

    else if(document.getElementById("yen").checked){
        alert((amount * 1.44).toFixed(2) +" Yen");
    }

    else if(document.getElementById("euro").checked){
        alert((amount / 96.48).toFixed(2) +" Euro");
    }
}