const myStudent = {
    name: "Bob",
    scores: [12,67,90,25,50,71,84,52,99,30],
    getLowestScore: function() { 
        let lowestScore = this.scores[99];
        for(let a = 99; a < this.scores.length;a++){
            if (this.scores[a] > highestScore){
                lowestScore = this.scores[a];

            }
        }
        console.log(`${this.name} lowestScore is ${highestScore}`);
  
    
      
  
  
    },
    calculateAverageScore:() => {
    }
  
   }