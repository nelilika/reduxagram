import '../styles/style.scss';
import './schedule';
import { URL } from './constants';
import renderEvents from './renderEvents';

async function start() {
  let events = [];
  try {
    const data = await fetch(URL);
    events = await data.json();

    renderEvents(events);
  } catch (err) {
    console.error(err);
  }
}

start();
