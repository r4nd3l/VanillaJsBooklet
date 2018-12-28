// Listen for form Submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  // Local Storage Test
  // localStorage.setItem('test', 'Hello world');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){

    // Init array
    var bookmarks = [];

    // Add to array
    bookmarks.push(bookmark);

    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarksResults
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete bookmarks
function deleteBookmark(url){
  // console.log(url);

  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Loop throught bookmarksResults
  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);

    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarksResults
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // console.log(bookmarks);


  // Get output
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="card card-body bg-light mb-1">'+
                                    '<h6 class="m-0">'+name+
                                    ' <a class="btn btn-info btn-sm" target="_blank" href="'+url+'">Visit</a> ' +
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger btn-sm" href="#">Delete</a> ' +
                                    '</h6>'+
                                    '</div>';
  }
}

function validateForm(siteName, siteUrl){
  // Validation
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  // Regex Validation
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please fill in  the form correctly!');
    return false;
  }

  // Clear form
  document.getElementById('myForm').reset();

  return true;
}
