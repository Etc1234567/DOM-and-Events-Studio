// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const flightStatus = document.getElementById("flightStatus");
    background= document.getElementById("shuttleBackground");
    height= document.getElementById("spaceShuttleHeight");
    let rocketPositionLeft = 0;
    let rocketPositionUp = 0;
    rocket= document.getElementById("rocket");
    rocketVertical = 10000;

    function takeoff(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff");
        if(response){
            flightStatus.innerHTML = "Shuttle in flight";
            background.style.backgroundColor= "blue";
            height.innerHTML = 10000;
        }
    }

    function landing(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML= "The shuttle has landed."
        background.style.backgroundColor= "green";
        height.innerHTML = 0;
    }

    function abortMission(){
        let areYouSure = window.confirm("Confirm that you want to abort the mission");
        if (areYouSure){
            flightStatus.innerHTML = "Mission aborted";
            background.style.backgroundColor= "green";
            height.innerHTML = 0;
        }
    }

    document.addEventListener("click", function(event) {
        if (event.target.id === "left"){
            rocketPositionLeft -= 10;
            rocket.style.marginLeft = rocketPositionLeft + 'px';
        }

        if (event.target.id === "right"){
            rocketPositionLeft += 10;
            rocket.style.marginLeft = rocketPositionLeft + 'px';
        }

        if (event.target.id === "up"){
            rocketPositionUp += 10;
            rocket.style.marginBottom = rocketPositionUp + 'px';
            rocketVertical += 10000;
            height.innerHTML= rocketVertical;
        }

        if (event.target.id === "down"){
            rocketPositionUp -= 10;
            rocket.style.marginBottom = rocketPositionUp + 'px';
            rocketVertical -= 10000;
            height.innerHTML= rocketVertical;
        }
    });
    
    const takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", takeoff);

    const landButton = document.getElementById("landing");
    landButton.addEventListener("click", landing);

    const getOutOfHere = document.getElementById("missionAbort");
    getOutOfHere.addEventListener("click", abortMission);

});