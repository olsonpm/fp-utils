{{{importDep 'universalEol'}}}

const { EOL } = universalEol

{{{exportInline}}} (numChars, str) => {
  const chars = str.slice(0, numChars),
      moreCharsExist = str.length > chars.length

    return moreCharsExist
      ? omitLastThree(chars)
      : chars
}

// accounts for strings less than 3 characters in length, replacing each char
//   with the omit character ('omit' term grabbed from lodash's _.truncate)
function omitLastThree(str) {
  return str.replace(/.{0,3}$/, matched => matched.replace(/./g, '.'))
}
