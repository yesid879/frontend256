//const url = 'http://localhost:7000/api/';
const url = 'https://backend256.onrender.com/';

function sendRequest(endPoint, method, data){
let request = new XMLHttpRequest();
request.open(method, url+endPoint);
request.responseType = 'json';
request.setRequestHeader('Content-Type', 'application/json');
request.send(data ? JSON.stringify(data): data);
return request
}
