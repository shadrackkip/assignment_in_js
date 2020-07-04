function get_number_of_water_glasses(drinks){ 
    /*  
    receives  drinks bought and returns number of water glasses
    */
let string_=drinks
let result = string_.split(" ");
let glass_number_arr=[];
result.forEach((strin_value)=>{
   let match= strin_value.match(/\d+/g);
   if(match!==null){
       if(match[0]>0 && match[0]<=9){
       glass_number_arr.push(parseInt(match[0]))
       }else{
           return;
       }
   }
})
let tot_glasses=glass_number_arr.reduce((a, b) => a + b, 0);
if(tot_glasses>1){
return tot_glasses+' glasses of water'
}else{
    return tot_glasses+' glass of water'  
}
}
console.log(get_number_of_water_glasses("1 chainsaw and 10 pools"))