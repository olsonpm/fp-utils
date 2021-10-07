{{{import 'assertArgIsOneOfType' '../internal'}}}
{{{import 'getType'}}}

{{{exportInline}}} (key, something, isGetValueAt) => {
  if (getType(something) === 'map')
    return something.get(key)

  if (isGetValueAt)
    assertArgIsOneOfType(key, 'key', ['string', 'number'], 'getValueAt')

  return something[key]
}
