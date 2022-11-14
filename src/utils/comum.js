export const alteraDados = (variavel, valor, dados, setDados) => {
    setDados({
        ...dados,
        [variavel]: valor
    })
}