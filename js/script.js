var myNodeList = document.getElementsByTagName('LI');
var i;

for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// click on a close button to hide the current FileList.
var close = document.getElementsByClassName('close');
var i;

// click on the close button to hide the current list item
for(i=0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

// Add a checked symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
},false);

// create a new list item when clicking on the add button

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('item').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue === '') {
        alert('this field can not be empty');
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('item').value = '';
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0; i< close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display='none';
        }
    }
}