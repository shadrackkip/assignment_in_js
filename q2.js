let days =[ "Monday", "Tuesday", "Wednesday",  
"Thursday",  "Friday", "Saturday", 
"Sunday" ]
let mon_occurrence=0;
let tue_occurrence=0;
let wed_occurrence=0;
let thur_occurrence=0;
let fri_occurrence=0;
let sat_occurrence=0;
let sun_occurrence=0;


let dayObj={
 
}

let start_day_of_year='Wednesday' //*required  first day of the year
let daysArr=[];
let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

most_frequent_days=(year)=>{

    if(year<1583 || year>4000){
        return;
    }
    //get index of first day of month
    let day_index=days.indexOf(start_day_of_year)
    let first_day_of_month=day_index //wednesday
    let jan_march_may_july_aug_oct_dec=31; //observation: the first three days occurs 5 times
    let february=28 ;//observation: all days occurs 4 times
    let april_june_sept_nov=30; //observation: the first two days occurs 5 times

    if(year%4==0){
        february=29
    }



   months.forEach((month,i)=>{
       if(
            month=='January' ||
            month=='March' ||
            month=='May'  ||
            month=='July' ||
            month=='August' ||
            month=='October' ||
            month=='December' 
            ){
             

              get_first_day_of_month(first_day_of_month,month)
                calcOccurrence(month,first_day_of_month,2)
                first_day_of_month=first_day_of_month+3
                if(first_day_of_month>6){
                    first_day_of_month=first_day_of_month-7
                    
                }
            }else if(month=='February'){
          get_first_day_of_month(first_day_of_month,month)
          if(february==29){
            calcOccurrence(month,first_day_of_month,0)
            first_day_of_month=first_day_of_month+1
          
          }else{
            calcOccurrence(month,first_day_of_month,0)
            first_day_of_month=first_day_of_month
          
          }
            }else{
           
            get_first_day_of_month(first_day_of_month,month)
                calcOccurrence(month,first_day_of_month,1)
                first_day_of_month=first_day_of_month+2
                if(first_day_of_month>6){
                    first_day_of_month=first_day_of_month-7
                }
            
              
            }
   })
   

}

get_first_day_of_month=(day,month)=>{
    let first_day_of_next_month;

    if(month=='January'){
        first_day_of_next_month=day
    

}


    return first_day_of_next_month;

}

calcOccurrence=(month,day,times)=>{

   
    for(i=day;i<=day+times;i++){

    
        if(i>6){
            let j=i-7
         if(days[j]=='Monday'){ mon_occurrence =mon_occurrence+1}
         if(days[j]=='Tuesday'){ tue_occurrence =tue_occurrence+1}
         if(days[j]=='Wednesday'){ wed_occurrence =wed_occurrence+1}
         if(days[j]=='Thursday'){ thur_occurrence =thur_occurrence+1}
         if(days[j]=='Friday'){ fri_occurrence =fri_occurrence+1}
         if(days[j]=='Saturday'){ sat_occurrence =sat_occurrence+1}
         if(days[j]=='Sunday'){ sun_occurrence =sun_occurrence+1}
    
        }else{
            if(days[i]=='Monday'){ mon_occurrence =mon_occurrence+1}
            if(days[i]=='Tuesday'){ tue_occurrence =tue_occurrence+1}
            if(days[i]=='Wednesday'){ wed_occurrence =wed_occurrence+1}
            if(days[i]=='Thursday'){ thur_occurrence =thur_occurrence+1}
            if(days[i]=='Friday'){ fri_occurrence =fri_occurrence+1}
            if(days[i]=='Saturday'){ sat_occurrence =sat_occurrence+1}
            if(days[i]=='Sunday'){ sun_occurrence =sun_occurrence+1}
      


    
        }

    }

    if(month=='December'){
    let totMons= mon_occurrence*5+((12-mon_occurrence)*4)
    dayObj['Monday']=totMons;
   
    let totTues= tue_occurrence*5+((12-tue_occurrence)*4)
    dayObj['Tuesday']=totTues;
   
   let totWeds= wed_occurrence*5+((12-wed_occurrence)*4)
   dayObj['Wednesday']=totWeds;
   
   let totThur= thur_occurrence*5+((12-thur_occurrence)*4)
   dayObj['Thursday']=totThur;
  
   let totFri= fri_occurrence*5+((12-fri_occurrence)*4)
   dayObj['Friday']=totFri;
  
   let totSat= sat_occurrence*5+((12-sat_occurrence)*4)
   dayObj['Saturday']=totSat;
  
   let totSun= sun_occurrence*5+((12-sun_occurrence)*4)
   dayObj['Sunday']=totSun;
    get_frequent_days()

    }

}

most_frequent_days(2020)


function get_frequent_days(){

    let sorted_vals=[]

    keysSorted = Object.keys(dayObj).sort(function(a,b){
        return dayObj[a]<dayObj[b]
    
    })
    for(i=0;i<keysSorted.length;i++){
        sorted_vals.push(dayObj[keysSorted[i]])
    }
    let maxValue = Math.max.apply(null, sorted_vals);
     let frequent_days= Object.keys(dayObj).filter((day)=>{
    
        return dayObj[day]==maxValue
    })
     console.log(dayObj)
     console.log(frequent_days)
   
}