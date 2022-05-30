import { TIME_END, TIME_INTERVAL, TIME_START } from './constants';
import { parseHoursToMinutes } from './parser';

export default function (events) {
  const timesHTML = document.querySelectorAll('.event-wrap');

  for (let eventItem of events) {
    const minutesStart = TIME_START * 60 + eventItem.start;

    for (let i = 0; i < timesHTML.length; i++) {
      const timeSchedule = timesHTML[i].getAttribute('data-time');
      const minutesSchedule =
        TIME_START * 60 + parseHoursToMinutes(timeSchedule);

      if (
        minutesStart >= minutesSchedule &&
        minutesStart < minutesSchedule + TIME_INTERVAL
      ) {
        if (minutesStart - minutesSchedule < TIME_END) {
          appendEvent(
            eventItem,
            timesHTML[i],
            `${minutesStart - minutesSchedule}px`
          );
        } else {
          appendEvent(
            eventItem,
            timesHTML[i + 1],
            `-${(eventItem.duration - eventItem.start) * 2}px`
          );
        }
      }
    }
  }
}

function appendEvent(event, time, top) {
  const div = document.createElement('div');
  div.classList.add('event');
  div.innerHTML = `
    <div class="event-content">
      <span data-id=${event.id}>${event.title}</span>
    </div>
    <button class="btn delete__property" data-title="${event.title}">x</button>
  `;
  div.style.background = `${event.background}80`;
  div.style.borderLeft = `4px solid ${event.background}`;
  div.style.height = `${event.duration * 2}px`;
  div.style.top = top;

  time.append(div);
}
