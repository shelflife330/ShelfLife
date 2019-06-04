var textbooks = [
  {
    title: "Linear Algebra and its Applications",
    author: "David C. Lay",
    class: [
      "EA1", "Math 240"
    ],
    condition: "Used-Good",
    price: 45,
    isbn13: "978-0321982384",
    img: "images/lay_LA.jpg"
  }, {
    title: "Short Guide to Writing About Art",
    author: "Sylvan Barnet",
    class: [
      "AH 101"
    ],
    condition: "Used-Good",
    price: 15,
    isbn13: "978-0205886999",
    img: "images/writing_about_art.jpg"
  }, {
    title: "Introductory Econometrics: A Modern Approach",
    author: "Jeffery Wooldridge",
    class: [
      "Math 386"
    ],
    condition: "New",
    price: 15,
    isbn13: "978-1111531041",
    img: "images/econometrics.jpg"
  }, {
    title: "Minds on trial: Great Cases in Law and Psychology",
    author: "Charles Patrick Ewing",
    class: [
      "Psych 340"
    ],
    condition: "Poor",
    price: 8,
    isbn13: "978-0195181760",
    img: "images/econometrics.jpg"
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: "Randal Bryant",
    class: [
      "EECS 213"
    ],
    condition: "Used-Good",
    price: 70,
    isbn13: "978-013409266",
    img: "images/econometrics.jpg"
  },
  {
    title: "Sociology: A Down-To-Earth Approach",
    author: "James M. Henslin",
    class: [
      "Soc 101"
    ],
    condition: "Poor",
    price: 40,
    isbn13: "978-0205096541",
    img: "images/econometrics.jpg"
  }
];

function buildTable() {
  var textbookList = document.getElementById("myTable");
  if (textbookList != null) {
    for (var i = 0; i < textbooks.length; i++) {
      var textbook = document.createElement("tr");
      let classes = "";

      //Format for relevant classes
      for (let j = 0; j < textbooks[i].class.length; j++) {
        if ((j+1) != textbooks[i].class.length) {
          classes = classes + textbooks[i].class[j] + ", "
        }
        else {
          classes = classes + textbooks[i].class[j]
        }
      }

      let id_name = "book-" + String(i);
      document.getElementsByTagName("tr")[i].setAttribute("id", id_name);

      var contents = `
        <tr>
        <td><a class='book-title-link' href='#'>${textbooks[i].title}</a></td>
        <td>${textbooks[i].author}</td>
        <td>${classes}</td>
        <td>${textbooks[i].price}</td>
        <td>${textbooks[i].isbn13}</td>
      </tr>
      `;

      textbookList.appendChild(textbook);
      textbook.innerHTML = contents;
      if (textbooks[i].title == "Introductory Econometrics: A Modern Approach") {
        document.getElementsByClassName('book-title-link')[2].href="BuyerBookPreview.html";
      }
    }
  }
}
buildTable();


/*function changeDisplay() {
  let str = document.getElementById("myInput").value;
  //console.log(!str || 0 === str.length);
  var display_str = "visible";
  if (!str || 0 === str.length) {
    display_str = "hidden";
  }
  document.getElementsByClassName('visibility')[0].style.display = display_str;
}*/


$(document).ready(function() {
  //$('#myTable tr').css("display", "none");
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    });
  });
});

/*
function filter() {
  var textbookList = document.getElementById("myTable");
  if (textbookList != null) {
    for (var i = 0; i < textbooks.length; i++) {
      let price = document.getElementById('price').value;
      var id_name = "book-" + String(i);
      if (textbooks[i].price > price) {
        //console.log("1: Max is: " + String(price) + " but the price is " + String(textbooks[i].price ));
        document.getElementById(id_name).style.display = "none";
      }
      else {
        //console.log("2: Max is: " + String(price) + " but the price is " + String(textbooks[i].price ));
        document.getElementById(id_name).style.display = "table-row";
      }
    }
  }
}*/
