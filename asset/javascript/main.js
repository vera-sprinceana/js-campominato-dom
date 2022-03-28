/*1 Generare una griglia di gioco quadrata, simile a quella dello screenshot, 
in cui ogni cella contiene un numero tra 1 e 100.
 Quando l'utente clicca su ogni cella, la cella cliccata si 
colora di azzurro.*/
/*2 Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */
let grid=document.getElementById("grid") ;
let button=document.getElementById("btn")

let difficolta=document.getElementById("difficolta")
let box=document.createElement("div");

grid.innerHTML="";
button.addEventListener("click", function(){
  
    
    grid.classList.remove("d-none");
    console.log(difficolta.value)
    let numeroCelle;
    //numeroCelle.addEventListener("click", cellClick );
    let array=[];
    let tentativi=[];
    let numeroBombe=16;
    let max_tentativi=numeroCelle-numeroBombe;
    
    if(difficolta.value=="Easy"){
      numeroCelle=100;
    }else if(difficolta.value=="Medium"){
      numeroCelle=81;
    }else{
      numeroCelle=49;
    }
    
    for(y=1; y<numeroCelle +1; y++){
      array.push(y)
    }      
    function shuffle(array){
      return array.sort(() => Math.random() -0.5);
    }
    array=shuffle(array);
    console.log(array)
      
    for(let i=1; i<numeroCelle; i++){
      let grid=document.getElementById("grid") ;
      let box=document.createElement("div");
      grid.appendChild(box);

      //numero celle
      if(numeroCelle==100){
        box.classList.add("box") 
      }else if(numeroCelle==81){
        box.classList.add("box2")
      }else{
        box.classList.add("box3")
      }
      box.innerHTML=`${array[i]}`
     box.addEventListener("click", function(){
          this.classList.add("bg-blue")
          console.log(this.innerHTML)
          })
    } 
    //GENERAZIONE BOMBE
    let bombe=generateBombe();
    function generateBombe(){
      let generateBombe=[];
      while(generateBombe.length<numeroBombe){
        let bomb=getRandomInt(1, numeroCelle);
        if(!generateBombe.includes(bomb)){
          generateBombe.push(bomb)
        }
      }
      generateBombe.sort(function compare(a,b){
        return a -b;
      });
      console.log("il pacchetto bombe è:", generateBombe)
      return generateBombe;
    }

    //FUNZIONE AL CLICK SULLA CELLA
     function cellClick(event){
       const cellValue=parseInt(this.querySelector("span").textContent,10 );
       if(!bombe.includes(cellValue)){
         fineGioco();
       }else if(!tentativi.includes(cellValue)){
         this.classList.add("bg-blue")
         tentativi.push(cellValue);
         this.removeEventListener("click", cellClick); 
       }if(tentativi.length ===max_tentativi){
         fineGioco();
       }
     }
     //funcione endGames
     function fineGioco(){
       const squares=document.querySelectorAll(".square");
       for(let i=1, squaresNumero=squares.length; i<=squaresNumero; i++){
         let square = squares[i -1];
         if(!bombe.includes(i)){
           square.classList.add("bomba")
        }
         square.removeEventListener("click", cellClick)
      }
      }

    function getRandomInt(min, max) {
      min = Math.ceil(min) ||0;
      max = Math.floor(max) || Number.MAX_SAFE_INTEGER;
      let result= Math.floor(Math.random() * (max - min +1) + min);
      return result;
      }

})


