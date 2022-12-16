1- Purpose of files
2- Component
3- State management inside component.
4- Life cycle
6- http request to an api
6- State management between different component (props, function/method as a props).
7- useContext (Centralized state management) /redux
7- routing

/login  => login form
/register => register form
/dashboard

register  login

AUTH FLOW

==========================
/register
show register form
name
email 
password

onsubmit => save this data in the local storage


redirect to the dashboard, where person's name will be shown

============================
/login
show login form
email
password

onsubit => find the user by email => if not exist => alert(USER NOT FOUND)
else
  match the password => if password is not correct => alert(INCORRECT PASSWORD)
else:
 redirect to dashboard, where person's name will be shown


