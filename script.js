const lyricsList = document.getElementById('lyrics-list');
    lyricsList.innerHTML = "";
    // search button
const button = document.getElementById('button')
button.addEventListener('click',function () {
    // Finding the value inside searchbox
    const searchBox = document.getElementById("search-box");
    const title = searchBox.value;

    // Finding artistName & title
fetch(`https://api.lyrics.ovh/suggest/${title}`)
.then(resp => resp.json())
.then( data => {
    
const nameAndTitle = data.data;
for (let i = 0; i < nameAndTitle.length; i++) {
    const artistNameAndTitle  = nameAndTitle[i];
    lyricsList.innerHTML += ` <div class="search-result col-md-8 mx-auto py-4">

    <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${artistNameAndTitle.title}</h3>
            <p class="author lead">Album by <span>${artistNameAndTitle.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
        <button onclick="getLyrics('${artistNameAndTitle.artist.name}', '${artistNameAndTitle.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
    </div>
    </div>`; 
        
}


})
})



// Finding lyrics

function getLyrics(artistName,title) {
    fetch(`https://api.lyrics.ovh/v1/${artistName}/${title}`)
.then(resp => resp.json())
.then(lyrics => {
   
    
    document.getElementById('lyrics').innerHTML = lyrics.lyrics;
    
})
}
