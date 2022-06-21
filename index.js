function calculate(select) {
    let n1=document.getElementById('f_number').value * 1;
    let n2=document.getElementById('s_number').value * 1;
    let fresult;
    switch(select) {
            case 1:
            fresult = n1 + n2;
            break;
            case 2:
            fresult = n1 - n2;
            break;
            case 3:
            fresult = n1 / n2;
            break;
            case 4:
            fresult = n1 * n2;
            break;
    }
    document.getElementById("Result").value = fresult;
}