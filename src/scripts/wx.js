addEventListener("load", async () => {
    let airport = document.title.split(' ')[0].toLowerCase();
    let request = new XMLHttpRequest()
    request.open("GET", "https://testrepl.svalencia14.repl.co/metar/" + airport, false);
    request.send();
    let metarDiv = document.getElementById('metar');
    metarDiv.innerHTML = `<p>${request.response}</p>`;
    if (metarDiv.innerHTML == "<p></p>") {
        metarDiv.innerHTML = "<p>Failed to fetch</p>";
        console.error("Failed to fetch");
    }

    let htmlList = document.getElementById("runway-list");
    let runwayString = htmlList.innerText;
    runwayString = runwayString.replaceAll("\n", ",");
    runwayString = runwayString.replaceAll("/", ",");
    let runwayList = runwayString.split(",");

    let i = 0;
    let headingList = [];
    for (i in runwayList) {
        headingList[i] = runwayList[i].replace("L","");
        headingList[i] = headingList[i].replace("R","");
        headingList[i] = headingList[i] + "0";
    }

    let metar = document.getElementById("metar").innerText.split(" ");
    let winds = [
        metar[2].slice(0, 3),
        metar[2].slice(3).replace("KT", "")
    ]


    let selectedRunways = [];
    if (winds[1].toString().includes("G")) {
        //High winds
    } 
    else if (winds[1].toString().slice(0, 2) < 10 || winds[1].toString().slice(0, 2) == "VRB")  {
        let calmWind = document.querySelectorAll(".calmwind")
        if (calmWind.length > 1 || calmWind[0].innerText.includes("/")) {
            i = 0;
            for (i in calmWind) {
                selectedRunways.push(calmWind[i].innerText);
                calmWind[i].innerHTML = `${calmWind[i].innerText} - Recommended Runways | ${crosswinds(winds[0], winds[1], headingList[i])}`;
                console.log(crosswinds(winds[0], winds[1], headingList[i]))
            }
        } else {
            calmWind[0].innerHTML = `${calmWind[0].innerText} - Recommended Runway | ${crosswinds(winds[0], winds[1], headingList[0])}`;
        }
    }
    else {
        i = 0;
        let windDifference = [];
        for (i in headingList) {
            windDifference[i] = parseInt(headingList[i]) - winds[0];
            windDifference[i] = Math.abs(windDifference[i]);
        }
        let bestRunway = headingList[windDifference.indexOf(Math.min(...windDifference))];
        document.querySelector(`.r${bestRunway.toString()}`).innerHTML = document.querySelector(`.r${bestRunway.toString()}`).innerText + ` - Recommended Runway- ${runwayList[windDifference.indexOf(Math.min(...windDifference))]} | ${crosswinds(winds[0], winds[1], bestRunway)}`;
    };
});

function crosswinds(direction, velocity, runway) {
    let crosswind = direction - runway;
    if (crosswind == 0 || parseInt(velocity) == 0) {
        return "No crosswind";
    } else {
        if (crosswind > 0) {
            crosswind = "Right crosswind of " + velocity + " knots";
        } else if (crosswind < 0) {
            crosswind = "Left crosswind of " + velocity + " knots";
        }
        return crosswind;
    }
}
