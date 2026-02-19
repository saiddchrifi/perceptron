# Perceptron – AND Logic

## Project Description

This project is a simple implementation of a perceptron in JavaScript.  
The perceptron learns the AND logic with two inputs (x1 and x2).

After training, the model can calculate the correct output for the AND function.

---

## How Does the Model Work?

The perceptron uses this mathematical formula:

z = w1 · x1 + w2 · x2 + b

After that, a step function is applied:

- If z ≥ 0 → Output = 1  
- If z < 0 → Output = 0  

The model learns through repetition (training over multiple iterations).

The weights and bias are adjusted using an error value.

---

## Technologies

- JavaScript (ES6)
- Console (console.log)

---

## Training Data (AND Logic)

| x1 | x2 | Output |
|----|----|---------|
| 0  | 0  | 0 |
| 0  | 1  | 0 |
| 1  | 0  | 0 |
| 1  | 1  | 1 |


