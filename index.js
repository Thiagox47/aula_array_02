(() => {
    const array = [
        "Wylddyson",
        "André",
        "Miguel"
    ];
    const teste = "jose";

    let data = [
        {
            "id":1,
            "name":"André",
            "lastname":"Brandão",
            "age":26,
            "gender":"Male"
        },
        {
            "id":2,
            "name":"Paulo",
            "lastname":"Daniel",
            "age":20,
            "gender":"Malee"
        },
        {
            "id":3,
            "name":"José",
            "lastname":"Galvão",
            "age":29,
            "gender":"Male"
        },
        {
            "id":4,
            "name":"Luana",
            "lastname":"Silva",
            "age":21,
            "gender":"Female"
        },

    ];

    
    // data.push({
    //     "id":5,
    //     "name":"Bruno",
    //     "lastname":"Bezerra",
    //     "age":18,
    //     "gender":"undefined"
    // })


    // const find = data.map((item) =>{
    //      if(item.id === 1){
    //         return item;
    //      }
    // })
 
    // const find_filter = data.filter(item => item.id === 1 );

    // data.map(item =>{
    //     item.age = 13;
    // })

    // data.pop()

    console.log(data.reverse())
   
})();

// Atividades

// 1.0 -  Criar uma array com vários objetos com os seguites atributos: id, name, lastname, job, experience_old, language; (20 usuários)
// 1.1 criar uma função que irá mostrar apenas os usuários com mais de 5 anos de experiência.
//  1.2 - criar uma função que irá adicionar um atributo chamado able com valor true para todos os usuários com mais de 5 anos de experiência.
// 1.3 - criar uma função que irá deletar todos os usuários que não são aptos.
// 1.4 - criar uma função  que irá verificar se o usuário possui a linguagem Inglês e tem mais de 5 anos e irá criar uma nova array apenas com esses objetos.