/* ==========================================================
   Science subject registry.
   This file is the ONLY place that knows which chapters
   belong to Science. Adding a new chapter = import it here
   and add it to the `chapters` array.
   ========================================================== */

import { chapter as ch1 } from "./chapter-01-scientific-method.js";
import { chapter as ch2 } from "./chapter-02-observations.js";
import { chapter as ch3 } from "./chapter-03-inferences.js";
import { chapter as ch4 } from "./chapter-04-qual-quant.js";
import { chapter as ch5 } from "./chapter-05-measurement.js";
import { chapter as ch6 } from "./chapter-06-variables.js";

export const chapters = [ch1, ch2, ch3, ch4, ch5, ch6];