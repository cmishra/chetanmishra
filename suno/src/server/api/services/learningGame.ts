import { TRPCError } from "@trpc/server";
import assert from "node:assert";
import { z } from "zod";
import { publicProcedure } from "../trpc";

const MAPPINGS = [
  ["क", "k"],
  ["ख", "kh"],
  ["ग", "g"],
  ["घ", "gh"],
  ["ङ", "n"],
  ["च", "ch"],
  ["छ", "ch"],
  ["ज", "j"],
  ["झ", "jh"],
  ["ञ", "n"],
  ["ट", "t"],
  ["ठ", "th"],
  ["ड", "d"],
  ["ढ", "dh"],
  ["ण", "n"],
  ["त", "t"],
  ["थ", "th"],
  ["द", "d"],
  ["ध", "dh"],
  ["न", "n"],
  ["प", "p"],
  ["फ", "ph"],
  ["ब", "b"],
  ["भ", "bh"],
  ["म", "m"],
  ["य", "y"],
  ["र", "r"],
  ["ल", "l"],
  ["व", "w, v"],
  ["श", "sh"],
  ["ष", "sh"],
  ["स", "s"],
  ["ह", "h"],
  ["क़", "q"],
  ["ख़", "ḳh"],
  ["ग़", "gh"],
  ["ड़", "r"],
  ["ढ़", "rh"],
  ["फ़", "f"],
  ["ज़", "z"],
  ["झ़", "zh"],
  ["क्ष", "ksh"],
  ["त्र	", "tr"],
  ["ज्", "gy, jn"],
  ["श्र", "shr"],] as const

export const submitFlashCardOption = publicProcedure
  .input(z.object({ prompt: z.string(), option: z.string() }))
  .output(z.object({ correct: z.boolean(), answerIfIncorrect: z.string().nullable() }))
  .query(({ input }) => {
    const promptMapping = MAPPINGS.filter(v => input.prompt === v[0] || input.prompt === v[1])[0]
    const optionMapping = MAPPINGS.filter(v => input.option === v[0] || input.option === v[1])[0]
    if (!promptMapping || !optionMapping) {
      throw new TRPCError({ message: 'Prompt or option is malformed', code: "BAD_REQUEST" })
    }
    const correctAnswer = promptMapping[0] === input.prompt ? promptMapping[1] : promptMapping[0]
    const answerIsCorrect = promptMapping === optionMapping
    return {
      correct: answerIsCorrect,
      answerIfIncorrect: answerIsCorrect ? null : correctAnswer
    }
  })

export const getFlashCardCombo = publicProcedure.output(z.object({ prompt: z.string(), options: z.array(z.string()) })).query(() => {
  const numOptions = 3
  const promptWithDevanagiri = Math.random() < 0.5
  const optionPairs = Array(numOptions).map(_ => {
    const optionPair = MAPPINGS[Math.floor(Math.random() * MAPPINGS.length)]
    assert(optionPair != undefined, 'Index should be in the range of the array')
    return optionPair
  })
  const promptIndex = Math.floor(Math.random() * numOptions)
  const promptPair = optionPairs[promptIndex]
  if (promptPair == undefined) {
    throw new TRPCError({ message: 'Error sampling prompt', code: 'INTERNAL_SERVER_ERROR' })
  }
  const options = optionPairs.map(p => promptWithDevanagiri ? p[1] : p[0]
  )
  const prompt = promptWithDevanagiri ? promptPair[0] : promptPair[1]
  return {
    prompt, options
  }
})