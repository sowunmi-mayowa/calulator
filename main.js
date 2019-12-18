let inputLabel = document.querySelector("#inputLabel");

function pushBtn(obj){
    let pushed = obj.innerHTML;
    if(pushed == "="){
        inputLabel.innerHTML = eval(inputLabel.innerHTML)
    }else if(pushed == "AC"){
        inputLabel.innerHTML = "0";
    }else{
        if(inputLabel.innerHTML == "0"){
            inputLabel.innerHTML = pushed;
        }else{
            inputLabel.innerHTML += pushed;
        }
    }
}