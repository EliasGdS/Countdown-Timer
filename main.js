var saved_timers = [];

window.addEventListener("load", () => {
    for (var i = 0; i <= localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i))) {
            let jsonObject = localStorage.getItem(localStorage.key(i));
            let obj = JSON.parse(jsonObject);
            saved_timers.push(obj);
            saved_timers[i].whole_date = new Date(saved_timers[i].whole_date);
            startCoutdown(saved_timers[i].event);
        }
    }
})

function validateTimer() {

    let event = document.getElementById("event").value;
    let year = document.getElementById("date").value.substring(0, 4);
    let month = document.getElementById("date").value.substring(5, 7);
    let day = document.getElementById("date").value.substring(8, 10);
    let hour = document.getElementById("time").value.substring(0, 2);
    let minute = document.getElementById("time").value.substring(3, 5);
    let whole_date = new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute);
    let now = new Date();

    if (event === "") {
        return alert("É preciso definir um nome para o temporizador.");
    }

    if (day === '' || month === '' || year === '')
        return alert("Data Inválida.");

    if (hour === '' && minute === '') {
        document.getElementById("time").value = "00:00";
    }

    if ((whole_date.getTime() - now.getTime()) < 0)
        return alert("Data Inválida.")

    for (var i = 0; i < saved_timers.length; i++) {
        if (saved_timers[i].event === event)
            return alert("Este temporizador já foi criado, use outro nome.")
    }
    return true;
}

function newTimer(event, year, month, day, hour, minute, whole_date, interval) {
    this.event = event;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.whole_date = whole_date;
    this.interval = interval;
}

function startCoutdown(event) {

    createCoutdownTimer(event);

    saved_timers.find(element => element.event === event).interval = setInterval(() => {
        let now = new Date();
        let expected_date = saved_timers.find(element => element.event === event).whole_date;
        let distance = expected_date.getTime() - now.getTime();

        let distance_day = Math.floor(distance / (1000 * 60 * 60 * 24));
        let distance_hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let distance_minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let distance_second = Math.floor((distance % (1000 * 60)) / 1000);

        if (now.getFullYear() === expected_date.getFullYear() && now.getMonth() === expected_date.getMonth() && now.getDate() === expected_date.getDate()
            && now.getHours() === expected_date.getHours() && now.getMinutes() === expected_date.getMinutes() && now.getSeconds() === expected_date.getSeconds()) {
            console.log("entrou");
            clearInterval(saved_timers.find(element => element.event === event).interval);
        }
        else {
            document.getElementById(event + "_days").setAttribute("value", distance_day);
            document.getElementById(event + "_hours").setAttribute("value", distance_hour);
            document.getElementById(event + "_minutes").setAttribute("value", distance_minute);
            document.getElementById(event + "_seconds").setAttribute("value", distance_second);
        }
    }, 1000);
}

function setTimer() {

    let event = document.getElementById("event").value;
    let year = document.getElementById("date").value.substring(0, 4);
    let month = document.getElementById("date").value.substring(5, 7);
    let day = document.getElementById("date").value.substring(8, 10);
    let hour = document.getElementById("time").value.substring(0, 2);
    let minute = document.getElementById("time").value.substring(3, 5);
    let whole_date = new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute);


    if (validateTimer()) {
        const timer = new newTimer(event, year, month, day, hour, minute, whole_date);
        saved_timers.push(timer);
        var jsonAux = JSON.stringify(saved_timers.find(element => element.event === event));
        localStorage.setItem(event, jsonAux);
        startCoutdown(event);
        clear_inputs();
    }
}

function createCoutdownTimer(event) {

    let new_div = document.createElement("div");
    new_div.setAttribute("id", event)
    new_div.style.border = "1px solid black";
    new_div.style.padding = "8px";

    let h3 = document.createElement("h3");
    h3.style.fontFamily = "monospace";
    h3.style.marginTop = "6px";
    h3.style.paddingTop = "0";

    let h3_text = document.createTextNode(event);

    let btn_delete = document.createElement("input");
    btn_delete.setAttribute("type", "button");
    btn_delete.setAttribute("class", "btn_delete");
    btn_delete.setAttribute("value", "X");
    btn_delete.setAttribute("onclick", "btn_delete(this)");

    let input_days_ramaining = document.createElement("input");
    input_days_ramaining.setAttribute("type", "text");
    input_days_ramaining.setAttribute("id", event + "_days");
    input_days_ramaining.setAttribute("readonly", "");
    input_days_ramaining.style.width = "35px";
    input_days_ramaining.style.marginRight = "2px";
    input_days_ramaining.style.color = "black";
    input_days_ramaining.style.outline = "none";
    input_days_ramaining.style.backgroundColor = "transparent";

    let label_days = document.createElement("label");
    let text_label_days = document.createTextNode(" Dias ");
    label_days.appendChild(text_label_days);

    let input_hours_ramaining = document.createElement("input");
    input_hours_ramaining.setAttribute("type", "text");
    input_hours_ramaining.setAttribute("id", event + "_hours");
    input_hours_ramaining.setAttribute("readonly", "");
    input_hours_ramaining.style.width = "17px";
    input_hours_ramaining.style.marginRight = "2px";
    input_hours_ramaining.style.color = "black";
    input_hours_ramaining.style.outline = "none";
    input_hours_ramaining.style.backgroundColor = "transparent";

    let label_hours = document.createElement("label");
    let text_label_hours = document.createTextNode("Horas ");
    label_hours.appendChild(text_label_hours);

    let input_minutes_ramaining = document.createElement("input");
    input_minutes_ramaining.setAttribute("type", "text");
    input_minutes_ramaining.setAttribute("id", event + "_minutes");
    input_minutes_ramaining.setAttribute("readonly", "");
    input_minutes_ramaining.style.width = "17px";
    input_minutes_ramaining.style.marginRight = "2px";
    input_minutes_ramaining.style.color = "black";
    input_minutes_ramaining.style.outline = "none";
    input_minutes_ramaining.style.backgroundColor = "transparent";

    let label_minutes = document.createElement("label");
    let text_label_minutes = document.createTextNode("Minutos ");
    label_minutes.appendChild(text_label_minutes)

    let input_seconds_ramaining = document.createElement("input");
    input_seconds_ramaining.setAttribute("type", "text");
    input_seconds_ramaining.setAttribute("id", event + "_seconds");
    input_seconds_ramaining.setAttribute("readonly", "");
    input_seconds_ramaining.style.width = "17px";
    input_seconds_ramaining.style.marginRight = "2px";
    input_seconds_ramaining.style.color = "black";
    input_seconds_ramaining.style.outline = "none";
    input_seconds_ramaining.style.backgroundColor = "transparent";

    let label_seconds = document.createElement("label");
    let text_label_seconds = document.createTextNode("Segundos");
    label_seconds.appendChild(text_label_seconds);

    new_div.appendChild(btn_delete);
    h3.appendChild(h3_text);
    new_div.appendChild(h3);

    new_div.appendChild(input_days_ramaining);
    new_div.appendChild(label_days);

    new_div.appendChild(input_hours_ramaining);
    new_div.appendChild(label_hours);

    new_div.appendChild(input_minutes_ramaining);
    new_div.appendChild(label_minutes);

    new_div.appendChild(input_seconds_ramaining);
    new_div.appendChild(label_seconds);

    document.getElementById("timers").appendChild(new_div);
}

function clear_inputs() {
    document.getElementById("event").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}

function btn_start() {
    setTimer();
}

function btn_delete(btn) {
    let event = btn.parentElement.id;

    for (var i = 0; i < saved_timers.length; i++) {
        if (saved_timers[i].event === event) {
            clearInterval(saved_timers[i].interval);
            saved_timers.splice(i, 1);
            localStorage.removeItem(event);
        }
    }

    document.getElementById(event).remove();

}
