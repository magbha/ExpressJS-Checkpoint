

function workingHours(req , res , next) {
    let date = new Date(); // current time
    let hours = date.getHours();
    let day = date.getDay();
    let openingDays = [1, 2, 3, 4 , 5];
    if (openingDays.includes( day ) && hours >= 9 && hours <= 17) {
        return next()
    }
    else {res.redirect("/errorpage")}
}

module.exports = workingHours