// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Retrieve stored chapters; if none exist, initialize with an empty array.
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters from localStorage
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event to add a new chapter
button.addEventListener('click', () => {
  if (input.value !== '') {  // Only proceed if the input is not empty
    displayList(input.value);      // Display the new chapter in the list
    chaptersArray.push(input.value);  // Add the new chapter to the array
    setChapterList();              // Update localStorage with the new array
    input.value = '';              // Clear the input field
    input.focus();                 // Set focus back to the input
  }
});

/**
 * displayList()
 * Builds a new list item (li) with a delete button and appends it to the list.
 */
function displayList(item) {
  // Create a new list item and delete button
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  
  // Set the content of the list item and the delete button
  li.textContent = item;          // Use the provided item
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');  // Apply the .delete CSS rule
  
  // Append the delete button to the list item, then append the list item to the list
  li.append(deletebutton);
  list.append(li);
  
  // Add an event listener to the delete button to remove the chapter when clicked
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);  // Remove the chapter from the array and update localStorage
    input.focus();                  // Set the focus back to the input
  });
  
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

/**
 * setChapterList()
 * Updates the localStorage item with the current chaptersArray.
 */
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

/**
 * getChapterList()
 * Retrieves and parses the localStorage item for chapters.
 */
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

/**
 * deleteChapter()
 * Removes the chapter from chaptersArray and updates localStorage.
 * @param {string} chapter - The chapter string (with the delete icon at the end) to remove.
 */
function deleteChapter(chapter) {
  // Remove the last character (the delete icon ❌) from the chapter string
  chapter = chapter.slice(0, chapter.length - 1);
  
  // Filter the array to exclude the chapter to be removed
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  
  // Update localStorage with the new array
  setChapterList();
}
