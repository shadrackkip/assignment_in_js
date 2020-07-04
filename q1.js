

let numberOfDays;
let numberOfYears;
let days_unit='day';
let hours_unit='hour';
let minutes_unit='minute';
let seconds_unit='second';

//receives duration in seconds
formatDuration=(duration)=>{
    if(duration<0){
        return 'now';
    }
    
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - (hours*3600))/60);
  const seconds = duration - (hours * 3600) - (minutes * 60);
 let time;
if(duration>=86400){

   if(duration%86400==0){
     numberOfDays=duration/86400;

     if(minutes!=0 && seconds==0){
         minutes>1? time=minutes+' minutes ': time=minutes+' minute '
       
    }else if(minutes!=0 && seconds!=0){
        time=minutes+' minutes '+seconds+' seconds'
    }else
        {

            numberOfDays=Math.floor( duration/86400);

            console.log('number of days '+numberOfDays)
     
            if(numberOfDays==365){

               if(minutes!=0 && seconds==0){
                   time='1 year '+ hours+' hrs and'+minutes+' minutes '
               }else if(minutes!=0 && seconds!=0){
                
               time= '1 year '+ hours+' hrs, '+minutes+' minutes and '+seconds+' seconds'
               }else if(minutes==0 && seconds!=0){
                
                   time='1 year '+  hours+' hrs, and '+seconds+' seconds'
                   }
               
               else{
                   time=' 1 year'
               }

            }else {
           
                time=numberOfDays+' days'
            }
    }
   }else{

    numberOfYears= Math.floor(duration/31536000); 
 
        numberOfDays=Math.floor(duration/86400);


        if(numberOfDays>365){
         
            numberOfYears= Math.floor(duration/31536000); 
            if(numberOfYears>1){
                time=numberOfYears+' years'
            }else{
                time=numberOfYears+' year'
            }
         
          
        
        }else{

        if(minutes!=0 && seconds==0){
            if(numberOfDays>1){
                days_unit='days'
            }
           
              if(minutes>1){
                 minutes_unit='minutes'
              }
              if(seconds>1){
                   seconds_unit='seconds'
              }
            time= numberOfDays+' '+days_unit+' and'+minutes+' '+minutes_unit
        }else if(minutes!=0 && seconds!=0){
            if(numberOfDays>1){
                days_unit='days'
            }
           
              if(minutes>1){
                 minutes_unit='minutes'
              }
              if(seconds>1){
                   seconds_unit='seconds'
              }
        time=numberOfDays+' '+days_unit+', '+minutes+' '+minutes_unit+' and '+seconds+' '+seconds_unit
        }else if(minutes==0 && seconds!=0){
            if(numberOfDays>1){
                days_unit ='days'
              }
              if(minutes>1){
                 minutes_unit='minutes'
              }
              if(seconds>1){
                   seconds_unit='seconds'
              }
            time= numberOfDays+' '+days_unit+', and '+seconds+' '+seconds_unit
            }
        
        else{
            if(hours>1){
                hours_unit ='hours'
              }
             
            time=hours+' '+hours_unit
        }
    }
   
}
     
}else{



if(duration>=3600 &&duration<86400){

    if(minutes!=0 && seconds==0){
        if(hours>1){
            hours_unit ='hours'
          }
          if(minutes>1){
             minutes_unit='minutes'
          }
          if(seconds>1){
               seconds_unit='seconds'
          }
        time= hours+' '+hours_unit+' and'+minutes+' '+minutes_unit
    }else if(minutes!=0 && seconds!=0){
       
        if(hours>1){
          hours_unit ='hours'
        }
        if(minutes>1){
           minutes_unit='minutes'
        }
        if(seconds>1){
             seconds_unit='seconds'
        }
     
    time= hours+' '+hours_unit+', '+minutes+' '+minutes_unit+' and '+seconds+' '+seconds_unit
    }else if(minutes==0 && seconds!=0){
        if(hours>1){
            hours_unit ='hours'
          }
          if(minutes>1){
             minutes_unit='minutes'
          }
          if(seconds>1){
               seconds_unit='seconds'
          }
     
        time= hours+' '+hours_unit+', and '+seconds+' '+seconds_unit
        }
    
    else{
        if(hours>1){
            hours_unit ='hours'
          }
        time=hours+' '+hours_unit
    }
}


else{
    if(minutes!=0 && seconds==0){
   
          if(minutes>1){
             minutes_unit='minutes'
          }
          if(seconds>1){
               seconds_unit='seconds'
          }
        time=minutes+' '+minutes_unit
    }else if(minutes!=0 && seconds!=0){
    
          if(minutes>1){
             minutes_unit='minutes'
          }
          if(seconds>1){
               seconds_unit='seconds'
          }
        time=minutes+' '+minutes_unit+' '+seconds+' '+seconds_unit
    }else
        {
            if(seconds>1){
                seconds_unit='seconds'
           }
        time=seconds+' '+seconds_unit
    }
  
}
}


 return time

}
console.log(formatDuration(3662))