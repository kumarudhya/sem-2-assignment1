const value = "After a month of leisure at the classy hotel at Victoria Falls,David was a glad to have something to do. Even if it meant flying his employer’s spoilt wife back home. He disliked her to the point of avoiding being alone with her. None of the stewardesses had come along on this trip, so he realised he would be truly alone with her on this flight. She was always rude and loud. Hopefully, she will be asleep throughout the trip, he thought.";
        const words = (value)=>{
    
            let withNoDigits = value.replace(/[0-9]/g, '');

            let withoutBrackets = withNoDigits.replace(/[{()}]/g, '');

            let regex = /[.,\s]/g;
            let noSymbole = withoutBrackets.replace(regex, ' ');
            
            let lowerCase = noSymbole.toLowerCase();
            
            let result= lowerCase.split(" ")
    
            for (let i=0; i < result.length;i++){
                if(result[i] === ''){
                    result.splice(i,1);
                }
            }
            return result;
        } 
        
        
        var wordArray = words(value);// this is an array its contain words without symboles


        const wordCountFunction = (wordArray) =>{
            let wordSet = new Set(wordArray)
            console.log(wordSet.size)

            
            
            let wordCount = {}
            wordArray.forEach(item => {
                if(wordCount[item] == null){
                    wordCount[item] = 1;
                }
                else{
                    wordCount[item] += 1;
                }
            });
            
            return wordCount;
        }

      

        console.log(wordCountFunction(wordArray));

