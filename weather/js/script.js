"use strict";
const url = `http://api.weatherstack.com/current`;
const accessKey = `d980918584d58c50725729c01653726e`;

fetch(`${url}?access_key=${accessKey}&query=Kharkiv`)
.then(res => res.json())
.then(res => console.log(res));