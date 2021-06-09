
  const numeros = {
    1: 'um',
    2: 'dois',
    3: 'tres',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove'
  }
  
  const dezenas = {
    2: 'vinte',
    3: 'trinta',
    4: 'quarenta',
    5: 'cinquenta',
    6: 'sessenta',
    7: 'setenta',
    8: 'oitenta',
    9: 'noventa'
  }
  
  function res(number) {
    let parts = []
  
    if (number >= 1000) {
      parts.push(numeros[Math.floor(number / 1000)])
      parts.push("mil")
      number %= 1000
    }
  
    if (number >= 100) {
      parts.push(numeros[Math.floor(number / 100)])
      parts.push("centro")
      if (number % 100 !== 0) {
        parts.push("e")
      }
      number %= 100
    }
  
    if (number >= 20) {
      parts.push(dezenas[Math.floor(number / 10)])
      number %= 10
    }
  
    if (numeros[number]) {
      parts.push(numeros[number])
    }
  
    return parts.join("")
  }
  
  const words = []
  for (let i = 1; i <= 1000; i++) {
    words.push(res(i))
  }
  console.log(words.join("").length);