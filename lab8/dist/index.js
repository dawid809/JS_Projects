/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function (e) {
    socket.send("Hello!");
};
socket.onmessage = function (event) {
    const msg = document.getElementById('messages');
    const item = document.createElement('li');
    item.textContent = event.data;
    msg?.appendChild(item);
};
document.getElementById('send').addEventListener('click', () => {
    socket.send(document.getElementById('msg').value);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFiOC8uL3NyYy9jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwXCIpO1xyXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHNvY2tldC5zZW5kKFwiSGVsbG8hXCIpO1xyXG59O1xyXG5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZXMnKTtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IGV2ZW50LmRhdGE7XHJcbiAgICBtc2c/LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG59O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc29ja2V0LnNlbmQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZycpLnZhbHVlKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==