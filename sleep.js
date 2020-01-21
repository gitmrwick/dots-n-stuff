let b0 = document.body;
let d0 = document.createElement("div");
let dragsource = null;

d0.id = "ouder";

function handleDragStart(e){
  this.style.opacity = '0.4';

  dragsource = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e){
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDragEnter(e){
  this.classList.add('over');
}

function handleDragLeave(e){
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropogation) {
    e.stopPropogation();
  }

  if (dragsource != this) {
    dragsource.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  js = document.querySelectorAll('.jongen');
  for (let x = js.length; x--;) {
    js[x].classList.remove('over');
  }
}

for (let x = 1; x <= 3; x++) {
  d = document.createElement("div");
  h = document.createElement("header");
  d.setAttribute('class', 'jongen');
  d.draggable = "true";
  h.innerText = "slepen d" + x;
  d.appendChild(h);
  d.addEventListener('dragstart', handleDragStart, false);
  d.addEventListener('dragenter', handleDragEnter, false);
  d.addEventListener('dragover', handleDragOver, false);
  d.addEventListener('dragleave', handleDragLeave, false);
  d.addEventListener('drop', handleDrop, false);
  d.addEventListener('dragend', handleDragEnd, false);
  d0.appendChild(d);
}


b0.append(d0);
