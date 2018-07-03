// function to call when profileButton is clicked
function searchUser() {
			let q = document.getElementById('query');
			let url = "http://www.reddit.com/user/" + q.value;
			window.open(url, "_blank");
			}
			
// event listener for click of profileButton
document.addEventListener('DOMContentLoaded', function() {
    var profileButton = document.getElementById('profileButton');
    // execute search function on click:
    profileButton.addEventListener('click', function() {
        searchUser();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var profileButton = document.getElementById('profileButton');
    // execute search function on click:
    profileButton.addEventListener('mouseover', function() {
        profileButton.innerHTML = "Click Here for ALL User Info";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var profileButton = document.getElementById('profileButton');
    // execute search function on click:
    profileButton.addEventListener('mouseleave', function() {
        profileButton.innerHTML = "User Profile";
    });
});

function searchPosts() {
            let q = document.getElementById('query');
            let url = "http://www.reddit.com/user/" + q.value + "/submitted/";
            window.open(url, "_blank");
            }
            
// event listener for click of postsButton
document.addEventListener('DOMContentLoaded', function() {
    var postsButton = document.getElementById('postsButton');
    // execute search function on click:
    postsButton.addEventListener('click', function() {
        searchPosts();
    });
});

function searchComments() {
            let q = document.getElementById('query');
            let url = "http://www.reddit.com/user/" + q.value + "/comments/";
            window.open(url, "_blank");
            }
            
// event listener for click of commentsButton
document.addEventListener('DOMContentLoaded', function() {
    var commentsButton = document.getElementById('commentsButton');
    // execute search function on click:
    commentsButton.addEventListener('click', function() {
        searchComments();
    });
});

function searchGilded() {
            let q = document.getElementById('query');
            let url = "http://www.reddit.com/user/" + q.value + "/gilded/";
            window.open(url, "_blank");
            }
            
// event listener for click of gildedButton
document.addEventListener('DOMContentLoaded', function() {
    var gildedButton = document.getElementById('gildedButton');
    // execute search function on click:
    gildedButton.addEventListener('click', function() {
        searchGilded();
    });
});

function searchTop() {
            let q = document.getElementById('query');
            let url = "http://www.reddit.com/user/" + q.value + "/?sort=top";
            window.open(url, "_blank");
            }
            
// event listener for click of topButton
document.addEventListener('DOMContentLoaded', function() {
    var topButton = document.getElementById('topButton');
    // execute search function on click:
    topButton.addEventListener('click', function() {
        searchTop();
    });
});


function sendMessage() {
            let q = document.getElementById('query');
            let url = "https://www.reddit.com/message/compose/?to=" + q.value;
            window.open(url, "_blank");
            }
            
// event listener for click of messageButton
document.addEventListener('DOMContentLoaded', function() {
    var messageButton = document.getElementById('messageButton');
    // execute search function on click:
    messageButton.addEventListener('click', function() {
        sendMessage();
    });
});