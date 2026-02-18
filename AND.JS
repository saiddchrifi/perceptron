// AND dataset
const data = [
  { inputs: [0, 0], target: 0 },
  { inputs: [0, 1], target: 0 },
  { inputs: [1, 0], target: 0 },
  { inputs: [1, 1], target: 1 }
];

// Initialize weights
let w1 = 0.0;
let w2 = 0.0;
let b = 0.0;

const learningRate = 0.1;

function step(x) {
  return x >= 0 ? 1 : 0;
}

// Training
for (let epoch = 0; epoch < 20; epoch++) {
  for (let { inputs, target } of data) {
    const [x1, x2] = inputs;

    const z = w1 * x1 + w2 * x2 + b;
    const prediction = step(z);

    const error = target - prediction;

    w1 += learningRate * error * x1;
    w2 += learningRate * error * x2;
    b  += learningRate * error;
  }
}

// Test
for (let { inputs } of data) {
  const [x1, x2] = inputs;
  const z = w1 * x1 + w2 * x2 + b;
  console.log(inputs, "->", step(z));
}
