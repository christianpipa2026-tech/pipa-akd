import { CURRICULUM_ES_C2_PART1 } from "./curriculum_C2_part1";
import { CURRICULUM_ES_C2_PART2 } from "./curriculum_C2_part2";
import { CURRICULUM_ES_C2_PART3 } from "./curriculum_C2_part3";

export const CURRICULUM_C2 = {
  units: [
    ...CURRICULUM_ES_C2_PART1.units,
    ...CURRICULUM_ES_C2_PART2.units,
    ...CURRICULUM_ES_C2_PART3.units,
  ]
};
