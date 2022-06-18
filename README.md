# React Router Vending Machine

Using the React Router to build a vending machine!

What does this mean? Your application should consist of the following:

- A _**VendingMachine**_ component, which shows a page with a list of snacks that you can get from the vending machine.
- At least three different snack components, each one corresponding to a vending machine snack.
- By clicking on an item in the _**VendingMachine**_ you can view one of things inside of the machine. Clicking should update the URL and show the snack that you’ve clicked on.
- From each snack component, you should be able to go back to the main _**VendingMachine**_ component.

[<img src="_images/vending-machine-demo.gif" width="700"/>](_images/vending-machine-demo.gif)

## Further Study

Add a second copy of the links to a site-wide navigation bar. This should show up at the top of each page. When you are already at that page, have it be bolder/darker in the navigation bar.

You may find [the docs](https://reacttraining.com/react-router/web/api/NavLink) for _**NavLink**_ helpful.

### Super Bonus

Allow the user to select between several story options before filling out their Madlib form.

## **How to Run**

    $ git clone https://github.com/cng008/41.1_react-router-vending-machine.git
    $ npm install
    $ npm start

Tests are run using Jest.
To run the tests in order:

    npm run test
