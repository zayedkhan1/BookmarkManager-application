Live website Link:  https://smartbookmarks.netlify.app/login

# Working Flow (User Journey)
🧑 First Visit
User lands on /login

Enters a username

App creates a new localStorage key for that user

Redirects to /home

🔐 After Login
App loads bookmarks from localStorage using key bookmarks_{username}

UI shows bookmarks with filtering, editing, deleting features

Tags are dynamically generated

🌓 Theme Toggle
User toggles dark/light mode

Class dark is added or removed from <html>

Mode is saved in localStorage

🔚 Logout
Clears auth_user

Redirects back to /login
