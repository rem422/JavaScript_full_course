"use srtict"

const restaurant = {
    name: 'Classico Italiano',
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thur: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        thur: {
            open: 0, // open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);