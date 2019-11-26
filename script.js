// DOM Selection

// document.getElementById() -> element

const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = "#ccc";
judul.innerHTML = 'Query Lancer';


// doument.getElementsByTagName() -> HTMLCollections

const p = document.getElementsByTagName('p');

for( let i = 0; i < p.length; i++) {

	p[i].style.backgroundColor = 'lightblue';	

}
