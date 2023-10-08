function speedDetector (speed){
    if (speed<=70) {
        return "Okay"
    }else{
        let points= Math.ceil((speed -70)/5) //a demerit for every 5km/s above the speed limit
        if (points>12) {
        return "Your license is suspended"
    } else {
        return points
    }
    }
}
console.log (speedDetector(150))