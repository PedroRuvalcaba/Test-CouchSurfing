To begin, I did a little brainstorming to establish the acceptance criteria, I started with establishing how the login was going to work, since it is a crucial part of the project, I decided to implement a login where it is required, for greater security, a username, 
which is for this case, "addmin" and a password, which must be under the following criteria:

1.- Minimum length of 5 characters
2.- It must have at least one capital letter.
3.- It must have at least one lower case letter.
4.- Must have a number
5.- Must have a special character

Once the password criteria were established, I started with the main panel, which would be divided into two parts, one where a new user can be created and assigned a role, and the second, which will be where new roles will be created.


The acceptance criteria for the main panel are as follows:
1.- At the top it must have 2 buttons, one showing the creation of users and the other the creation of roles.
2.- In the user creation window, an input must be shown where the user enters the username and on the right side of the input there must be a button to be created.
3.- Below the user creation input, there must be a table where the name is related to the assigned roles.
4.- Below the table there must be two selects, one to select the username and the other the role that will be assigned, to the right side of both selects there must be a button that assigns the role to the user.
5.- When in the role creation window, there should be only one input where the name of the role is entered, to the right of the input there should be a button to add the role.
6.- The roles created must be listed in the role creation window, but they must be shown in the select in the user creation window.



I decided to add an input in which the user can add the username and, when clicking on “create”, the username is added to a small name-role relationship table.

Once the user has been created, the role must be created (if it has not been previously created) since it is from this list of roles that the role selector is taken for the user to be assigned.

To summarize, you must login to have access to the user control, create users, create roles and assign the roles created to any available user, each user can be assigned more than one role.
