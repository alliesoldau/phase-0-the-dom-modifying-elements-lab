// Write your code here!
let main = document.getElementById('main');
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = 'Allie is the champion';
document.body.append(newHeader);

