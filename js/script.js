function getTimeRemaining(endtime) {
    var t = Date.parse(new Date()) -  1399914157;
    // var years = Math.floor(8);
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor(( t/(1000 * 60 * 60)) % 24);
    var days = Math.floor(t/(1000 * 60 * 60 * 24));
    return {
      'total': t,
      // 'years':years,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var yearsSpan = clock.querySelector('.years');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = ('0' + t.days).slice(-4);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      // yearsSpan.innerHTML = ('0' + t.hours).slice(-2);
  
      // if (t.total <= 0) {
      //   clearInterval(timeinterval);
      // }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
   var deadline = new Date(2019, 43 , 1 , 15, 00, 00);
  initializeClock('clockdiv', deadline);