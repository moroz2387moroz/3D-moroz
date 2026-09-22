const timer = (deadline) => {
  const timeHours = document.getElementById("timer-hours");
  const timeMinutes = document.getElementById("timer-minutes");
  const timeSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    const dateNow = new Date().getTime();
    const dateStop = new Date(deadline).getTime();
    const timeRemaining = Math.max(0, (dateStop - dateNow) / 1000);

    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor(timeRemaining / 3600);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    const { timeRemaining, hours, minutes, seconds } = getTimeRemaining();

    console.log("updateClock tick");

    if (timeRemaining <= 0) {
      timeHours.textContent = "00";
      timeMinutes.textContent = "00";
      timeSeconds.textContent = "00";
      clearInterval(timerId);
      return;
    }

    timeHours.textContent = String(hours).padStart(2, "0");
    timeMinutes.textContent = String(minutes).padStart(2, "0");
    timeSeconds.textContent = String(seconds).padStart(2, "0");
  };

  let timerId;
  updateClock();
  timerId = setInterval(updateClock, 1000);
};

export default timer;
