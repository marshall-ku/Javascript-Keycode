document.addEventListener("keydown", function(e) {
    const alert = document.getElementById("alert"),
          how = "How about using event.",
          ins = "instead?",
          alt = e.altKey,
          ctrl = e.ctrlKey,
          shift = e.shiftKey,
          meta = e.metaKey,
          otp = ".output";
    e.preventDefault();

    document.body.classList.add("entered");

    document.getElementById("key").querySelector(otp).innerText = e.key;
    document.getElementById("location").querySelector(otp).innerText = e.location;
    document.getElementById("which").querySelector(otp).innerText = e.which;
    document.getElementById("code").querySelector(otp).innerText = e.code;

    " "===e.key
    ?(document.getElementById("key").querySelector(otp).classList.add("none"),document.getElementById("key").querySelector(otp).innerText="(blank)")
    :(document.getElementById("key").querySelector(otp).classList.remove("none"),document.getElementById("key").querySelector(otp).innerText=e.key);

    alt||ctrl||shift||meta||e.getModifierState("CapsLock")
    ?(e.getModifierState("CapsLock")
        ?(
            alert.innerHTML="!!! Caps lock is ON !!!",
            alert.classList.add("warning")
        )
        :(
            alt&&(alert.innerHTML=`${how}altKey ${ins}`),
            ctrl&&(alert.innerHTML=`${how}ctrlKey ${ins}`),
            shift&&(alert.innerHTML=`${how}shiftKey ${ins}`),
            meta&&(alert.innerHTML=`${how}metaKey ${ins}`),
            shift&&"Shift"!==e.key&&(alert.innerHTML=`You pressed the key with Shift. Only event.key will detects it.`),
            alert.classList.remove("warning")
        ),alert.classList.add("sp"))
    
    :alert.classList.contains("sp")&&(
        alert.innerHTML="! event.keyCode or event.which should no longer be used. <a href='https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent' target='_blank'>(?)</a>",
        alert.classList.remove("sp"),alert.classList.remove("warning")
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
        input.value = a.parentNode.querySelector(otp).innerText;
        input.select();
        document.execCommand("copy");
        pop.classList.add("reveal");
        setTimeout(function() {
            pop.classList.remove("reveal")
        }, 1000)
    })
})