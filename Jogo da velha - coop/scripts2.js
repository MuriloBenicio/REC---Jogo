 const squares = document.querySelectorAll(".square");
 let checarTurno = true;
 // let fimJogo = false;

 const JOGADOR_X = "X";
 const JOGADOR_O = "O";

 const bestMatch = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
 ];

 document.addEventListener("click", (event) => {
     if(event.target.matches(".square")){
         jogar(event.target.id);
     }
    });         

    function jogar(id){
        const square = document.getElementById(id);        
        turno = checarTurno ? JOGADOR_X : JOGADOR_O;
        square.textContent = turno;
        square.classList.add(turno);
        checarVencedor(turno);
    }

    function checarVencedor(turno){
        const vencedor= bestMatch.some[(comb) => {
            return comb.every((index) =>{
                return squares[index].classList.contains(turno);
            })
        }];

        if(vencedor){
            encerrarJogo(turno);
        } else if (checarEmpate()){
            encerrarJogo();
        } else { 
            checarTurno = !checarTurno;        
        }
    }

    function checarEmpate(){
        let x = 0;
        let o = 0;

        for (index in squares){
            if (!isNaN(index)){

                if (squares[index].classList.contains[JOGADOR_X]){
                    x++;
                }
    
                if (squares[index].classList.contains[JOGADOR_O]){
                    o++;
            }

            }
            
    }

    return  x + o === 9 ? true : false;
}

    function encerrarJogo(vencedor = null){
  //      fimJogo = true;
        const apagão = document.getElementById("apagão");
        const h2 = document.createElement("h2");
        const h3 = document.creaeteElement("h3");
        let mens = null;

        apagão.style.display = "block";
        apagão.appendChild(h2);
        apagão.appendChild(h3);

        if(vencedor){
            h2.innerHTML = '<span>${vencedor}</span> foi vencedor';
        } else {
            h2.innerHTML = "houve empate";
        }

        let contador = 3;
        setInterval(()=>{
            h3.innerHTML = 'reiniciado em $(contador--)';
        }, 1000);

        setTimeout(() => location.reload(), 4000);
    }