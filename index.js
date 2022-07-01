const password = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '[]{}#()*:;._-!=~,"'
}

function generatePass() {
  let length = inputLength.value,
    charset =
      password.upperCase +
      password.lowerCase +
      password.numbers +
      password.symbols,
    response = ''

  for (let i = 0, n = charset.length; i < length; ++i) {
    response += charset.charAt(Math.floor(Math.random() * n))
  }

  return response
}

function getPass() {
  if (inputLength.value >= 6) {
    if (inputLength.value <= 40) {
      resultado.textContent = generatePass()
    }
  }
}
