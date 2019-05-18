# 14-Burger

# Node Express Handlebars
### Overview
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

### Read This
When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

### Important
* **This assignment must be deployed.** Be sure to utilize the [MYSQL Heroku Deployment Guide](../../03-Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

### Before You Begin
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* Your app will store every burger in a database, whether devoured or not.
* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

## Instructions
#### DB Setup
4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line
5. Now you're going to run these SQL files.
   * Make sure you're in the `db` folder of your app.
   * Start MySQL command line tool and login: `mysql -u root -p`.
   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.
   * Close out of the MySQL command line tool: `exit`.

#### Config Setup
#### Model setup
#### Controller setup
#### View setup
   * Create the `index.handlebars` file inside `views` directory.
   * Create the `layouts` directory inside `views` directory.
     * Create the `main.handlebars` file inside `layouts` directory.
     * Setup the `main.handlebars` file so it's able to be used by Handlebars.
     * Setup the `index.handlebars` to have the template that Handlebars can render onto.
     * Create a button in `index.handlebars` that will submit the user input into the database.