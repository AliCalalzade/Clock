let Saat = new Date()
let i = 1
const H1 = document.querySelector(".Saat")
const H = document.querySelector(".Secuntamer")
const links = document.querySelector(".menubar")
const windowPathname = window.location.pathname


for (let i = 0; i <= 3; i++) {
    if (links.children[i].href.includes(windowPathname)) {
        links.children[i].style.fontSize = "22px"
        links.children[i].style.color = "#fff"
        break
    }
}

let Seconds = setInterval(() => {
    // if (Saat.getMinutes() < 60) {
    //     if (Saat.getSeconds() + i < 60) {
    //         H1.textContent = (`${Saat.getHours()}:${Saat.getMinutes()}:${Saat.getSeconds() + i}`)
    //         i++;
    //     } else {
    //         i = 1
    //         Saat.setSeconds(0)
    //         Saat.setMinutes(Saat.getMinutes() + 1)
    //     }
    // } else {
    //     Saat.setHours(Saat.getHours() + 1)
    //     Saat.setMinutes(0)
    //     Saat.setSeconds(0)
    // }
    const date = new Date();
    H1.textContent = date.toLocaleTimeString("az");
}, 1000);
let shadow = setInterval(() => {
    document.querySelector(".saatkutu").style.boxShadow = "0px 0px 20px 1px yellow, 0px 0px 20px 1px yellow";

    setTimeout(() => {
        document.querySelector(".saatkutu").style.boxShadow = "0px 0px 10px 1px yellow, 0px 0px 10px 1px yellow";
    }, 400);

}, 800);

let hours = 0
let minute = 0
let Seconds1 = 0
const Secuntamer = () => {
    document.querySelector("#button3").addEventListener("click", () => {
        clearInterval(set)
        document.querySelector("#button2").style.display = "block"
        document.querySelector("#button3").style.display = "none"
        document.querySelector("#button2").textContent = "Resume"
    })
    document.querySelector("#button").addEventListener("click", () => {
        clearInterval(set)
        document.querySelector("audio").currentTime = 0;
        document.querySelector("audio").pause()
        document.querySelector("#hours").textContent = 0
        document.querySelector("#minute").textContent = 0
        document.querySelector("#seconds").textContent = 0
        hours = 0
        minute = 0
        Seconds1 = 0
        document.querySelector(".ayarla").style.display = "block"
        document.querySelector("#button2").textContent = "Start"
        document.querySelector(".saatkutu").style.display = "none"
        document.querySelector("#button").style.marginTop = "100px"
        document.querySelector("#button2").style.marginTop = "100px"
        document.querySelector("#button3").style.marginTop = "100px"
        document.querySelector("#button").style.opacity = "0.2";
        document.querySelector("#button").style.cursor = "not-allowed";
        document.querySelector("#button2").style.display = "block"
        document.querySelector("#button3").style.display = "none"
    })
    const set = setInterval(() => {
        if (H.textContent === "0:0:0") {
            cancel()
            clearInterval(set)
            document.querySelector(".ayarla").style.display = "block"
            document.querySelector("audio").play()
        } else {
            if (H.textContent === `${hours}:0:0`) {
                minute = 59
                Seconds1 = 59
                hours -= 1
                H.textContent = (`${hours}:${minute}:${Seconds1}`)
            } else {
                if (Seconds1 === 0) {
                    Seconds1 = 60
                    minute -= 1
                    Seconds1 -= 1
                    H.textContent = (`${hours}:${minute}:${Seconds1}`)
                } else {
                    Seconds1 -= 1
                    H.textContent = (`${hours}:${minute}:${Seconds1}`)
                }
            }
        }
    }, 1000);
}
function start() {
    H.textContent = (`${hours}:${minute}:${Seconds1}`)
    Secuntamer()
    document.querySelector(".ayarla").style.display = "none"
    document.querySelector(".saatkutu").style.display = "inline-block"
    document.querySelector("#button").style.marginTop = "50px"
    document.querySelector("#button2").style.marginTop = "50px"
    document.querySelector("#button3").style.marginTop = "50px"
    document.querySelector("#button").style.opacity = "1";
    document.querySelector("#button").style.cursor = "pointer";
    document.querySelector("#button2").style.display = "none"
    document.querySelector("#button3").style.display = "block"
    document.querySelector("audio").currentTime = 0;
    document.querySelector("audio").pause()
}
function cancel() {
    document.querySelector("#hours").textContent = 0
    document.querySelector("#minute").textContent = 0
    document.querySelector("#seconds").textContent = 0
    hours = 0
    minute = 0
    Seconds1 = 0
    document.querySelector("#button2").textContent = "Start"
    document.querySelector(".saatkutu").style.display = "none"
    document.querySelector("#button").style.marginTop = "100px"
    document.querySelector("#button2").style.marginTop = "100px"
    document.querySelector("#button3").style.marginTop = "100px"
    document.querySelector("#button").style.opacity = "0.2";
    document.querySelector("#button").style.cursor = "not-allowed";
    document.querySelector("#button2").style.display = "block"
    document.querySelector("#button3").style.display = "none"


}
document.querySelector(`.Az`).addEventListener("click", (e) => {
    if (e.target.previousElementSibling.textContent != "0") {
        e.target.previousElementSibling.textContent = e.target.previousElementSibling.textContent - 1
        hours -= 1
    }
})
document.querySelector(`.Az1`).addEventListener("click", (e) => {
    if (e.target.previousElementSibling.textContent != "0") {
        e.target.previousElementSibling.textContent = e.target.previousElementSibling.textContent - 1
        minute -= 1
    }
})
document.querySelector(`.Az2`).addEventListener("click", (e) => {
    if (e.target.previousElementSibling.textContent != "0") {
        e.target.previousElementSibling.textContent = e.target.previousElementSibling.textContent - 1
        Seconds1 -= 1
    }
})
document.querySelector(`.cok`).addEventListener("click", (e) => {
    if (e.target.previousElementSibling.previousElementSibling.textContent != "23") {
        e.target.previousElementSibling.previousElementSibling.textContent = Number(e.target.previousElementSibling.previousElementSibling.textContent) + 1
        hours += 1
    }
})
document.querySelector(`.cok1`).addEventListener("click", (e) => {
    if (e.target.previousElementSibling.previousElementSibling.textContent != "59") {
        e.target.previousElementSibling.previousElementSibling.textContent = Number(e.target.previousElementSibling.previousElementSibling.textContent) + 1
        minute += 1
    }
})
document.querySelector(`.cok2`).addEventListener("click", (e) => {
    if (e.target.previousElementSibling.previousElementSibling.textContent != "59") {
        e.target.previousElementSibling.previousElementSibling.textContent = Number(e.target.previousElementSibling.previousElementSibling.textContent) + 1
        Seconds1 += 1
    }
})



