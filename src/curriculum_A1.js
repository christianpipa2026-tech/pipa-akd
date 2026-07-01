import { CURRICULUM_ES_A1_PART1 } from "./curriculum_A1_part1";
import { CURRICULUM_ES_A1_PART2 } from "./curriculum_A1_part2";
import { CURRICULUM_ES_A1_PART3 } from "./curriculum_A1_part3";

export const CURRICULUM_ES_A1 = {
  units: [
    ...CURRICULUM_ES_A1_PART1.units,
    ...CURRICULUM_ES_A1_PART2.units,
    ...CURRICULUM_ES_A1_PART3.units,
  ]
};
