document.getElementById("fakeinput").focus(),
document.addEventListener("keydown", function(e) {
    const alert = document.getElementById("alert"),
          how = "How about using event.",
          ins = "instead?";
    e.preventDefault();

    document.body.classList.add("entered");

    document.getElementById("key").querySelector(".output").innerText = e.key;
    document.getElementById("location").querySelector(".output").innerText = e.location;
    document.getElementById("which").querySelector(".output").innerText = e.which;
    document.getElementById("code").querySelector(".output").innerText = e.code;

    " "===e.key
    ?(document.getElementById("key").querySelector(".output").classList.add("none"),document.getElementById("key").querySelector(".output").innerText="none")
    :(document.getElementById("key").querySelector(".output").classList.remove("none"),document.getElementById("key").querySelector(".output").innerText=e.key);

    e.altKey||e.ctrlKey||e.shiftKey||e.metaKey
    ?(
        e.altKey&&(alert.innerHTML=`${how}altKey ${ins}`),
        e.ctrlKey&&(alert.innerHTML=`${how}ctrlKey ${ins}`),
        e.shiftKey&&(alert.innerHTML=`${how}shiftKey ${ins}`),
        e.metaKey&&(alert.innerHTML=`${how}metaKey ${ins}`),
        alert.classList.add("sp")
    )
    :alert.classList.contains("sp")&&(
        alert.innerHTML="! event.keyCode or event.which should no longer be used. <a href='https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent' target='_blank'>(?)</a>",
        alert.classList.remove("sp")
    );


    switch(e.location) {
        case 0:
        document.getElementById("location").querySelector(".desc").innerText = "Standard Keys";
        break;
        case 1:
        document.getElementById("location").querySelector(".desc").innerText = "Left Keys"
        break;
        case 2:
        document.getElementById("location").querySelector(".desc").innerText = "Right Keys"
        break;
        case 3:
        document.getElementById("location").querySelector(".desc").innerText = "Numpad Keys"
        break;
    }
}),
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}),
Array.from(document.querySelectorAll(".copybtn")).forEach(a => {
    a.addEventListener("click", function() {
        const input = document.querySelector(`.${a.id}`),
              pop = document.getElementById("pop");

        pop.classList.remove("reveal");
        input.value = a.parentNode.querySelector(".output").innerText;
        input.select();
        document.execCommand("copy");
        pop.classList.add("reveal");
        setTimeout(function() {
            pop.classList.remove("reveal")
        }, 1000)
    })
})