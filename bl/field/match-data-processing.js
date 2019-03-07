import * as _ from "lodash"
import gameConfig from "../../config"

function findQuestion (questions, question_name) {
  return _.filter(questions, question => question.name === question_name)[0]
}

const forms = require(`../../${gameConfig.data.forms}`)

function gatherMatchResults (matches) {
  const results = {}

  for (const match_name in matches) { // starts unpacking the data structure { match_name: { section: { key: value } } }
    const matchData = matches[match_name]
    delete matchData.team_id
    delete matchData.name
    for (const section in matchData) {
      if (!results[section]) results[section] = {}
      const data = matchData[section] // unpacks all the data under {auto:{ ... }}
      for (const key in data) {
        const value = data[key]
        if (!results[section][key]) results[section][key] = {results: []}
        results[section][key].results.push(value)
      }
    }
  }
  return results
}

function labelGatheredQuestionsByType (gatheredMatchData, formConfig) {

  for (const section in gatheredMatchData) {

    for (const question_name in gatheredMatchData[section]) {
      gatheredMatchData[section][question_name].type = findQuestion(formConfig[section], question_name).type
    }

  }
  return gatheredMatchData
}

function median (numbers) {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  var median = 0, numsLen = numbers.length
  numbers.sort()

  if (
    numsLen % 2 === 0 // is even
  ) {
    // average of two middle numbers
    median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2
  } else { // is odd
    // middle number only
    median = numbers[(numsLen - 1) / 2]
  }

  return median
}

function processNumberQuestion (question) {
  const processed = {
    results: {all: question.results}
  }
  const {results} = question

  processed.results.averrage = _.mean(results)
  processed.results.median = median(results)
  processed.results.max = _.max(results)

  return processed

}

function processEnumQuestion (question) {
  const processed = {type: question.type, results: {}}

  let {results} = question

  results = _.countBy(results, r => r)

  for (const value in results) {
    processed.results[value] = results[value]
  }
  processed.results.total = Object.values(results).reduce((sum, n) => sum+n)
  return processed
}

async function summarizeMatches (matches) {
  const formConfig = forms.field

  const gatheredResults = gatherMatchResults(matches)
  const labeledGatheredResults = labelGatheredQuestionsByType(gatheredResults, formConfig)

  const matchNames = []

  for (let match_name in matches) {
    matchNames.push(match_name)
  }

  for (const section in labeledGatheredResults) {
    for (const question_name in labeledGatheredResults[section]) {
      const question = labeledGatheredResults[section][question_name]

      if (question.type === "number") {
        labeledGatheredResults[section][question_name] = processNumberQuestion(question)
      } else if (question.type === "enum" || question.type === "boolean") {
        labeledGatheredResults[section][question_name] = processEnumQuestion(question)
      }
    }
  }
  labeledGatheredResults.matches = matchNames
  return labeledGatheredResults
}

export {
  summarizeMatches
}