import { CURRICULUM_ES_C1_PART1 } from "./curriculum_C1_part1";
import { CURRICULUM_ES_C1_PART2 } from "./curriculum_C1_part2";
import { CURRICULUM_ES_C1_PART3 } from "./curriculum_C1_part3";

export const CURRICULUM_C1 = {
  units: [
    ...CURRICULUM_ES_C1_PART1.units,
    ...CURRICULUM_ES_C1_PART2.units,
    ...CURRICULUM_ES_C1_PART3.units,
  ]
};
