/* ==========================================================
   question-generators.js
   Procedural generators for math practice questions.
   Each generator returns an object:
     { question, answer, explanation, choices? }
   Some generators return multiple-choice (for quizzes),
   others return write-the-answer (for daily homework).

   Skills covered:
     - Place value identification
     - Expanded form (whole + decimals, with/without exponents)
     - Number names (word form)
     - Standard form
     - Compare decimals
     - Round decimals (whole, tenth, hundredth, hundred, thousand)
     - Add / subtract decimals
     - Estimate sums/differences
     - Powers of 10 / exponents
     - Fractions ↔ decimals

   Chapters import only the generators they need.
   ========================================================== */

/* ---------- Random helpers ---------- */

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatNumber(n) {
  // Adds commas to a whole number: 1234567 -> "1,234,567"
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* ==========================================================
   SKILL: Round to a place (whole number or decimal)
   Generates a decimal and asks for it rounded to a target place.
   ========================================================== */

/**
 * Round a decimal to a specific place.
 * @param {string} targetPlace - "whole" | "tenth" | "hundredth" | "hundred" | "thousand"
 * @param {object} opts - { multipleChoice: bool, difficulty: "easy"|"medium"|"hard" }
 */
export function roundToPlace(targetPlace, opts = {}) {
  const mc = opts.multipleChoice !== false; // default true
  const diff = opts.difficulty || "medium";

  // Generate a random decimal based on target place and difficulty
  let value;
  const placeValue = {
    "thousand":   { decimals: 0, maxWhole: 999999 },
    "hundred":    { decimals: 0, maxWhole: 99999 },
    "whole":      { decimals: randInt(1, 2), maxWhole: 999 },
    "tenth":      { decimals: 2, maxWhole: 999 },
    "hundredth":  { decimals: 3, maxWhole: 999 }
  }[targetPlace];

  if (!placeValue) throw new Error("Unknown target place: " + targetPlace);

  const wholePart = randInt(1, placeValue.maxWhole);
  let decimalPart = "";
  for (let i = 0; i < placeValue.decimals; i++) {
    decimalPart += randInt(0, 9);
  }
  value = decimalPart ? parseFloat(`${wholePart}.${decimalPart}`) : wholePart;

  const answer = roundNumber(value, targetPlace);

  // Explanation shows the rounding steps
  const explanation = buildRoundingExplanation(value, targetPlace, answer);

  if (!mc) {
    return {
      question: `Round ${value} to the nearest ${placeLabel(targetPlace)}.`,
      answer: answer.toString(),
      explanation
    };
  }

  // Multiple choice: correct answer + 3 distractors
  const choices = buildRoundingChoices(value, targetPlace, answer);
  const correctIdx = choices.indexOf(answer.toString());

  return {
    question: `Round ${value} to the nearest ${placeLabel(targetPlace)}.`,
    options: choices.map(c => c.toString()),
    correct: correctIdx === -1 ? 0 : correctIdx,
    explanation
  };
}

function roundNumber(value, place) {
  const factor = {
    "whole": 1,
    "tenth": 10,
    "hundredth": 100,
    "hundred": 0.01,
    "thousand": 0.001
  }[place];

  if (place === "whole") {
    return Math.round(value);
  } else if (place === "tenth" || place === "hundredth") {
    return Math.round(value * factor) / factor;
  } else {
    // hundred / thousand: factor is a divisor (0.01, 0.001)
    const divisor = place === "hundred" ? 100 : 1000;
    return Math.round(value / divisor) * divisor;
  }
}

function placeLabel(place) {
  return {
    "whole": "whole number",
    "tenth": "tenth",
    "hundredth": "hundredth",
    "hundred": "hundred",
    "thousand": "thousand"
  }[place];
}

function buildRoundingExplanation(value, place, answer) {
  const valueStr = value.toString();
  if (place === "whole") {
    const decimal = valueStr.split(".")[1] || "";
    const firstDecimal = decimal[0] || "0";
    const roundsUp = parseInt(firstDecimal) >= 5;
    return `Look at the digit after the decimal: ${firstDecimal}. ${roundsUp ? "Since it's 5 or more, round UP." : "Since it's less than 5, keep the whole number."} So ${value} rounds to ${answer}.`;
  }
  if (place === "tenth" || place === "hundredth") {
    const decimals = valueStr.split(".")[1] || "";
    const idx = place === "tenth" ? 1 : 2;
    const digitAfter = decimals[idx] || "0";
    const roundsUp = parseInt(digitAfter) >= 5;
    return `Look at the digit to the right of the ${place}s place: ${digitAfter}. ${roundsUp ? "Since it's 5 or more, round UP." : "Since it's less than 5, keep the same."} So ${value} rounds to ${answer}.`;
  }
  // hundred / thousand
  const divisor = place === "hundred" ? 100 : 1000;
  const remainder = value % divisor;
  const half = divisor / 2;
  const roundsUp = remainder >= half;
  return `Find the nearest ${place}: multiples of ${divisor} are ${Math.floor(value/divisor)*divisor} and ${Math.ceil(value/divisor)*divisor}. ${value} is closer to ${answer}.`;
}

function buildRoundingChoices(value, place, correctAnswer) {
  const wrongs = new Set();
  const correctStr = correctAnswer.toString();

  // Plausible wrong answers based on common mistakes
  const valueStr = value.toString();
  const decimals = valueStr.split(".")[1] || "";

  // Mistake 1: Round to a different place
  if (place === "tenth") {
    wrongs.add(roundNumber(value, "whole").toString());
    wrongs.add(roundNumber(value, "hundredth").toString());
  } else if (place === "hundredth") {
    wrongs.add(roundNumber(value, "tenth").toString());
  } else if (place === "whole") {
    wrongs.add(Math.floor(value).toString());
    wrongs.add(Math.ceil(value).toString());
  } else if (place === "hundred") {
    wrongs.add((Math.round(value / 10) * 10).toString());
    wrongs.add((Math.round(value / 1000) * 1000).toString());
  } else if (place === "thousand") {
    wrongs.add((Math.round(value / 100) * 100).toString());
  }

  // Mistake 2: Off by one in the rounding place
  const delta = place === "whole" ? 1 : (place === "tenth" ? 0.1 : place === "hundredth" ? 0.01 : (place === "hundred" ? 100 : 1000));
  wrongs.add((correctAnswer + delta).toString());
  wrongs.add((correctAnswer - delta).toString());

  wrongs.delete(correctStr);

  const wrongList = [...wrongs].slice(0, 3);
  return shuffleArray([correctStr, ...wrongList]);
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ==========================================================
   SKILL: Identify the value of a digit in a number
   ========================================================== */

/**
 * Ask for the value of a specific digit in a large number.
 * Example: "In 6,346,105, what is the value of the digit 4?"
 */
export function identifyDigitValue(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const digits = randInt(6, 9); // 6-9 digit number
  let numberStr = "";
  for (let i = 0; i < digits; i++) {
    const d = i === 0 ? randInt(1, 9) : randInt(0, 9);
    numberStr += d;
  }
  const number = parseInt(numberStr);
  const formatted = formatNumber(number);

  // Pick a digit position
  const targetIdx = randInt(0, digits - 1);
  const targetDigit = parseInt(numberStr[targetIdx]);
  const placeFromRight = digits - 1 - targetIdx;
  const placeValue = Math.pow(10, placeFromRight);
  const digitValue = targetDigit * placeValue;

  const placeName = [
    "ones", "tens", "hundreds", "thousands",
    "ten thousands", "hundred thousands",
    "millions", "ten millions", "hundred millions"
  ][placeFromRight];

  const explanation = `The digit ${targetDigit} is in the ${placeName} place. So its value is ${targetDigit} × ${formatNumber(placeValue)} = ${formatNumber(digitValue)}.`;

  if (!mc) {
    return {
      question: `In ${formatted}, what is the value of the digit ${targetDigit}?`,
      answer: formatNumber(digitValue),
      explanation
    };
  }

  const wrongs = new Set();
  wrongs.add(formatNumber(targetDigit));
  wrongs.add(formatNumber(targetDigit * Math.pow(10, placeFromRight + 1)));
  wrongs.add(formatNumber(targetDigit * Math.pow(10, Math.max(0, placeFromRight - 1))));
  wrongs.delete(formatNumber(digitValue));

  const choices = shuffleArray([
    formatNumber(digitValue),
    ...[...wrongs].slice(0, 3)
  ]);
  const correctIdx = choices.indexOf(formatNumber(digitValue));

  return {
    question: `In ${formatted}, what is the value of the digit ${targetDigit}?`,
    options: choices,
    correct: correctIdx,
    explanation
  };
}

/* ==========================================================
   SKILL: Write a number in expanded form (whole numbers, with exponents)
   ========================================================== */

/**
 * Write a large whole number in expanded form with exponents.
 * Example: 720,080 → (7×10⁵) + (2×10⁴) + (8×10¹)
 */
export function expandedFormWhole(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const digits = randInt(5, 7);
  let numberStr = "";
  for (let i = 0; i < digits; i++) {
    const d = i === 0 ? randInt(1, 9) : randInt(0, 9);
    numberStr += d;
  }
  const number = parseInt(numberStr);

  // Build expanded form (skip zeros)
  const terms = [];
  const values = [];
  for (let i = 0; i < digits; i++) {
    const d = parseInt(numberStr[i]);
    if (d === 0) continue;
    const exp = digits - 1 - i;
    terms.push(`(${d} × 10^${exp})`);
    values.push(d * Math.pow(10, exp));
  }

  const answer = terms.join(" + ");
  const explanation = `Each non-zero digit is multiplied by its place value. The digit in the 10^${digits-1} place has exponent ${digits-1}, the next has ${digits-2}, and so on.`;

  if (!mc) {
    return {
      question: `Write ${formatNumber(number)} in expanded form using exponents.`,
      answer: answer,
      explanation
    };
  }

  // Wrong choices
  const wrongA = values.join(" + "); // no exponents
  const wrongB = terms.slice().reverse().join(" + "); // reversed
  const wrongC = terms.map(t => t.replace(/10\^(\d+)/, (_, e) => `10^${parseInt(e)+1}`)).join(" + "); // off-by-one exponents

  const choices = shuffleArray([answer, wrongA, wrongB, wrongC]);
  const correctIdx = choices.indexOf(answer);

  return {
    question: `Write ${formatNumber(number)} in expanded form using exponents.`,
    options: choices,
    correct: correctIdx,
    explanation
  };
}

/* ==========================================================
   SKILL: Expanded form of a decimal
   ========================================================== */

/**
 * Example: 4.68 → (4 × 1) + (6 × 1/10) + (8 × 1/100)
 */
export function expandedFormDecimal(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const whole = randInt(0, 999);
  const tenths = randInt(0, 9);
  const hundredths = randInt(0, 9);
  const thousandths = opts.includeThousandths ? randInt(0, 9) : null;

  let decimalStr = `${whole}.${tenths}${hundredths}`;
  if (thousandths !== null) decimalStr += `${thousandths}`;
  const number = parseFloat(decimalStr);

  const terms = [];
  if (whole > 0) {
    const wholeStr = whole.toString();
    for (let i = 0; i < wholeStr.length; i++) {
      const d = parseInt(wholeStr[i]);
      if (d === 0) continue;
      const exp = wholeStr.length - 1 - i;
      terms.push(`(${d} × ${exp === 0 ? "1" : "10^" + exp})`);
    }
  }
  if (tenths > 0) terms.push(`(${tenths} × 1/10)`);
  if (hundredths > 0) terms.push(`(${hundredths} × 1/100)`);
  if (thousandths !== null && thousandths > 0) terms.push(`(${thousandths} × 1/1,000)`);

  const answer = terms.join(" + ");
  const explanation = `Each digit is multiplied by its place value. The digits after the decimal point use fractions: 1/10 for tenths, 1/100 for hundredths, 1/1,000 for thousandths.`;

  if (!mc) {
    return {
      question: `Write ${number} in expanded form.`,
      answer,
      explanation
    };
  }

  // Distractors
  const wrongA = terms.map(t => t.replace("1/10", "1/100").replace("1/100", "1/10")).join(" + ");
  const wrongB = terms.join(" × ");
  const wrongC = terms.slice().reverse().join(" + ");
  const choices = shuffleArray([answer, wrongA, wrongB, wrongC]);
  const correctIdx = choices.indexOf(answer);

  return {
    question: `Write ${number} in expanded form.`,
    options: choices,
    correct: correctIdx,
    explanation
  };
}

/* ==========================================================
   SKILL: Write a number name (word form)
   ========================================================== */

const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function threeDigitToWords(n) {
  if (n === 0) return "";
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 100) {
    const t = Math.floor(n / 10);
    const o = n % 10;
    return TENS[t] + (o > 0 ? "-" + ONES[o] : "");
  }
  const h = Math.floor(n / 100);
  const rest = n % 100;
  return ONES[h] + " hundred" + (rest > 0 ? " " + threeDigitToWords(rest) : "");
}

function wholeToWords(n) {
  if (n === 0) return "zero";
  const parts = [];
  const groups = ["", " thousand", " million", " billion"];
  let g = 0;
  while (n > 0) {
    const chunk = n % 1000;
    if (chunk > 0) {
      parts.unshift(threeDigitToWords(chunk) + groups[g]);
    }
    n = Math.floor(n / 1000);
    g++;
  }
  return parts.join(" ");
}

/**
 * Write a whole number in word form.
 */
export function numberNameWhole(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const number = randInt(10000, 99999999);
  const answer = wholeToWords(number);
  const explanation = `Break the number into groups (ones, thousands, millions) and name each group.`;

  if (!mc) {
    return {
      question: `Write ${formatNumber(number)} in word form.`,
      answer,
      explanation
    };
  }

  const wrongA = answer.replace("thousand", "hundred");
  const wrongB = answer.split(" ").reverse().join(" ");
  const wrongC = answer + " hundred";
  const choices = shuffleArray([answer, wrongA, wrongB, wrongC]);
  const correctIdx = choices.indexOf(answer);

  return {
    question: `Write ${formatNumber(number)} in word form.`,
    options: choices,
    correct: correctIdx,
    explanation
  };
}

/* ==========================================================
   SKILL: Write number name for a decimal
   ========================================================== */

/**
 * Example: 4.68 → "four and sixty-eight hundredths"
 */
export function numberNameDecimal(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const whole = randInt(0, 999);
  const tenths = randInt(0, 9);
  const hundredths = randInt(0, 9);
  const thousandths = opts.includeThousandths ? randInt(0, 9) : null;

  let decStr = `${tenths}${hundredths}${thousandths !== null ? thousandths : ""}`;
  const number = parseFloat(`${whole}.${decStr}`);

  const fracNum = parseInt(decStr);
  const denomName = thousandths !== null ? "thousandths"
    : hundredths > 0 ? "hundredths"
    : "tenths";

  const wholeName = whole > 0 ? wholeToWords(whole) : "";
  const fracName = wholeToWords(fracNum);

  const answer = (wholeName ? `${wholeName} and ` : "") + `${fracName} ${denomName}`;
  const explanation = `Say the whole-number part, then "and", then the fraction name. The last digit's place tells you the denominator: tenths, hundredths, or thousandths.`;

  if (!mc) {
    return {
      question: `Write ${number} in word form.`,
      answer,
      explanation
    };
  }

  const wrongA = (wholeName ? `${wholeName} and ` : "") + `${fracName} tenths`;
  const wrongB = (wholeName ? `${wholeName} and ` : "") + `${fracName} thousandths`;
  const wrongC = (wholeName ? `${wholeName} point ` : "") + `${fracName}`;
  const choices = shuffleArray([answer, wrongA, wrongB, wrongC]);
  const correctIdx = choices.indexOf(answer);

  return {
    question: `Write ${number} in word form.`,
    options: choices,
    correct: correctIdx,
    explanation
  };
}

/* ==========================================================
   SKILL: Write from words to standard form
   ========================================================== */

/**
 * Reverse of numberName — take words, produce the number.
 * (We generate a number, then describe it in words, and ask for standard form.)
 */
export function standardFromWords(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const number = randInt(10000, 99999999);
  const wordForm = wholeToWords(number);
  const answer = formatNumber(number);
  const explanation = `Align each word to its place: thousands, hundreds, tens, ones. ${wordForm} → ${formatNumber(number)}.`;

  if (!mc) {
    return {
      question: `Write "${wordForm}" in standard form.`,
      answer: answer.replace(/,/g, ""),
      explanation
    };
  }

  const wrongA = formatNumber(number * 10);
  const wrongB = formatNumber(Math.floor(number / 10));
  const wrongC = formatNumber(number + 100);
  const choices = shuffleArray([answer, wrongA, wrongB, wrongC]);
  const correctIdx = choices.indexOf(answer);

  return {
    question: `Write "${wordForm}" in standard form.`,
    options: choices,
    correct: correctIdx,
    explanation
  };
}

/* ==========================================================
   Export the shuffle helper so other modules can use it.
   ========================================================== */

export { shuffleArray, formatNumber, randInt, pick };