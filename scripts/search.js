var textbooks = [{
  title: "Currents",
  author: "Tame Impala",
  class: ["EA1", "Math 240"],
  condition: "poor",
  price: 20.99,
  isbn13: "978-0321982384",
}, {
  title: "Currents",
  author: "Tame Impala",
  class: ["EA1", "Math 240"],
  condition: "poor",
  price: 20.99,
  isbn13: "978-0321982384",
}, {
  title: "Currents",
  author: "Tame Impala",
  class: ["EA1", "Math 240"],
  condition: "poor",
  price: 20.99,
  isbn13: "978-0321982384",
}, {
  title: "Currents",
  author: "Tame Impala",
  class: ["EA1", "Math 240"],
  condition: "poor",
  price: 20.99,
  isbn13: "978-0321982384",
}];

function buildTable() {
  var albumList = document.getElementById("table-list");
}

function buildAlbumList() {
  var albumList = document.getElementById("album-list"); //get the albumList which is the parent for what we are creating
  if (albumList != null) {
    for (var i = 0; i < albums.length; i++) {
      if (i % 2 == 0) { //when i is even we put the album on the left
        var rowDiv = document.createElement('div'); //we only create a row once per 2 albums
        rowDiv.classList.add('row_wrapper');
        albumList.appendChild(rowDiv); //append rowDiv to albumList
        var albumDiv = document.createElement('div');
        albumDiv.classList.add('albums-album-wrapper');
        albumDiv.classList.add('left');
      } else { //when i is even we put the album on the right
        var albumDiv = document.createElement('div');
        albumDiv.classList.add('albums-album-wrapper');
        albumDiv.classList.add('right');
      }
      rowDiv.appendChild(albumDiv); //append albumDiv to rowDiv
      var album = document.createElement("div");
      var contents = `
        <img src='${albums[i].cover}' class="albums-album-art">
        <p class="albums-album-name">${albums[i].title}</p>
        <p class="albums-artist-name">${albums[i].artist}</p>
      `; // The contents contain the album cover, name, and artist with manually inserted classes for each
      album.innerHTML = contents; //make the info of the album object which we created above the contents
      albumDiv.appendChild(album); //append album to albumDiv
    }
  }
}

$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
