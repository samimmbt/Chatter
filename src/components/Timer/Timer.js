export function TimerHour(hour) {
    for (let index = 0; index < array.length; index++) {
        if (condition) {
            if (condition) {

            }
        }
    }
}

export function TimerMin(min, callback) {
    let sec = 59;
    const timer = setInterval(() => {   
        if (min === 0 && sec === 0) {
            clearInterval(timer);
            return;
        }
        if (sec === 0) {
            sec = 59;
            min--;
        } else {
            sec--;
        }
        callback(`${min}:${sec}`);
    }, 1000);
}

