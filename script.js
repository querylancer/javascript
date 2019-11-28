// DOM Selection

// document.getElementById() -> element

// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = 'Query Lancer';


// // doument.getElementsByTagName() -> HTMLCollections

// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++) {

// 	p[i].style.backgroundColor = 'lightblue';	

// }

// document.querySelector() -> element 
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'red';

// // document.querySelectorAll() -> semua element yang ada

// const p = document.querySelectorAll('p');
// 	for ( let i = 0; i < p.length; i++) {
// 		p[i].style.backgroundColor = 'lightblue';
// 	}

// p[2].style.backgroundColor = 'lightblue';

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';


