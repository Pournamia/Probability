const express = require("express");
const app = express();

function calculateProbability(no_of_sides) {
  const probabilities = [];
  const calculate = (side) => 1 - Math.pow((side - 1) / side, 2);

  if (!no_of_sides) {
    for (let side = 6; side <= 99; side++) {
      probabilities.push({ no_of_sides_of_die: side, probability_of_win: calculate(side) });
    }
  } else {
    probabilities.push({ no_of_sides_of_die:no_of_sides, probability_of_win: calculate(no_of_sides) });
  }
  return probabilities;
}

app.get("/probabilities", (req, res) => {
  const no_of_sides = parseInt(req.headers.k);
  const probabilities = calculateProbability(no_of_sides);
  res.json(probabilities);
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
