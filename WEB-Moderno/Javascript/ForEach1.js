const aprovados = ['Rodrigo', 'Moura', 'Ferreira', 'Silva']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome} `)
})


//teste para nome e indice, note que temos uma hierarquia de parametros sendo chamados pelo processo
aprovados.forEach(function(lalala, nome){
    console.log(`${lalala + 1}) ${nome} `)
})



