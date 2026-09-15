/* ==========================================================
   Math subject registry.
   This file is the ONLY place that knows which chapters
   belong to Math. Adding a new chapter = import it here
   and add it to the `chapters` array.
   ========================================================== */

import { chapter as ch1 } from "./chapter-01-patterns-exponents.js";
import { chapter as ch2 } from "./chapter-02-whole-number-place-value.js";
import { chapter as ch3 } from "./chapter-03-decimals-thousandths.js";
import { chapter as ch4 } from "./chapter-04-decimal-place-value.js";
import { chapter as ch5 } from "./chapter-05-compare-decimals.js";
import { chapter as ch6 } from "./chapter-06-round-decimals.js";
import { chapter as ch7 } from "./chapter-07-topic-1-review.js";

export const chapters = [ch1, ch2, ch3, ch4, ch5, ch6, ch7];