# Group Array Elements

## What

A function which splits an array into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.

## Why

This is for a technical test. Pushing it to Github and NPM was not a requirement.

## Getting started

```sh
npm i group-array-elements
```

## How to use

```js
import groupArrayElements from 'group-array-elements'

groupArrayElements([1,2,3,4,5], 3)
// returns [[1,2], [3,4], [5]]
```
