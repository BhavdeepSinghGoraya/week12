const clickButton = document.querySelector('.click-me');

// console.log(clickButton)
function clickedHandler(){
    alert("You clicked Me!")
    // clickButton.removeEventListener('click', clickedHandler)
}
// clickButton.addEventListener('click', clickedHandler, {once:true});

function buttonDarkTheme(e){
    clickButton.classList.toggle('click-meDarktheme')
};
clickButton.addEventListener('click', buttonDarkTheme);
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


const image = document.querySelector('#shoppingCart')

function UpdateImage(e){
    image.setAttribute('src','Images/263142.png');
    image.setAttribute('alt','Shopping Cart Image');
    image.setAttribute('width','200');
    image.setAttribute('height','200')
}

clickButton.addEventListener("click",UpdateImage);

const buttonContainer = document.querySelector('.button-container')
// console.log(buttonContainer)

buttonContainer.addEventListener("mouseover", ChangeBGGreen)

function ChangeBGGreen(e)
{ if (e.target.tagName === 'BUTTON'){
    e.target.style.backgroundColor = "Green";
    
}}

buttonContainer.addEventListener("click", ChangeColor)

function ChangeColor(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.style.color = e.target.textContent
} }




