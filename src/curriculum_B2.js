import { CURRICULUM_ES_B2_PART1 } from "./curriculum_B2_part1";
import { CURRICULUM_ES_B2_PART2 } from "./curriculum_B2_part2";
import { CURRICULUM_ES_B2_PART3 } from "./curriculum_B2_part3";

export const CURRICULUM_B2 = {
  units: [
    ...CURRICULUM_ES_B2_PART1.units,
    ...CURRICULUM_ES_B2_PART2.units,
    ...CURRICULUM_ES_B2_PART3.units,
  ]
};
