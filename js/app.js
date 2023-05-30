let form = document.forms['myForm']
form.onsubmit = (event)=>{
    event.preventDefault()
    
    let boy = form['boy'].value
    let girl = form['girl'].value

    let val = Math.round(Math.random()*100)
    let msg = `The amount of ${boy} and ${girl} love between the two ${val}%.`;
    

    let result = document.querySelector(".output")
    result.textContent = msg

    let photo = document.querySelector(".photo")
    photo.style.display = "block"
    if(val < 45) {
        photo.src= "img/sad.png"
    }else {
        photo.src= "img/heart.png"
    }
    document.getElementById("btn").style.display = "none"
}