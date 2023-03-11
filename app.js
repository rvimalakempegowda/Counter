//set intial count
let count = 0;

//select value and buttons
let value = document.querySelector('#value');
let btns = document.querySelectorAll(".btn");

//console.log(btns);

btns.forEach(function(btn){
    //console.log(btn);
    btn.addEventListener('click',function(e){
        //console.log(e.currentTarget.classList);
        let styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('reset')){
            count=0;
        }
        else{
            count++;
        }
        if (count > 0){
            value.style.color = 'green';
        }
        if (count < 0){
            value.style.color = 'red';
        }
        if (count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    });

});