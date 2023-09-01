var btn = document.querySelector("#add");
var istatus = document.querySelector("h5");
var count = 0

btn.addEventListener("click",function(){
    if(count == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        count++
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "maroon" 
        btn.innerHTML = "Add Friend"
        count--
    }

    
})



