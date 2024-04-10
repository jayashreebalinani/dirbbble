//import React from 'react'
import Footer from './Footer'
import Home from './Home.js'
import './App.js'
export default function Select()
{
  

  var id = document.getElementById('home-divid')
  id.innerHTML=``

  // Create the center-screen div
const centerScreenDiv = document.createElement('div');
centerScreenDiv.classList.add('center-screen');

var img = document.createElement('img');
img.src= 'data:image/png;base64,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'
img.classList.add('class','icon')
id.append(img)
// Create the h1 element
const h1Element = document.createElement('h1');
h1Element.textContent = "What brings you to Dribbble?";
h1Element.style.textAlign='center'
h1Element.classList.add("highlight")
h1Element.style.marginTop = "50px"
centerScreenDiv.appendChild(h1Element);

// Create the paragraph element
const pElement = document.createElement('p');
pElement.textContent = "Select the option that best describes you. Don't worry, you can explore other options later.";
pElement.style.textAlign='center'
centerScreenDiv.appendChild(pElement);

// Create the flex container div
const flexContainerDiv = document.createElement('div');
flexContainerDiv.classList.add("flex-grid")
//flexContainerDiv.style.display = 'flex';
centerScreenDiv.appendChild(flexContainerDiv);

// Create user cards dynamically
const userData = [
  { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtozoCPY6uuzn75g0nyL8R380p2Cs-eXEuyq_a7vPbBzSypmu1zEqyh3QH-Nr1U8sfm8E&usqp=CAU", name: "   I'm a designer looking to share my work", description: "With over 7 miliion shots from a vast community of designers, Dribbble is the leading source for design inspriation." },
  { imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBIUECCjSE4xTdNbn-E0sCsP63uH-aMrXQjtk09ClrMzz1OfUn", name: "   I'm looking to hire a designer", description: "With over 7 miliion shots from a vast community of designers, Dribbble is the leading source for design inspriation." },
  { imgSrc: 'https://cdn.dribbble.com/users/255/screenshots/7887117/onboaring-inspiration_2x.png', name: "   I'm looking for design inspiration", description: "With over 7 miliion shots from a vast community of designers, Dribbble is the leading source for design inspriation." },
  // Add data for User 2 and User 3 if needed
];
userData.forEach(user => {
  // Create user card div
  const userCardDiv = document.createElement('div');
  userCardDiv.classList.add('col-sm')
  userCardDiv.classList.add('user-card');

  // Create image element
  const imgElement = document.createElement('img');
  imgElement.src = user.imgSrc;
  imgElement.alt = "img";
  userCardDiv.append(imgElement);

  // Create name element
  const strongElement = document.createElement('strong');
  strongElement.textContent = user.name;
  userCardDiv.append(document.createElement('br'),strongElement);

  // Create description paragraph element
  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = user.description;
  descriptionElement.style.fontSize = '15px'
  userCardDiv.appendChild(descriptionElement);

  // Create checkbox input element
  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.classList.add('hover-checkbox');
  userCardDiv.append(document.createElement('br'),checkboxElement);

  // Append user card to flex container
  flexContainerDiv.appendChild(userCardDiv);
});

var divfortext = document.createElement('div')
divfortext.classList.add("finsh-btn")

var text = document.createElement("p")
text.style.fontWeight='bold'
text.style.textAlign = 'center'
text.textContent='Anything else? You can select multiple'
//centerScreenDiv.append(text)
// Append the center-screen div to the body
var button = document.createElement("button");
button.textContent="Finish"
// Set class attribute
button.className = "btn btn-dark";

// Set onClick attribute
button.onclick =  Footer;
button.disabled = true
// Set style attribute
button.style.backgroundColor = "rgb(220, 68, 119)";
button.style.padding = "5px 75px 5px 75px";
button.style.border = "1px solid white";

// Append profile-section div to container div
const returnlink = document.createElement('a');
returnlink.classList.add('returnbutton');

returnlink.href = Home
divfortext.append(text,button,document.createElement('br'),returnlink)
centerScreenDiv.append(divfortext)
id.append(centerScreenDiv);

const checkboxes = document.querySelectorAll('.hover-checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        const userCard = event.target.closest('.user-card');
        const img = userCard.querySelector('img');
        const description = userCard.querySelector('.description');
        if (event.target.checked) {
           img.classList.add("hover")
            img.classList.add('hovered');
            button.disabled = false
            userCard.style.border = '2px solid rgb(225, 45, 126)'
            returnlink.textContent = "or Press RETURN";
            description.style.display = 'block';
        } else {
            img.classList.remove('hovered');
            img.classList.remove('hover')
            button.disabled = true
            returnlink.textContent = "";
            description.style.display = 'none';
            userCard.style.border = '1px solid grey'
        }
    });
});

      
}
