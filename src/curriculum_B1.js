import { CURRICULUM_ES_B1_PART1 } from "./curriculum_B1_part1";
import { CURRICULUM_ES_B1_PART2 } from "./curriculum_B1_part2";
import { CURRICULUM_ES_B1_PART3 } from "./curriculum_B1_part3";

export const CURRICULUM_B1 = {
  units: [
    ...CURRICULUM_ES_B1_PART1.units,
    ...CURRICULUM_ES_B1_PART2.units,
    ...CURRICULUM_ES_B1_PART3.units,
  ]
};
