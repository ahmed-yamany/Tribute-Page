const selectElement = (s) => document.querySelector(s);
// open
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
selectElement('.current').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
selectElement('.current1').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
selectElement('.current2').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
selectElement('.current3').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
selectElement('.current4').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
selectElement('.current5').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});