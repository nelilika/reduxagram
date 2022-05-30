import { TIME_START } from './constants';

function parseHoursToMinutes(time) {
  const [hours, minutes] = time.split(':');
  return (hours - TIME_START) * 60 + +minutes;
}

export { parseHoursToMinutes };
