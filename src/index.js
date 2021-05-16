import './styles.css';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      strtNode: document.querySelector('[data-value="start"]'),
      stpNode: document.querySelector('[data-value="stop"]'),
      timer: document.querySelector(selector),
    };
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
      this.refs.timer.querySelector('[data-value="days"]').textContent = days;
      this.refs.timer.querySelector('[data-value="hours"]').textContent = hours;
      this.refs.timer.querySelector('[data-value="mins"]').textContent = mins;
      this.refs.timer.querySelector('[data-value="secs"]').textContent = secs;
    }, 1000);
  }

  stopTimer() {
    clearInterval(timerId);
    timerId = undefined;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

timer.handleTimer();

strtNode.addEventListener('click', timer.handleTimer.bind(timer));

stpNode.addEventListener('click', timer.stopTimer.bind(timer));
