 let score =JSON.parse(localStorage.getItem('score'));

            if (score === null){  // or use  if(!score)
                score={
                    wins : 0,
                    losses : 0,
                    ties : 0
                } ;
            }

            // or use  let score =JSON.parse(localStorage.getItem('score')) || { wins:0,losses:0,ties:0} ;


            updateScoreElement();

            let isAutoPlaying =false;
            let intervalId ;
            function autoPlay(){

                if(!isAutoPlaying){
                    intervalId =  setInterval(function(){
                        const playerMove=pickComputerMove();
                        playGame(playerMove);
                    },1000);
                    isAutoPlaying=true;
                }
                else{
                    clearInterval(intervalId);
                    isAutoPlaying=false;
                }

                
            }

            function playGame(playerMove){

                const computerMove = pickComputerMove();

                let result='';

                if(playerMove==='rock'){
                    if(computerMove==='rock'){
                        result='Tie';
                    }
                    else if(computerMove==='paper'){
                        result='You Loss';
                    }
                    else if(computerMove==='scissor'){
                        result='You Win';
                    }

                    
                }
                else if(playerMove==='paper'){

                    if(computerMove==='paper'){
                        result='Tie';
                    }
                    else if(computerMove==='scissor'){
                        result='You Loss';
                    }
                    else if(computerMove==='rock'){
                        result='You Win';
                    }

                   
                }
                else if(playerMove==='scissor'){

                    if(computerMove==='scissor'){
                        result='Tie';
                    }
                    else if(computerMove==='rock'){
                        result='You Loss';
                    }
                    else if(computerMove==='paper'){
                        result='You Win';
                    }

                   
                }

                if(result==='You Win'){
                    score.wins += 1; 
                }
                else if(result=='You Loss'){
                    score.losses += 1;
                }
                else if(result=='Tie'){
                    score.ties += 1;
                }
                
                localStorage.setItem('score',JSON.stringify(score)); // to store in localstorage ,tne localstorage must be string so use JSON.stringify we used.

                updateScoreElement();

                document.querySelector('.js-result').innerHTML=`${result}`;

                document.querySelector('.js-moves').innerHTML=`You 
                    <img src="images/${playerMove}-emoji.png"
                     class="move-icon">
                    <img src="images/${computerMove}-emoji.png "
                     class="move-icon">
                    
                    Computer`;

               
            }


            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML=`wins: ${score.wins} , losses: ${score.losses}, ties: ${score.ties}`;

            }

           


            //  let computerMove='';  // declare outside of function so that we can use outside of the scope. so it can access.

            function pickComputerMove(){

                let computerMove=''; // we can extract the computermove outside by using return . so we can use inside the function.

                const randomNumber = Math.random();

                if(randomNumber>=0 && randomNumber<1/3){
                    
                    computerMove='rock';
                    
                }
                else if(randomNumber>=1/3 && randomNumber<2/3){
                    
                    computerMove='paper';
                
                }
                else if(randomNumber>=2/3 && randomNumber<1){
                    
                    computerMove='scissor';
                    
                }

                return computerMove;
            }
