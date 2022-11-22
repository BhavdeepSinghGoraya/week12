const clickButton = document.querySelector('.click-me');

// console.log(clickButton)
function clickedHandler(){
    alert("You clicked Me!")
    // clickButton.removeEventListener('click', clickedHandler)
}
// clickButton.addEventListener('click', clickedHandler, {once:true});

// function buttonDarkTheme(e){
//     clickButton.classList.add('click-meDarktheme')
// };
// clickButton.addEventListener('click', buttonDarkTheme);
// const textcontent = "Clicked!" 
function changeBGpink(){
    document.body.classList.toggle("pink")
};

function changeText(){
    if ( clickButton.textContent === "Click Me!"){
        clickButton.textContent = "Clicked!"
    }
    else{
        clickButton.textContent = "Click Me!"
    }
};

clickButton.addEventListener("click",changeBGpink);

clickButton.addEventListener("click",changeText);


// const image = document.querySelector('#shoppingCart')
// function Addimage(e){
    
// }
