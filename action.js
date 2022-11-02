function main() {
    //#1
    let grow = document.getElementById("#grow-me");
    grow.classList.add("big");

    //#2 
    let shrink = document.getElementById("#shrink-me")
    shrink.classList.remove("big");

    //#3
    let logs = document.querySelectorAll("#li");
    for(let log of logs){
        console.log(log)
    }

    //#4
    let link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerText= "somewhere";
    
    //#5
    let hidden= document.getElementById("#hide-me");
    hidden.style.display = "none";

    //#6
    let show = document.getElementById("#show-me");
    show.style.display = "block";

    //#7
    let nameinput = document.querrySelector("#name");
    let name = nameInput.value;
    console.log(name)

    let welcome = document.querrySelector("h1")
    welcome.innerText = "welcome" + name;








}