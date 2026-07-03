import { CURRICULUM_ES_MASTER_PART1 } from "./curriculum_Master_part1";
import { CURRICULUM_ES_MASTER_PART2 } from "./curriculum_Master_part2";
import { CURRICULUM_ES_MASTER_PART3 } from "./curriculum_Master_part3";

export const CURRICULUM_MASTER = {
  units: [
    ...CURRICULUM_ES_MASTER_PART1.units,
    ...CURRICULUM_ES_MASTER_PART2.units,
    ...CURRICULUM_ES_MASTER_PART3.units,
  ]
};
