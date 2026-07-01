import { CURRICULUM_ES_A2_PART1 } from "./curriculum_A2_part1";
import { CURRICULUM_ES_A2_PART2 } from "./curriculum_A2_part2";
import { CURRICULUM_ES_A2_PART3 } from "./curriculum_A2_part3";

export const CURRICULUM_A2 = {
  units: [
    ...CURRICULUM_ES_A2_PART1.units,
    ...CURRICULUM_ES_A2_PART2.units,
    ...CURRICULUM_ES_A2_PART3.units,
  ]
};
