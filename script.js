const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b9fa8a434f1cc25479d22ad70162bc57&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=b9fa8a434f1cc25479d22ad70162bc57&query=";

const  main = document.getElementById('section');
const  form = document.getElementById('form');
const  search = document.getElementById('query');

returnMovies(APILINK)

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');

            title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">reviews</a>`;
          
            image.src = IMG_PATH + element.poster_path;
          
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;
    
    if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    }
});



// COLOR THEME CHANGER
const toggle = document.getElementById('toggleDark');
const headOne = document.getElementById('headOne');
const headTwo = document.getElementById('headTwo');
const navbar = document.getElementById('nav-bar');
const login = document.getElementById('login');
const home = document.getElementById('home');
const body = document.querySelector('body');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'whitesmoke';
        toggle.style.color = '#FF5800';
        body.style.transition = '1s';
        headOne.style.color = '#D42374';
        headTwo.style.color = '#A1378B';
        form.style.background = '#bdb8b8';
        navbar.style.color = '#1c222c';
        login.style.color = '#1c222c';
        home.style.color = '#1c222c';
    }else{
        body.style.background = '#003A59';
        body.style.color = 'white';
        body.style.transition = '1s';
        headOne.style.color = '#787777';
        headTwo.style.color = '#fff';
        form.style.background = '#1c222c';
        toggle.style.color = '#ffff';
        navbar.style.color = '#ffff';
        login.style.color = '#ffff';
        home.style.color = '#ffff';
    }
});