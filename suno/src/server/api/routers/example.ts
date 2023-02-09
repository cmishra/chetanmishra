import { submitFlashCardOption, getFlashCardCombo } from "../services/learningGame";

import { createTRPCRouter } from "../trpc";

export const exampleRouter = createTRPCRouter({
  submitFlashCardOption, getFlashCardCombo,
});
