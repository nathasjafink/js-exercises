/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// 1
const pElement = document.querySelectorAll("p");
console.log(pElement);

// 2
const divElement = document.querySelector(".site-header");
console.log(divElement);

// 3
const divElement2 = document.querySelector("#jumbotron-text");
console.log(divElement2);

// 4
const pPrimaryContent = document.querySelector(".primary-content").querySelectorAll("p");
console.log(pPrimaryContent);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click",function(){
    console.log(alert("Thanks for visiting Bikes for Refugees!"));
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeColourBottom = document.querySelector("#bgrChangeBtn");
changeColourBottom.addEventListener("click",function (){
    document.body.style.backgroundColor = "#8B0000";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addSomeTextBottom = document.querySelector("#addTextBtn");
addSomeTextBottom.addEventListener("click",function (){
    document.querySelector(".buttons").insertAdjacentHTML('afterend','<h2>Read more below</h2>')
});


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksBottom = document.querySelector("#largerLinksBtn");
largerLinksBottom.addEventListener("click",function (){
    document.querySelectorAll("a").forEach(function (link){
        link.style.fontSize = "larger";
    })
});

/* Exercise 6
When clicking the blue add button, take the text written in the input element, and add that text to the DOM.
The text should be added using ul and li
 */
const addButtom = document.querySelector("#addArticleBtn");

addButtom.addEventListener("click",function (){
    const input = document.querySelector(".addArticle").value;
    document.querySelector(".heading-underline").insertAdjacentHTML('beforebegin',"<ul class = 'ul' ></ul>");
    const liElement = document.createElement("li");
    liElement.innerText = input;
    document.querySelector(".ul").append(liElement);
})