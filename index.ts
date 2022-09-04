const iplList = []

function addIpl (number: number, ocPol: number, offender: string[], victim: string[], witness: string[]) {
    const ipl = {
        number,
        ocPol,
        offender,
        victim,
        witness,
        blatant: Boolean
    }
    iplList.push(ipl)
    alert(`IPL ${number} adicionado com sucesso!`)
}

function findIpl (number: number) {
    let ipl: {
        number,
        ocPol: number,
        offender: [],
        victim: [],
        witness: [],
        blatant: boolean
}
    ipl = iplList.find((x) => x.number === number)
    return ipl
}

function addOffender (member: string, ipl: {number: number, offender: string[]}) {
    ipl.offender.push(member)
}
function addVictim (member: string, ipl: {number: number, victim: string[]}) {
    ipl.victim.push(member)
}
function addWitness (member: string, ipl: {number: number, witness: string[]}) {
    ipl.witness.push(member)
}

function upDateParts (memberOff: string[], memberVic: string[], memberWit: string[], ipl: {number: number, offender: string[], victim: string[], witness: string[]}) {
    ipl.offender = memberOff
    ipl.victim = memberVic
    ipl.witness = memberWit
    alert(`Inquérito ${ipl.number} atualizou as partes com sucesso!`)
}

function menuOption1 () {
    const iplNumber = Number(prompt("Informe o número do Inquérito:"))
    const ocPolNumber = Number(prompt(`Informe o número da ocorrência policial do inquérito ${iplNumber}`))
    const offenderName = prompt("Informe o nome do infrator")
    const victimName = prompt("Informe o nome da vítima")
    const witnessName = prompt("Informe o nome da testemunha")
    const offenderNameList = []
    const victimNameList = []
    const witnessNameList = []
    offenderNameList.push(offenderName)
    victimNameList.push(victimName)
    witnessNameList.push(witnessName)
    
    const confirmation = confirm(`Confirma o Inquérito ${iplNumber} e ocorrência ${ocPolNumber}?`)
    if(confirmation)
    addIpl(iplNumber, ocPolNumber, offenderNameList, victimNameList, witnessNameList)
}

function menuOption2 () {
    const chosenIpl = Number(prompt(`Informe o número do IPL na qual deseja acrescentar as partes:`))
    const offenderName = prompt("Informe o nome do infrator a ser adicionado:")
    const victimName = prompt("Informe o nome da vítima a ser adicionada")
    const witnessName = prompt("Informe o nome da testemunha a ser adicionada")

    const ipl = findIpl(chosenIpl)

    addOffender(offenderName, ipl)
    addVictim(victimName, ipl)
    addWitness(witnessName, ipl)
    alert(`Partes adicionadas ao inquérito ${chosenIpl} com sucesso!`)
}

function menuOption3 () {
    const iplNumber = Number(prompt("Informe o número de IPL que deseja atualizar as partes integrantes:"))
    const newOffender = prompt (`Atualize o nome do Infrator (somente um nome) do IPL ${iplNumber}:`)
    const newVictim = prompt (`Atualize o nome da Vítima (somente um nome) do IPL ${iplNumber}:`)
    const newWitness = prompt (`Atualize o nome da Testemunha (somente um nome) do IPL ${iplNumber}:`)

    const ipl = findIpl(iplNumber)

    upDateParts([newOffender], [newVictim], [newWitness], ipl)
    alert(`Partes do inquérito ${iplNumber} foram atualizadas com sucesso!`)
}

function menuOption4 () {
    let list = "Lista de Inquéritos Policiais:\n"

    iplList.forEach((ipls: {
        number: number,
        ocPol: number,
        offender: string[],
        victim: string[],
        witness: string[],
        blatant: Boolean
    }) => {
        list += `
        Inquérito: ${ipls.number}
        Ocorrência Policial: ${ipls.ocPol}
        Infrator(es): ${ipls.offender} 
        Vítima(s): ${ipls.victim} 
        Testemunha(s): ${ipls.witness}
        `
    })
    alert(list)
}

let userOption = 10*10

while(userOption === 10*10) {
    const initialMenu = `Seja bem vindo!
    Escolha uma das opções abaixo:
    1 - Adicionar IPL!
    5 - Sair do sistema!`

    userOption = Number.parseInt(prompt(initialMenu))

    switch (userOption) {
        case 1:
            menuOption1()
            break;
        case 5:
            alert("Salvando arquivos...")
            alert("Encerrando o sistema....")
            break;
        default:
            alert("Opção inválida")
    }
}

while(userOption !== 5 && userOption !== 10*10) {
    const menu = `Painel principal
    (escolha uma das opções)
    1 - Adicionar IPL!
    2 - Adicionar partes ao Inquérito!
    3 - Atualizar partes ao Inquérito!
    4 - Mostrar lista de Inquéritos!
    5 - Sair do sistema!`

    userOption = Number.parseInt(prompt(menu))

    switch (userOption) {
        case 1:
            menuOption1()
            break;
        case 2:
            menuOption2()
            break;
        case 3:
            menuOption3()
            break;
        case 4:
            menuOption4()
            break;
        case 5:
            alert("Salvando arquivos...")
            alert("Encerrando o sistema....")
            break;
        default:
            alert("Opção inválida!")
    }

}