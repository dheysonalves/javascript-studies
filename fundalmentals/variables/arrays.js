const vetor_valores = [9, 2, 4, 'a']
console.log(vetor_valores)
console.log(vetor_valores[0], vetor_valores[3])

vetor_valores[4] = 45
console.log(vetor_valores) // mostra que existe items vazios

vetor_valores.push('ok', 76, true)
console.log(vetor_valores)

vetor_valores.pop()
console.log(vetor_valores)

delete vetor_valores[2]
console.log(vetor_valores)


