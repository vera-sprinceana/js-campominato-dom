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
    //grid.innerHTML="";
button.addEventListener("click", function(){
    grid.classList.add("cont_grid") ;
    grid.classList.remove("d-none");
    console.log(difficolta.value)
     
          
            
      let array=[];  
          for(y=1; y<101; y++){
             array.push(y);
                console.log(array)
            }
  
            function shuffle(array){
                return array.sort(() => Math.random() -0.5)
             }
            array=shuffle(array);   
      // let arrayBombe=[];
      //         for(x=1; x<101; x++){
      //             arrayBombe.push(x);
      //             console.log(arrayBombe)
      //           }
      //           function shuffle(arrayBombe){
      //             return arrayBombe.sort(() =>Math.random() -0.5)
      //           }
      //             arrayBombe=shuffle(arrayBombe);
      // let array16Bombe=[];
      //      for(arrayBombe=1; arrayBombe<17; arrayBombe++){
      //          array16Bombe.push(arrayBombe(x))
      //          console.log(`le bombe array16bombe sono: ${array16Bombe}`) 
      //         }
      //         function shuffle(array16Bombe){
      //           return array16Bombe.sort(() =>Math.random() -0.5)
      //         }
      //           array16Bombe=shuffle(array16Bombe);  
      

      if(difficolta.value=="Easy"){
         for(let i=0; i<=100; i++){
              let grid=document.getElementById("grid") ;
              let box=document.createElement("div");
              grid.appendChild(box);
              box.classList.add("box")
              box.innerHTML=`${array[i]}`
              box.addEventListener("click", function(){
                this.classList.add("bg-blue")
                console.log(this.innerHTML)
                // if(arrayBombe.includes(parseInt.this.innerHTML)){
                //   this.classList.add("bomba")
                // }else{
                //   this.classList.add("bg-blue")
                // }
             })
           }  
        }else if(difficolta.value=="Medium"){
          for(let i=1; i<=81; i++){
              let grid=document.getElementById("grid") ;
              let box2=document.createElement("div");
              grid.appendChild(box2);
              box2.classList.add("box2")
              box2.innerHTML=`${array[i]}`
              box2.addEventListener("click", function(){
                this.classList.add("bg-blue")
                console.log(this.innerHTML)
                // if(arrayBombe.includes(parseInt.this.innerHTML)){
                //   this.classList.add("bomba")

                // }else{
                //   this.classList.add("bg-blue")
                // }
              })  
            }
        }else{
          for(let i=1; i<=49; i++){
              let grid=document.getElementById("grid") ;
              let box3=document.createElement("div");
              grid.appendChild(box3);
              box3.classList.add("box3")
              box3.innerHTML=`${array[i]}`
            
              box3.addEventListener("click", function(){
                this.classList.add("bg-blue")
                console.log(this.innerHTML)
                // if(arrayBombe.includes(parseInt.this.innerHTML)){
                //   box3.innerHTML=`${arrayBombe[x]}`
                //   this.classList.add("bomba")
                // }else{
                //   this.classList.add("bg-blue")
                // }
             }) 
               
          }
        
        }
    



  // if(difficolta.value=="Easy"){
  // for(i=1; i<=100; i++){
  //     console.log(i)   
  //    let box=document.createElement("div");
  //     box.classList.add("box");
  //      grid.appendChild(box);

  //      button.addEventListener("click", 
  //      function(){
  //         grid.classList.remove("d-none")
  //        box.innerHTML=`${array[i]}`
  //     })
  //     box.addEventListener("click", function(){
  //     box.classList.add("bg-blue")
  //      }) 
    
  //  }
  // }else if(difficolta.value=="Medium"){
  //     for(i=1; i<=81; i++){
  //      difficolta.value==`Medium`
  //     console.log(i)
  //     let box2=document.createElement("div");
  //     box2.classList.add("box2");
  //     grid.appendChild(box2);

  //      button.addEventListener("click", 
  //     function(){
  //         grid.classList.remove("d-none")
  //         box.innerHTML=`${array[i]}`
  //      })
  //        box2.addEventListener("click", function(){
  //      box2.classList.add("bg-blue")
      
  //     })
  //  }

  // }else{
  // for(i=1; i<=49; i++){
  //      console.log(i)
  //     let box3=document.createElement("div");
  //      box3.classList.add("box3");
  //     grid.appendChild(box3);

  //      button.addEventListener("click", 
  //      function(){
  //          grid.classList.remove("d-none")
  //          box.innerHTML=`${array[i]}`
  //     })
  //     box3.addEventListener("click", function(){
  //     box3.classList.add("bg-blue")
    
  //   })
    
  // }
 


 
   
    
 
     


  //})

 //}

})