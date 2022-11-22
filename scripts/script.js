const clickButton = document.querySelector('.click-me');

// console.log(clickButton)
function clickedHandler(){
    alert("You clicked Me!")
}
clickButton.addEventListener('click', clickedHandler);

