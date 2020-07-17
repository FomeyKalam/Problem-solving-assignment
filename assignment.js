//converting feet to mile
function feetToMile(feet){
   var mile=[];
    for(var i=0 ; i<feet.length; i++){
         if(feet[i]>0)
         {
            var convert_to_Mile = feet[i]/5280; // 1 mile = 5280 feet
            mile.push(convert_to_Mile.toFixed(5));
         }
       else
           {
               var error = 'distance cant be negative';
               mile.push(error);
           }
    }
    return mile;
}
var feet = [50, -1000, 1200, 2000];
var result = feetToMile(feet);

console.log(result);

//Calculating Wood


function woodCalculator(chairNum, tableNum, bedNum){
    var chair, table, bed;
    wood_unit_per_chair = 1;
    wood_unit_per_table = 3;
    wood_unit_per_bed = 5;
    if(chairNum < 0 || tableNum < 0 || bedNum < 0){
        return 'Amount cant be negative';
    }
    else{

        Total_wood_for_chair = wood_unit_per_chair * chairNum;
        Total_wood_for_table =  wood_unit_per_table * tableNum;
        Total_wood_for_bed = wood_unit_per_bed * bedNum;
     
        var sum = (Total_wood_for_chair + Total_wood_for_table + Total_wood_for_bed);
     
        return sum;
    }
   
}

var Total_wood = woodCalculator(5,10,7);
console.log(Total_wood );


//Calculating Brick for a bulding
function brickCalculator(floor){
     if(floor<0 || floor == 0){
         return 'Floor number must not be negative and ground floor is out of count'
     }
      if(floor>0 && floor<=10)
      {
          var brick = 15*1000;
          return brick;
      }
      else if(floor>10 && floor<=20)
      {
          var brick= ((floor-10)*(12*1000))+15000;
          return brick;
      }
      else if(floor>20)
      {
          var brick = ((floor-20)*(10*1000))+15000+12000;
          return brick;
      }
     
}
var Total_brick = brickCalculator(10);
console.log(Total_brick);

// Find out the tiny friend
function tinyFriend(names){
         var tinyOne = names[0];
     for(var i=0; i< names.length; i++){
         if(names[i]==""){
             return 'there is a null value in the array';
         }
         else{
            var currentName = names[i];
            if(currentName.length <= tinyOne.length){
               tinyOne = currentName;
            }
            else{
               tinyOne = tinyOne;
            }
         }
        
       
        
    }

     
     return tinyOne;

}
var names = ["fomey" ,"nabila", "eva", "tawsif", "shahadat", "sp"];
var output = tinyFriend(names);
console.log(output);

