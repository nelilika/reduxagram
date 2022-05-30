const listEvents = [
  {
    start: 0,
    duration: 15,
    title: 'Exercise',
    background: '#E2ECF5',
  },
  {
    start: 30,
    duration: 30,
    title: 'Plan day',
    background: '#E2ECF5',
  },
  {
    start: 25,
    duration: 30,
    title: 'Travel to work',
    background: '#E2ECF5',
  },

  {
    start: 60,
    duration: 15,
    title: 'Review yesterday`s commits',
    background: '#E2ECF5',
  },
  {
    start: 100,
    duration: 15,
    title: 'Code review',
    background: '#E2ECF5',
  },
  {
    start: 180,
    duration: 90,
    title: 'Have lucnh with John',
    background: '#E2ECF5',
  },
  {
    start: 370,
    duration: 45,
    title: 'Follow up with designer',
    background: '#E2ECF5',
  },
  {
    start: 360,
    duration: 30,
    title: 'Skype call',
    background: '#E2ECF5',
  },
  {
    start: 405,
    duration: 30,
    title: 'Push up banch',
    background: '#E2ECF5',
  },
];

class Event {
  static id = 1;

  constructor(obj) {
    this.id = Event.id++;
    this.start = obj.start;
    this.duration = obj.duration;
    this.title = obj.title;
    this.background = obj.background;
  }
}

let eventLists = listEvents.map((item) => new Event(item));

module.exports = () => {
  return { events: eventLists };
};
