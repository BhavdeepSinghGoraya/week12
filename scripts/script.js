const clickButton = document.querySelector('.click-me');

// console.log(clickButton)
function clickedHandler(){
    alert("You clicked Me!")
    // clickButton.removeEventListener('click', clickedHandler)
}
clickButton.addEventListener('click', clickedHandler, {once:true});

