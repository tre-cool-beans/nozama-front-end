## Nozama

An e-commerce site for a hypothetical luxury clothing purveyor created as a group project.

[Deployed Front End](https://tre-cool-beans.github.io/nozama-front-end/)

[Back End Repo](https://github.com/tre-cool-beans/nozama-back-end)
[Front End Repo](https://github.com/tre-cool-beans/nozama-front-end)

## Introduction

Nozama is an e-commerce application that uses LESS, jQuery, and Handlebars for the client-facing front end and MongoDB, Node.js, and Express.js for the backend api. Users can view individual products, add products to a cart, and then submit their order for processing. Payment authorization was created using stripe, while asynchronous functionality was implemented with JavaScript promises.

## Technologies Used

- Javascript, HTML, and CSS (LESS)
- jQuery
- Handlebars
- Node.js
- Express.js
- MongoDB
- Webpack
- Grunt

## Development Process

1. Research project requirements, technologies, and project ideas.
1. Create wireframes for website.
1. Write out user stories.
1. Begin coding.
1. Revisit list of necessary parts needed.
1. Revise code, spending time focusing on the requirements as opposed to interesting problems that are unimportant.
1. Once code is in a 'near-production' state, spend time working on testing as many possible use-cases as possible.
1. Once satisfied with completion of tests, remove all debugger, console.log, and other WIP code.
1. Deploy finalized project to GitHub Pages and test functionality again.
1. Write README file based off of notes.
1. Push final README to 'master' branch.

## Problem Solving Strategy

One of our most impressive moments as a group was realizing we had a front end bug that kept signing us out of our app. The bug was inconsistent and almost seemed as if it was part of a time-out function within our browser. We were still struggling to resolve it even after following event chains, timeboxing the problem, and submitting an issue, and Kira suggested we place the troubleshooting on hold and work on other things as a group. It was only after doing this that Yiannis realized that this "bug" was ocurring because we were all logging in with the same test account, and that it was actually a good thing that our code was robust enough to log a user out if they logged in elsewhere. Johnathan was the one that fixed the bug itself and pushed to the development branch and master branch that we ultimately deployed.

## Dependency Installation

We re-worked a template for this project and had to install LESS, Bootstrap-LESS, and LESS-loader. These can be installed by running `npm install -g less`, `npm install bootstrap-less`, and `npm install less-loader less --save-dev`, respectively.

## User Stories

Format: As a `user`, I can `thing`

- SEE PRODUCTS
    - As a browser, I can see all products on page load.
    - As a shopper, I can create an account and login.
- ADD ITEMS
    - As a shopper, I can change the password on my account.
    - As a shopper, I can sign out of my account.
    - As a shopper, I can have a cart of items to purchase.
    - As a shopper, only I can add items to my cart.
    - As a shopper, I can delete items from my cart.
    - As a shopper, I can modify the quanitites of items in my cart.
    - As a shopper, I can choose size of clothes.
- PURCHASE
    - As I shopper, I can purchase/checkout items in my cart.
- VIEW ORDERS
    - As a shopper, I can see a history of my past orders.

- STRETCH GOALS
    - As a browser, I can sort products by choosing different sorting options.

## ERD

```
User {
    _id,
    email,
    password,
    cart,
}
PastOrders {
    user_id,
    _id,
    [products in order],
    date purchased on,
    total_price
}
Products {
    _id,
    title,
    description,
    price,
    available sizes,
    image url,
    quantity,
    size,
}
```

## Wireframes

- [Landing Page](http://i.imgur.com/jHFFvFQ.png)
- [Product View](http://i.imgur.com/x8JdfPS.png)
- [Cart View](http://i.imgur.com/sjfSEpd.png)
- [Past Order](http://i.imgur.com/ZMrCZZo.png)
