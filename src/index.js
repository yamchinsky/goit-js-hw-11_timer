import './styles.css';

const refs = {
  strtNode: document.querySelector('[data-value="start"]'),
  stpNode: document.querySelector('[data-value="stop"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate, refs }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = refs;
    this.timer = document.querySelector(selector);
    this.timerId = null;
  }

  handleTimer() {
    if (this.timerId) {
      return;
    }

    let time = Date.now(this.targetDate);

    this.timerId = setInterval(() => {
      time -= 1000;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      this.prinOut(days, hours, mins, secs);
    }, 1000);
  }

  prinOut(days, hours, mins, secs) {
    this.timer.querySelector('[data-value="days"]').textContent = days;
    this.timer.querySelector('[data-value="hours"]').textContent = hours;
    this.timer.querySelector('[data-value="mins"]').textContent = mins;
    this.timer.querySelector('[data-value="secs"]').textContent = secs;
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.timerId = undefined;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
  refs: refs,
});

refs.strtNode.addEventListener('click', timer.handleTimer.bind(timer));

refs.stpNode.addEventListener('click', timer.stopTimer.bind(timer));
