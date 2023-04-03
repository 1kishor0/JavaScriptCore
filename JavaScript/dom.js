let val;
val=this;
val=window.document;
val=document.all;
val=document.all[1];
val=document.head;
val=document.body;
val=document.forms[0].method;
val=document.links[0].classList;
//console.log(val);

links=document.links;
let arrLink=Array.from(links);
arrLink.forEach(function(link){
    console.log(link);
});
// console.log(links);

//Dom Selector
val=document.getElementById("document-title");
val=document.getElementById("document-title").style.backgroundColor="red";
console.log(val);
//changing content
document.getElementById("document-title").textContent='New title';

document.getElementById("document-title").textContent='New title';
document.getElementById("document-title").innerText='<i> New title </i>';
document.getElementById("document-title").innerHTML='<i> New title </i>';
//document query selector
val=document.querySelector('#document-title').innerText="Hello";
val=document.querySelector('ol li');
val.style.backgroundColor='red';
val.style.color='white';
val=document.querySelector('li:last-child');
val=document.querySelector('li:nth-child(2)').innerText="Ruby";
console.log(1234);
console.log(val);
//multi selector
let list=document.getElementsByClassName('sample-class');
list=document.querySelector('ol').getElementsByTagName('li');
console.log(list[1].style.backgroundColor='purple');


let lis=Array.from(list);
lis.forEach(function(item){
        console.log(item);
})
list=document.querySelectorAll('.sample-class');
list.forEach(function(item){
    console.log(item);
})
console.log(list);
//traversing the dom
let selects;
let selectList=document.querySelector('ul');
let listItem=document.querySelector('ul li');
val=selectList;
console.log(val);
//val=listItem;
//get the child node
val=selectList.childNodes[1].nodeName;
val=selectList.children[1].textContent="Hello";
val=selectList.children[0].children[0].href;
val=selectList.firstChild;
val=selectList.firstElementChild;
val=selectList.lastChild;
val=selectList.lastElementChild;
val=selectList.childElementCount;

val=listItem.parentNode.parentNode;
val=listItem.nextSibling.nextSibling;
val=listItem.nextElementSibling;
console.log(val);
//Create Element

let olItem=document.createElement('li');
olItem.className="another-class";
olItem.id="another-id"

//add attrbute
olItem.setAttribute('title','Atitle to new element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem);
console.log(olItem);
//for unordered list
let ulItem=document.createElement('li')
var link=document.createElement('a');
ulItem.className="unordered-class";
ulItem.id="unordered-id";
console.log(ulItem);
//add attribute
link.setAttribute('href','www.leetcode.com');
link.appendChild(document.createTextNode('LeetCode'));
ulItem.appendChild(link)
document.querySelector('ul').appendChild(ulItem);

//replacing element

let newHeading=document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 new Heading'));
newHeading.className="sampleclasss";
let oldHeading=document.querySelector('h3');
let parent=document.querySelector(".container");
//parent=oldHeading.parentElement;
parent.replaceChild(newHeading,oldHeading);
console.log(parent);

//Remove an element
let listItems=document.querySelectorAll('li');
list=document.querySelector('ul');
//listItems[0].remove();

//remove by calling child
list.removeChild(listItems[5]);
console.log(listItems);
console.log(list);
//check attribute
console.log(list.hasAttribute('title'));




