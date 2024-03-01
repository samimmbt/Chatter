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
        callback(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }, 1000);
}

export function TimerSec(sec, callback) {
    const timer = setInterval(() => {
        if (sec === 0) {
            clearInterval(timer);
            return;
        }
        if (sec >= 0) {

            sec--
        }
        callback(`${sec}`);
    }, 1000);
}
