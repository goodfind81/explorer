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
export function roundToPlace(targetPlaceOrOpts, opts = {}) {
  // Support two calling conventions:
  //   1. roundToPlace("tenth")                     — positional
  //   2. roundToPlace({ place: "tenth", ...opts }) — options object
  let targetPlace;
  if (typeof targetPlaceOrOpts === "object" && targetPlaceOrOpts !== null) {
    targetPlace = targetPlaceOrOpts.place;
    opts = targetPlaceOrOpts;
  } else {
    targetPlace = targetPlaceOrOpts;
  }

  const mc = opts.multipleChoice !== false;
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
  const explanation = buildRoundingExplanation(value, targetPlace, answer);

  if (!mc) {
    return {
      question: `Round ${value} to the nearest ${placeLabel(targetPlace)}.`,
      answer: answer.toString(),
      explanation
    };
  }

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
   SKILL: Compare two decimals
   ========================================================== */

/**
 * Compare two decimals with <, >, or =.
 */
export function compareDecimals(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const a = generateDecimal(randInt(0, 3), randInt(0, 3));
  const b = generateDecimal(randInt(0, 3), randInt(0, 3));

  let answer;
  if (a < b) answer = "<";
  else if (a > b) answer = ">";
  else answer = "=";

  const explanation = `Line up the decimal points and compare digit by digit from left to right. ${a} ${answer} ${b}.`;

  if (!mc) {
    return {
      question: `Compare: ${a} ___ ${b}  (Write <, >, or =)`,
      answer,
      explanation
    };
  }

  const choices = shuffleArray(["<", ">", "="]).slice(0, 3);
  // Ensure answer is included
  if (!choices.includes(answer)) choices[0] = answer;
  return {
    question: `Which symbol makes this true?  ${a} ___ ${b}`,
    options: choices,
    correct: choices.indexOf(answer),
    explanation
  };
}

function generateDecimal(maxWholeDigits = 2, maxDecimalDigits = 3) {
  const whole = maxWholeDigits === 0 ? 0 : randInt(0, Math.pow(10, maxWholeDigits) - 1);
  const dCount = randInt(1, maxDecimalDigits);
  let decStr = "";
  for (let i = 0; i < dCount; i++) decStr += randInt(0, 9);
  return parseFloat(`${whole}.${decStr}`);
}

/* ==========================================================
   SKILL: Order decimals (least to greatest, greatest to least)
   ========================================================== */

export function orderDecimals(opts = {}) {
  const count = opts.count || 4;
  const direction = opts.direction || "least"; // "least" | "greatest"

  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(generateDecimal(2, 3));
  }
  const list = [...numbers];

  const sorted = [...list].sort((a, b) => a - b);
  const answer = direction === "least" ? sorted : sorted.reverse();

  const explanation = `${direction === "least" ? "Least to greatest" : "Greatest to least"}: line up the decimal points and compare digit by digit. ${answer.join(", ")}.`;

  return {
    question: `Order these from ${direction === "least" ? "least to greatest" : "greatest to least"}: ${list.join(", ")}`,
    answer: answer.join(", "),
    explanation
  };
}

/* ==========================================================
   SKILL: Add decimals
   ========================================================== */

export function addDecimals(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const termCount = opts.termCount || 2;
  const terms = [];
  for (let i = 0; i < termCount; i++) {
    terms.push(generateDecimal(3, 2));
  }

  const rawSum = terms.reduce((a, b) => a + b, 0);
  const answer = parseFloat(rawSum.toFixed(2));

  const formattedTerms = terms.map(t => t.toFixed(2)).join(" + ");
  const explanation = `Line up the decimal points and add: ${formattedTerms} = ${answer.toFixed(2)}.`;

  if (!mc) {
    return {
      question: `What is the sum?  ${formattedTerms}`,
      answer: answer.toFixed(2),
      explanation
    };
  }

  const wrongA = (answer + 0.1).toFixed(2);
  const wrongB = (answer - 0.01).toFixed(2);
  const wrongC = (answer + 1).toFixed(2);
  const choices = shuffleArray([answer.toFixed(2), wrongA, wrongB, wrongC]);
  return {
    question: `What is the sum?  ${formattedTerms}`,
    options: choices,
    correct: choices.indexOf(answer.toFixed(2)),
    explanation
  };
}

/* ==========================================================
   SKILL: Subtract decimals
   ========================================================== */

export function subtractDecimals(opts = {}) {
  const mc = opts.multipleChoice !== false;
  let a = generateDecimal(3, 2);
  let b = generateDecimal(3, 2);
  if (b > a) [a, b] = [b, a]; // ensure no negative result

  const answer = parseFloat((a - b).toFixed(2));
  const explanation = `Line up the decimal points and subtract: ${a.toFixed(2)} − ${b.toFixed(2)} = ${answer.toFixed(2)}.`;

  if (!mc) {
    return {
      question: `What is the difference?  ${a.toFixed(2)} − ${b.toFixed(2)}`,
      answer: answer.toFixed(2),
      explanation
    };
  }

  const wrongA = (answer + 0.1).toFixed(2);
  const wrongB = (answer - 0.01).toFixed(2);
  const wrongC = (answer + 1).toFixed(2);
  const choices = shuffleArray([answer.toFixed(2), wrongA, wrongB, wrongC]);
  return {
    question: `What is the difference?  ${a.toFixed(2)} − ${b.toFixed(2)}`,
    options: choices,
    correct: choices.indexOf(answer.toFixed(2)),
    explanation
  };
}

/* ==========================================================
   SKILL: Estimate sum by rounding each addend
   ========================================================== */

/**
 * Estimate a sum by rounding each addend to a target place,
 * then adding the rounded numbers.
 * @param {string} roundTo - "hundred" | "ten" | "whole" | "tenth"
 */
export function estimateSum(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const roundTo = opts.roundTo || "hundred";

  let a, b, roundedA, roundedB;
  if (roundTo === "hundred") {
    a = randInt(100, 899);
    b = randInt(100, 899);
    roundedA = Math.round(a / 100) * 100;
    roundedB = Math.round(b / 100) * 100;
  } else if (roundTo === "ten") {
    a = randInt(20, 899);
    b = randInt(20, 899);
    roundedA = Math.round(a / 10) * 10;
    roundedB = Math.round(b / 10) * 10;
  } else if (roundTo === "whole") {
    a = parseFloat((Math.random() * 200 + 10).toFixed(1));
    b = parseFloat((Math.random() * 200 + 10).toFixed(1));
    roundedA = Math.round(a);
    roundedB = Math.round(b);
  } else if (roundTo === "tenth") {
    a = parseFloat((Math.random() * 100 + 5).toFixed(2));
    b = parseFloat((Math.random() * 100 + 5).toFixed(2));
    roundedA = Math.round(a * 10) / 10;
    roundedB = Math.round(b * 10) / 10;
  }

  const estimate = roundedA + roundedB;
  const explanation = `Round each addend to the nearest ${roundTo}: ${a} → ${roundedA}, ${b} → ${roundedB}. Then add: ${roundedA} + ${roundedB} = ${estimate}.`;

  if (!mc) {
    return {
      question: `Estimate the sum by rounding each number to the nearest ${roundTo}: ${a} + ${b}`,
      answer: estimate.toString(),
      explanation
    };
  }

  const wrongA = estimate + (roundTo === "hundred" ? 100 : roundTo === "ten" ? 10 : 1);
  const wrongB = estimate - (roundTo === "hundred" ? 100 : roundTo === "ten" ? 10 : 1);
  const wrongC = a + b; // exact answer (not an estimate)
  const choices = shuffleArray([estimate.toString(), wrongA.toString(), wrongB.toString(), wrongC.toString()]);
  return {
    question: `Estimate the sum by rounding each number to the nearest ${roundTo}: ${a} + ${b}`,
    options: choices,
    correct: choices.indexOf(estimate.toString()),
    explanation
  };
}

/* ==========================================================
   SKILL: Estimate difference by rounding each number
   ========================================================== */

export function estimateDifference(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const roundTo = opts.roundTo || "thousand";

  let a, b, roundedA, roundedB;
  if (roundTo === "thousand") {
    a = randInt(2000, 9999);
    b = randInt(1000, a - 500);
    roundedA = Math.round(a / 1000) * 1000;
    roundedB = Math.round(b / 1000) * 1000;
  } else if (roundTo === "hundred") {
    a = randInt(200, 999);
    b = randInt(100, a - 50);
    roundedA = Math.round(a / 100) * 100;
    roundedB = Math.round(b / 100) * 100;
  } else if (roundTo === "whole") {
    a = parseFloat((Math.random() * 200 + 20).toFixed(1));
    b = parseFloat((Math.random() * 100 + 5).toFixed(1));
    roundedA = Math.round(a);
    roundedB = Math.round(b);
  }

  const estimate = roundedA - roundedB;
  const explanation = `Round each number to the nearest ${roundTo}: ${a} → ${roundedA}, ${b} → ${roundedB}. Then subtract: ${roundedA} − ${roundedB} = ${estimate}.`;

  if (!mc) {
    return {
      question: `Estimate the difference by rounding each number to the nearest ${roundTo}: ${a} − ${b}`,
      answer: estimate.toString(),
      explanation
    };
  }

  const wrongA = estimate + (roundTo === "thousand" ? 1000 : roundTo === "hundred" ? 100 : 1);
  const wrongB = estimate - (roundTo === "thousand" ? 1000 : roundTo === "hundred" ? 100 : 1);
  const wrongC = a - b;
  const choices = shuffleArray([estimate.toString(), wrongA.toString(), wrongB.toString(), wrongC.toString()]);
  return {
    question: `Estimate the difference by rounding each number to the nearest ${roundTo}: ${a} − ${b}`,
    options: choices,
    correct: choices.indexOf(estimate.toString()),
    explanation
  };
}

/* ==========================================================
   SKILL: Powers of 10 and exponents
   ========================================================== */

/**
 * Evaluate 10^n, or n × 10^m.
 */
export function powersOf10(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const variant = opts.variant || "evaluate"; // "evaluate" | "multiply" | "identify"

  if (variant === "evaluate") {
    const n = randInt(2, 7);
    const answer = Math.pow(10, n);
    const explanation = `10^${n} means 10 multiplied by itself ${n} times: ${Array(n).fill("10").join(" × ")} = ${formatNumber(answer)}.`;

    if (!mc) {
      return {
        question: `What is 10^${n} in standard form?`,
        answer: formatNumber(answer),
        explanation
      };
    }

    const wrongA = Math.pow(10, n - 1);
    const wrongB = Math.pow(10, n + 1);
    const wrongC = 10 * n;
    const choices = shuffleArray([
      formatNumber(answer),
      formatNumber(wrongA),
      formatNumber(wrongB),
      formatNumber(wrongC)
    ]);
    return {
      question: `What is 10^${n} in standard form?`,
      options: choices,
      correct: choices.indexOf(formatNumber(answer)),
      explanation
    };
  }

  if (variant === "multiply") {
    const base = randInt(2, 9);
    const n = randInt(1, 5);
    const answer = base * Math.pow(10, n);
    const explanation = `${base} × 10^${n} = ${base} followed by ${n} zeros = ${formatNumber(answer)}.`;

    if (!mc) {
      return {
        question: `What is ${base} × 10^${n}?`,
        answer: formatNumber(answer),
        explanation
      };
    }

    const wrongA = base * Math.pow(10, n - 1);
    const wrongB = base * Math.pow(10, n + 1);
    const wrongC = base + Math.pow(10, n);
    const choices = shuffleArray([
      formatNumber(answer),
      formatNumber(wrongA),
      formatNumber(wrongB),
      formatNumber(wrongC)
    ]);
    return {
      question: `What is ${base} × 10^${n}?`,
      options: choices,
      correct: choices.indexOf(formatNumber(answer)),
      explanation
    };
  }

  if (variant === "identify") {
    const n = randInt(3, 6);
    const value = Math.pow(10, n);
    const explanation = `${formatNumber(value)} has ${n} zeros, so it equals 10^${n}.`;

    if (!mc) {
      return {
        question: `Write ${formatNumber(value)} as a power of 10.`,
        answer: `10^${n}`,
        explanation
      };
    }

    const wrongA = `10^${n - 1}`;
    const wrongB = `10^${n + 1}`;
    const wrongC = `${n} × 10`;
    const choices = shuffleArray([`10^${n}`, wrongA, wrongB, wrongC]);
    return {
      question: `Which shows ${formatNumber(value)} as a power of 10?`,
      options: choices,
      correct: choices.indexOf(`10^${n}`),
      explanation
    };
  }
}

/* ==========================================================
   SKILL: Fraction ↔ Decimal
   ========================================================== */

/**
 * Convert between fractions with denominators 10, 100, 1,000
 * and decimals.
 * @param {string} direction - "toDecimal" | "toFraction"
 */
export function fractionDecimal(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const direction = opts.direction || "toDecimal";

  // Denominator
  const denom = pick([10, 100, 1000]);
  const places = denom === 10 ? 1 : denom === 100 ? 2 : 3;
  const numerator = randInt(1, denom - 1);

  if (direction === "toDecimal") {
    const decimalValue = (numerator / denom).toFixed(places);
    const explanation = `${numerator}/${denom} = ${decimalValue}. The denominator tells you how many decimal places: ${denom} → ${places} place${places > 1 ? "s" : ""}.`;

    if (!mc) {
      return {
        question: `Write the fraction ${numerator}/${formatNumber(denom)} as a decimal.`,
        answer: decimalValue,
        explanation
      };
    }

    const wrongA = (numerator / denom / 10).toFixed(places + 1);
    const wrongB = (numerator / denom * 10).toFixed(places);
    const wrongC = numerator.toString();
    const choices = shuffleArray([decimalValue, wrongA, wrongB, wrongC]);
    return {
      question: `Which decimal equals ${numerator}/${formatNumber(denom)}?`,
      options: choices,
      correct: choices.indexOf(decimalValue),
      explanation
    };
  }

  if (direction === "toFraction") {
    const decimalStr = `${numerator}`.padStart(places, "0");
    const decimalValue = parseFloat(`0.${decimalStr}`);
    const answer = `${numerator}/${formatNumber(denom)}`;
    const explanation = `The decimal ${decimalValue} has ${places} decimal place${places > 1 ? "s" : ""}, so the denominator is ${formatNumber(denom)}. The digits after the decimal point become the numerator: ${numerator}.`;

    if (!mc) {
      return {
        question: `Write ${decimalValue} as a fraction.`,
        answer,
        explanation
      };
    }

    const wrongDenom = denom === 10 ? 100 : denom === 100 ? 1000 : 10;
    const wrongA = `${numerator}/${formatNumber(wrongDenom)}`;
    const wrongB = `${numerator * 10}/${formatNumber(denom)}`;
    const wrongC = `${numerator}/${formatNumber(denom * 10)}`;
    const choices = shuffleArray([answer, wrongA, wrongB, wrongC]);
    return {
      question: `Which fraction equals ${decimalValue}?`,
      options: choices,
      correct: choices.indexOf(answer),
      explanation
    };
  }
}

/* ==========================================================
   SKILL: Identify place of a digit in a decimal
   ========================================================== */

/**
 * Example: "In 3.457, which digit is in the hundredths place?"
 */
export function identifyDecimalPlace(opts = {}) {
  const mc = opts.multipleChoice !== false;
  const whole = randInt(0, 99);
  const tenths = randInt(0, 9);
  const hundredths = randInt(0, 9);
  const thousandths = randInt(0, 9);

  const number = `${whole}.${tenths}${hundredths}${thousandths}`;
  const places = ["tenths", "hundredths", "thousandths"];
  const targetIdx = randInt(0, 2);
  const targetPlace = places[targetIdx];
  const targetDigit = [tenths, hundredths, thousandths][targetIdx];

  const explanation = `Starting from the decimal point and moving right: tenths, hundredths, thousandths. So the ${targetPlace} digit in ${number} is ${targetDigit}.`;

  if (!mc) {
    return {
      question: `In ${number}, what digit is in the ${targetPlace} place?`,
      answer: targetDigit.toString(),
      explanation
    };
  }

  const wrongA = (targetDigit + 1) % 10;
  const wrongB = (targetDigit + 2) % 10;
  const wrongC = (targetDigit + 3) % 10;
  const choices = shuffleArray([
    targetDigit.toString(),
    wrongA.toString(),
    wrongB.toString(),
    wrongC.toString()
  ]);
  return {
    question: `In ${number}, what digit is in the ${targetPlace} place?`,
    options: choices,
    correct: choices.indexOf(targetDigit.toString()),
    explanation
  };
}

/* ==========================================================
   Export the shuffle helper so other modules can use it.
   ========================================================== */

export { shuffleArray, formatNumber, randInt, pick };

/* ==========================================================
   SKILL: Estimate products
   Generates a multiplication problem (2-digit × 2-digit or 2-digit × 3-digit)
   and asks for the estimate by rounding.
   ========================================================== */

export function estimateProduct(opts = {}) {
  const mc = opts.multipleChoice !== false;

  // Pick factor sizes
  const aIsThreeDigit = Math.random() < 0.4;
  const a = aIsThreeDigit ? randInt(100, 999) : randInt(11, 99);
  const b = randInt(11, 99);

  // Round each to the leading digit
  const roundedA = roundToLeading(a);
  const roundedB = roundToLeading(b);
  const estimate = roundedA * roundedB;

  // Determine if it's an over/under estimate
  const overOrUnder = (roundedA >= a && roundedB >= b) ? "overestimate"
                   : (roundedA <= a && roundedB <= b) ? "underestimate"
                   : "close to actual";

  const explanation = `Round each factor: ${a} → ${roundedA}, ${b} → ${roundedB}. ${roundedA} × ${roundedB} = ${formatNumber(estimate)}. Since both rounded numbers are ${roundedA >= a && roundedB >= b ? "greater" : roundedA <= a && roundedB <= b ? "less" : "close to the originals"}, the estimate is ${overOrUnder}.`;

  if (!mc) {
    return {
      question: `Estimate ${a} × ${b} by rounding each factor.`,
      answer: formatNumber(estimate),
      explanation
    };
  }

  // Distractors
  const wrongA = formatNumber(estimate * 10);
  const wrongB = formatNumber(Math.round(estimate / 10));
  const wrongC = formatNumber(a * b);
  const choices = shuffleArray([formatNumber(estimate), wrongA, wrongB, wrongC]);
  return {
    question: `Estimate ${a} × ${b} by rounding each factor.`,
    options: choices,
    correct: choices.indexOf(formatNumber(estimate)),
    explanation
  };
}

function roundToLeading(n) {
  if (n < 10) return n;
  const digits = n.toString().length;
  const power = Math.pow(10, digits - 1);
  const leading = Math.round(n / power) * power;
  // Round to the nearest "nice" number (end with 0 or 5)
  if (leading % 10 !== 0) {
    return Math.round(leading / 5) * 5;
  }
  return leading;
}

/* ==========================================================
   SKILL: Multiply by 1-digit numbers
   Generates a multiplication problem with a 2, 3, or 4-digit
   factor times a 1-digit factor.
   ========================================================== */

export function multiplyByOneDigit(opts = {}) {
  const mc = opts.multipleChoice !== false;

  // Pick factor sizes with increasing difficulty
  const r = Math.random();
  let a;
  if (r < 0.4) {
    a = randInt(11, 99);        // 2-digit
  } else if (r < 0.8) {
    a = randInt(100, 999);      // 3-digit
  } else {
    a = randInt(1000, 9999);    // 4-digit
  }
  const b = randInt(2, 9);
  const product = a * b;

  const explanation = buildMultiplicationExplanation(a, b, product);

  if (!mc) {
    return {
      question: `Find ${a} × ${b}.`,
      answer: formatNumber(product),
      explanation
    };
  }

  // Distractors: common mistakes
  const wrongA = formatNumber(a * b + 10);
  const wrongB = formatNumber(a * b - 10);
  const wrongC = formatNumber(a * b + 100);
  const choices = shuffleArray([
    formatNumber(product),
    wrongA,
    wrongB,
    wrongC
  ]);
  return {
    question: `Find ${a} × ${b}.`,
    options: choices,
    correct: choices.indexOf(formatNumber(product)),
    explanation
  };
}

function buildMultiplicationExplanation(a, b, product) {
  const aStr = a.toString();
  const digits = aStr.split("").reverse();  // ones first
  const placeNames = ["ones", "tens", "hundreds", "thousands"];

  const steps = [];
  let carry = 0;

  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    const raw = digit * b + carry;
    const record = raw % 10;
    carry = Math.floor(raw / 10);
    steps.push(`• ${b} × ${digit} ${placeNames[i]} = ${raw}${carry > 0 ? ` → record ${record}, carry ${carry}` : ` → record ${record}`}`);
  }
  if (carry > 0) {
    steps.push(`• Final carry: ${carry}`);
  }
  steps.push(`Product: ${formatNumber(product)}`);
  return steps.join("\n");
}