const letters = {1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",
14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"};
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let resultNumber = [];
let keyIndex = 0;
let stringKey = key.toString();

let decodedMessage = "";



 for (let i=0;i<eMessage.length;i++){
     
     resultNumber.push(eMessage[i]-stringKey.charAt(keyIndex));
     keyIndex++;
     if(keyIndex==stringKey.length){
         keyIndex=0;
     }
    
 }
 
 for (let i=0;i<resultNumber.length;i++){
     let numIndex = number.indexOf(resultNumber[i]);
