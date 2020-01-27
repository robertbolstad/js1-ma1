// question 1
const cat = {
    complain: function(){
        console.log("Meow!");
        
    }
};

cat.complain();

// question 2
const heading = document.querySelector("h3");


// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");

// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerText = "New paragraph";

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catArrayLoop(catArray) {
    for(let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}


catArrayLoop(cats);

// question 8
function catFunction(catArrayTwo) {
    let newHtml = "";

    for (let i = 0; i < catArrayTwo.length; i++) {
        newHtml += `<h5>${catArrayTwo[i].name}</h5>`;
    }

    return newHtml;
}


// question 9
resultsContainer.innerHTML = catFunction(cats);


// question 10
function catFunction(catArrayThree) {
    let moreHTML = "";

    for (let i = 0; i < catArrayThree.length; i++) {
       let age = "Age unknown";
       if (cats[i].age) {
           age = cats[i].age;
       }
        const htmlTagsWrapper = `<div>
                                    <h5>${catArrayThree[i].name}</h5>
                                    <p>${age}</p>
                                 </div>`;
      moreHTML += htmlTagsWrapper;
    }
    return moreHTML;
}
