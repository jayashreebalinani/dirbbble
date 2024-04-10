import './App.css'
import Home from './Home';
import Select from './Select';
export default function Profile()
{
  var img = document.createElement('img');
  img.src= 'data:image/png;base64,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'
  img.setAttribute('style', 'margin-left: 50px;');
  
var id = document.getElementById('home-divid')
id.innerHTML=''

var img1 = document.createElement('img');
  img1.src= 'data:image/png;base64,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'
  img1.classList.add("icon")
  
  id.append(img1)
// Create container div
const container = document.createElement('div');
container.classList.add('container');


// Create profile-section div
const profileSection = document.createElement('div');
profileSection.classList.add('profile-section');

// Create h1 element for the main heading
const mainHeading = document.createElement('h1');


// Create span element for the highlighted text
const highlightedText = document.createElement('span');
highlightedText.classList.add('highlight');
highlightedText.textContent = "Welcome! Let's create your profile";
mainHeading.appendChild(highlightedText);

// Append h1 element to profile-section div
profileSection.appendChild(mainHeading);

// Create p element for the grey text
const greyText = document.createElement('p');
greyText.classList.add('grey-text');
greyText.textContent = 'Let others know you better! You can do these later.';
profileSection.appendChild(greyText);

// Create h2 element for the "Add an avatar" heading
const avatarHeading = document.createElement('h4');
avatarHeading.textContent = 'Add an avatar';
avatarHeading.setAttribute('class','heading4')

profileSection.appendChild(avatarHeading);

// Create div for avatar container
const avatarContainer = document.createElement('div');
avatarContainer.classList.add('avatar-container');
profileSection.appendChild(avatarContainer);

// Create input element for file selection
const avatarInput = document.createElement('input');
avatarInput.setAttribute('type', 'file');
avatarInput.setAttribute('id', 'avatar-input');
avatarInput.setAttribute('accept', 'image/*');
avatarInput.style.display = 'none'; // Hide the input element
avatarContainer.appendChild(avatarInput);

// Create label for file input
const avatarLabel = document.createElement('label');
avatarLabel.setAttribute('for', 'avatar-input');
avatarLabel.classList.add('avatar-label');

// Create button for "Choose Image"
const chooseImageButton = document.createElement('button');
chooseImageButton.textContent = 'Choose Image';
chooseImageButton.setAttribute('id','choose-img-button')

// Append button to the label


// Create div for camera icon container
const cameraIconContainer = document.createElement('div');
cameraIconContainer.classList.add('camera-icon-container');

// Create img for camera icon
const cameraIcon = document.createElement('img');
cameraIcon.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkYH-x95dNhq9HYFlyjDp9AFzRZUIMf61RA&s');
cameraIcon.setAttribute('alt', 'Camera Icon');
cameraIcon.classList.add('camera-icon')

// Append camera icon to its container
cameraIconContainer.appendChild(cameraIcon);

// Append camera icon container to the label
//avatarLabel.appendChild(cameraIconContainer);

// Create div for avatar preview
const avatarPreview = document.createElement('div');
avatarPreview.setAttribute('id', 'avatar-preview');
avatarPreview.classList.add('avatar-preview');
avatarPreview.append(cameraIcon)
avatarContainer.append(avatarPreview,chooseImageButton);
//avatarLabel.appendChild(chooseImageButton);
// Append label to avatar container
avatarContainer.append(avatarLabel);


// Event listener for "Choose Image" button click
chooseImageButton.addEventListener('click', function() {
  avatarInput.click(); // Trigger file selection process when the button is clicked
});

// Event listener for avatar input change
avatarInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  button.disabled = false
  returnlink.textContent = "or Press RETURN";
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      avatarPreview.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    };
    reader.readAsDataURL(file);
  }
  
});

// Create h2 element for the "Add your location" heading
const locationHeading = document.createElement('h4');
locationHeading.textContent = 'Add your location';
locationHeading.setAttribute('class','heading4')
profileSection.appendChild(locationHeading);

// Create label for location input
const locationLabel = document.createElement('label');
locationLabel.setAttribute('for', 'location-input');
//locationLabel.textContent = 'Enter a location:';
profileSection.appendChild(locationLabel);

// Create input element for location
const locationInput = document.createElement('input');
locationInput.setAttribute('type', 'text');
locationInput.setAttribute('id', 'location-input');
locationInput.setAttribute('placeholder', 'Enter a location');
profileSection.appendChild(locationInput);

var button = document.createElement("button");
button.textContent="Next"
// Set class attribute
button.className = "btn btn-dark";

// Set onClick attribute
button.onclick =  Select;
button.disabled = true
// Set style attribute
button.style.backgroundColor = "rgb(220, 68, 119)";
button.style.padding = "5px 75px 5px 75px";
button.style.border = "1px solid white";

// Append profile-section div to container div
const returnlink = document.createElement('a');
returnlink.classList.add('returnbutton');
returnlink.textContent = "";
returnlink.href = Home
profileSection.append(button)
profileSection.append(document.createElement('br'))
profileSection.append(returnlink)
container.appendChild(profileSection);

// Append container div to the body
//document.body.appendChild(container);

// Append container div to the id
id.appendChild(container);


    return(
        <>
        </>
    )
 
  
}