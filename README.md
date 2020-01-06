# Node-Profile
The PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

This application works in Node.js.  It will populate information from prompts and user input into the terminal, using the inquirer package, to create a Node-Profile using GitHub.  Once user provides their GitHub username and color (from choices provided), it will generate an HTML called 'profile.html' and the user can open the file to view their generated GitHub profile.  In this generated profile, it will collect the user profile image, name, location, bio, blog(profile), amount of repos, amount of followers, amount of starred repos, and amount of people they follow.  Each color shows a different layout of the page.  Once information is collected, the js file will convert the html file to a pdf file as the final product.
