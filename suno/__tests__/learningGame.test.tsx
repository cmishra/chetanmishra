import { type inferProcedureInput } from "@trpc/server";
import { appRouter, type AppRouter } from "../src/server/api/root";
import { createInnerTRPCContext } from '../src/server/api/trpc';
import { expect, test, describe, beforeAll } from "vitest";

let caller: ReturnType<typeof appRouter.createCaller> | undefined
beforeAll(() => {
  const ctx = createInnerTRPCContext({ session: null });
  caller = appRouter.createCaller(ctx);
})

describe('submitFlashCardOption', () => {
  test("test correct submission", async () => {

    type Input = inferProcedureInput<AppRouter["example"]["submitFlashCardOption"]>;
    const input: Input = {
      prompt: "झ़", option: "zh"
    };

    const example = await caller!.example.submitFlashCardOption(input);

    expect(example).toMatchObject({ correct: true, answerIfIncorrect: null });
  });

  test("test incorrect submission", async () => {
    type Input = inferProcedureInput<AppRouter["example"]["submitFlashCardOption"]>;
    const input: Input = {
      prompt: "झ़", option: "shr"
    };

    const example = await caller!.example.submitFlashCardOption(input);

    expect(example).toMatchObject({ correct: false, answerIfIncorrect: "zh" });
  });

})

describe('getFlashCardCombo', () => {
  test('Ensure prompt and options are different types', () => {

  })
})