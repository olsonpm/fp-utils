const getFirstNLines = numberOfLinesToGet => aString => {
  const lines = numberOfLinesToGet > 0 ? [''] : []

  let i = 0,
    numLinesReached = false

  while (!numLinesReached && i < aString.length) {
    const currentCharacter = aString[i],
      nextCharacter = aString[i + 1]

    if (isNewline(currentCharacter, nextCharacter)) {
      if (currentCharacter === '\r') i += 1

      numLinesReached = lines.length === numberOfLinesToGet
      if (!numLinesReached) lines.push('')
    } else lines[lines.length - 1] += aString[i]

    i += 1
  }

  return {
    lines,
    moreLinesExist: numLinesReached && aString.length !== i,
  }
}

//
//------------------//
// Helper Functions //
//------------------//

function isNewline(currentCharacter, nextCharacter) {
  return (
    currentCharacter === '\n' ||
    (currentCharacter === '\r' && nextCharacter === '\n')
  )
}

//
//---------//
// Exports //
//---------//

export default getFirstNLines
