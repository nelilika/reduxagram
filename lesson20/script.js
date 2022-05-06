const URL = 'https://jsonplaceholder.typicode.com/todos';
const STATUSES = {
  'OK': 200,
  'ERROR': 400,
}
// GET REQUEST EXAMPLE
{
  const request = new XMLHttpRequest();
  request.open('GET', `${URL}/45`);
  request.send();
  request.onload = () => {
    if (request.status === STATUSES.OK) {
      console.log(request);
      console.log(typeof request.response);
      const result = JSON.parse(request.response);
      console.log(result);
    }
  }
  request.onerror = () => {
    console.error('Error during sending request');
  }
}
// POST REQUEST EXAMPLE
const form = document.querySelector('#todoForm');

// Form Data
{
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
  
    const postRequest = new XMLHttpRequest();
    request.open('POST', URL);
  
    const formData = new FormData(document.forms.todo);
    formData.append('completed', false);
    request.send(formData);
  });
}

// JSON
{
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
  
    const postRequest = new XMLHttpRequest();
  
    postRequest.open('POST', URL);
    postRequest.setRequestHeader('Content-Type', 'aplication/json');
  
    let json = JSON.stringify({
      userId: document.forms.todo.userId.value,
      title: document.forms.todo.title.value,
      completed: false
    });
    postRequest.send(json);
  });
}

// FETCH GET
const request = fetch(`${URL}/45`);

request
  .then(res => res.json())
  .then(res => applyData(res))
  .catch(err => console.error);

function applyData(res) {
  const div = document.createElement('div');
  const pTitle = document.createElement('p');
  pTitle.textContent = res.title;
  const pUserId = document.createElement('p');
  pUserId.textContent = res.userId;
  div.append(pTitle);
  div.append(pUserId);
  form.after(div);
}

// FETCH POST
{
  form.addEventListener('submit', function (event) {
  event.preventDefault();
  const isSendAsJSON = document.forms.todo.json.checked;
  let request;

  if (isSendAsJSON) {
    const json = JSON.stringify({
      userId: document.forms.todo.userId.value,
      title: document.forms.todo.title.value,
      completed: false
    });
    const headers = {
      'Content-Type': 'application/json'
    };

    request = sendRequest(json, headers);
  } else {
    const formData = new FormData(document.forms.todo);
    formData.append('completed', false);

    request = sendRequest(formData);
  }

  request
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  });
}

function sendRequest(body, headers) {
  return fetch(URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers,
    body,
  });
}

// async / await
async function test() {
  const promise = Promise.resolve('Hello Im resolved promise');
  const result = await promise;
  console.log(result);
}
test();


/** Чистовик */ 
async function start() {

  async function submitData (event) {
    event.preventDefault();

    const { body, headers } = getRequestParams(document.forms.todo);
    const request = sendRequest(body, headers);

    try {
      const responce = await request;
      const data = await responce.json();

      console.log(data);
    } catch (err) {
      throw new Error('Please fix content type');
    }
  }

  function getRequestParams(form) {
    const isSendAsJSON = form.json.checked;

    if (isSendAsJSON) {
      const json = JSON.stringify({
        userId: document.forms.todo.userId.value,
        title: document.forms.todo.title.value,
        completed: false
      });
      const headers = {
        'Content-Type': 'application/json'
      };
      return { body: json, headers };
    }

    const formData = new FormData(document.forms.todo);
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    formData.append('completed', false);

    return { body: formData, headers };
  }

  function sendRequest(body, headers) {
    return fetch(URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers,
      body,
    });
  }

  form.addEventListener('submit', submitData);
}

start();