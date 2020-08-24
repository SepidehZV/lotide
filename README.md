# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sepidehzv/lotide`

**Require it:**

`const _ = require('@sepidehzv/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: This function should take in a collection of items (as a string) and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about (as an object) and it will only count those, ignoring the others.
Items in our case will be limited to Strings.
* `findKey(obj,callback)`: This function is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
* `findKeyByValue(obj,value)`: It takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `head(array)`: It returns the first item in the array.
* `letterPositions(string)`: It will return all the indices (zero-based positions) in the string where each character is found.
* `map(array,callback)`:This function will take in two arguments:An array to map, and a callback function. The map function will return a new array based on the results of the callback function.
* `middle(array)`: The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.For arrays with one or two elements, there is no middle. Return an empty array. For arrays with odd number of elements, an array containing a single middle element should be returned. For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
* `tail(array)`: This function returns every element except the head (first element) of the array.
* `takeUntil(array, callback)`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(source,itemsToRemove)`:This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

