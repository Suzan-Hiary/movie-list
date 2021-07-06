'use strict';

let form = document.getElementById('form');
let table = document.getElementById('table');


function Movies(name, path, year) {
    this.name = name;
    this.path = path;
    this.year = year;


    allmovies.push(this);
}

let allmovies = [];


function tableheader() {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = '#';

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'image';

    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = 'Name';

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Release';
}
tableheader();


Movies.prototype.render = function () {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'X';
    td.addEventListener('click' , remove);

    let td1 = document.createElement('img');
    tr.appendChild(td1);
    td1.src = this.path;
    td1.style.width = '100px';
    td1.style.height = '100px';

    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = this.name;

    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = this.year;
}


function eventhandle(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let year = event.target.year.value;
    let path;

    let selected = document.getElementById('select');
    let selectoption = selected.options[selected.selectedIndex].value;

    switch (selectoption.toLowerCase()) {
        case 'action':
            path = '/image/action.png';
            break;

        case 'adventure':
            path = '/image/action.png';
            break;

        case 'animation':
            path = '/image/animation.png';
            break;

        case 'comedy':
            path = '/image/comedy.png';
            break;

        case 'detective':
            path = '/image/detective.png';
            break;

        case 'fantasy':
            path = '/image/fantasy.png';
            break;

        case 'history':
            path = '/image/history.png';
            break;


        case 'horror':
            path = '/image/horror.png';
            break;

        case 'musical':
            path = '/image/musical.png';
            break;


        case 'pirate':
            path = '/image/pirate.png';
            break;

        case 'romantic':
            path = '/image/romantic.png';
            break;

        case 'sci-fi':
            path = '/image/sci-fi.png';
            break;

        case 'war':
            path = '/image/war.png';
            break;

        case 'western':
            path = '/image/western.png';
            break;

        default:
            break;


    }

    let newmovies = new Movies(name , path , year);
    newmovies.render();

     localStorage.setItem('movies-List' , JSON.stringify(allmovies));
}
form.addEventListener('submit' , eventhandle);


function getdata(){
    let listdata = JSON.parse(localStorage.getItem('movies-List')) ;

    if(listdata){
        for(let i=0 ; i< listdata.length ; i++){

            let newmovies = new Movies (listdata[i].name ,listdata[i].path ,listdata[i].year );
            newmovies.render();
            localStorage.setItem('movies-List', JSON.stringify(allmovies));
            
        }
    }
}

getdata();

function remove(event){
    if(event.target.textContent === 'X'){
        allmovies.splice( event.target.parentElement.id , 1);
        localStorage.setItem('movies-List' , JSON.stringify(allmovies));
        window.location.href = window.location.href ;
    }

}

function clear(event){
    if(event.target.textContent ==="Clear list"){
        allmovies.clear;
    }
}

let removed = document.getElementById('remove');

removed.addEventListener('click' , clear);