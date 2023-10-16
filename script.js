let countdown = 10;

let countDownStart = () => {
    if(countdown === 0){
        let result = document.getElementById("countdown");
        result.innerHTML = "Happy Independence Day";
        return;
    }
     let increase = document.getElementById("countdown");
     increase.innerHTML = countdown;
     countdown --;
     setTimeout(countDownStart, 1000);
}

countDownStart();