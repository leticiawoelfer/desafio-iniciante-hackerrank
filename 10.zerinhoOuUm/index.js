const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 1
    }
]


//codigo hackerrank
let zerinho = 0
let um = 0
for (let x of jogadores) {
    x.jogada == 1 ? um++ : zerinho++
}
if (um != 1 && zerinho != 1) {
    console.log("NINGUEM")
} else {
    let ganhador = jogadores.find((jogador) => {
        if (um == 1) {
            if (jogador.jogada == 1) {
                return jogador.nome
            }
        } else if (zerinho == 1) {
            if (jogador.jogada == 0) {
                return jogador.nome
            }
        }
    })
    console.log(ganhador.nome)
}
