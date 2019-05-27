var textbooks = [
  {
    title: "Linear Algebra and its Applications",
    author: "David C. Lay",
    class: [
      "EA1", "Math 240"
    ],
    condition: "Used-Good",
    price: 45,
    isbn13: "978-0321982384"
  }, {
    title: "Short Guide to Writing About Art",
    author: "Sylvan Barnet",
    class: [
      "AH 101"
    ],
    condition: "Used-Good",
    price: 15,
    isbn13: "978-0205886999"
  }, {
    title: "Introductory Econometrics: A Modern Approach",
    author: "Jeffery Wooldridge",
    class: [
      "Math 386"
    ],
    condition: "New",
    price: 15,
    isbn13: "978-1111531041"
  }, {
    title: "Minds on trial: Great Cases in Law and Psychology",
    author: "Charles Patrick Ewing",
    class: [
      "Psych 340"
    ],
    condition: "Poor",
    price: 8,
    isbn13: "978-0195181760"
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: "Randal Bryant",
    class: [
      "EECS 213"
    ],
    condition: "Used-Good",
    price: 70,
    isbn13: "978-013409266"
  },
  {
    title: "Sociology: A Down-To-Earth Approach",
    author: "James M. Henslin",
    class: [
      "Soc 101"
    ],
    condition: "Poor",
    price: 40,
    isbn13: "978-0205096541"
  }
];

function buildTable() {
  $.getJSON("json_files/textbooks.json", function(json) {
    console.log(json); // this will show the info it in firebug console
  });
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

      var contents = `
         <tr>
        <td>${textbooks[i].title}</td>
        <td>${textbooks[i].author}</td>
        <td>${classes}</td>
        <td>${textbooks[i].condition}</td>
        <td>${textbooks[i].price}</td>
        <td>${textbooks[i].isbn13}</td>
      </tr>
      `;
      textbook.innerHTML = contents;
      textbookList.appendChild(textbook);
    }
  }
}
buildTable();


$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
