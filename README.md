# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



** About Projects:
1.This projects is about Health & Wealth Evant.Where we Are providing 6 cards such as Nutrition,Yoga,Wellness,Meditation,Fitness,Healthy Food.
** NavPart:

2.In the Nav Section where we are given details about us ,our achievements,some advice and tell about our bonding of our teams.
We gave some slide of our team and gave some banner in the banner part .User can not access without log in by gmail .
**LogIn:
3.If any User have not any account they can create an account .

**Contact:

4.User Can Access me From What's app,facebook & twitter.

**Footer:

5.At the End part we gave also a footer section.





###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>The provided JavaScript code declares a variable called greeting, assigns an empty object  to it, and then logs the empty object to the console using console.log(). The code demonstrates the basic concepts of variable declaration, object assignment, and console output in JavaScript.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D: `3`

<i>Because javaScript will convert all string in a int number. That is why string number '2' will convert in integer number as 2 then it will calculate 1+2=3 .3  will be the ans</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>In this case Ans will be the A: `['🍕', '🍫', '🥑', '🍔']` .if info was the array then  (🍝) will replace 0 index which is (🍕) . </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Here if we console the const sayHi it will return  `Hi there, undefined`. This is because name is not decleare any where in the function</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: 3

<i>This reason of that ans ,forEach() method iterates over the number array and callback function for each element in the array.the call back function checks if the element is greater then zero if it is it will incrimeant the count </i>

</p>
</details>

