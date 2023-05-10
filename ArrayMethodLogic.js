// Method of Array 

//  1) push() 
// Properties of Push() method
// Insert element at last and return the Size of the Array

let arr = [12,34,43,56,76]; 

function insertElementAtLast(arr,ele){

    arr[arr.length] = ele ; 
    return arr.length ; 
}
console.log(insertElementAtLast(arr,100));
console.log(arr);

// 2) Pop()
// Properties of pop() method 
// Delete element from last and return the deleted element 

function deleteElementFromLast(arr){

    let last = arr[arr.length-1]; 
    arr.length -= 1 ; 
    return last; 
}

console.log(deleteElementFromLast(arr));
console.log(arr);

// 3) Unshift()
// Properties of unshift() method 
// Insert element at start and return the size the array 

function InsertAtFirst(arr,ele){
    for ( let i = arr.length ; i >= 0 ; i-- ){
        arr[i] = arr[i-1];
    }
    arr[0] = ele ; 
    return arr.length ; 
}

console.log(InsertAtFirst(arr,120));
console.log(arr);

// 4) Shift()
// Properties of shift() method 
// Delete the element from start 

function deleteElementFromStart(arr){
    let first = arr[0]; 
    for( let i = 0 ; i < arr.length-1 ; i++){
        arr[i] = arr[i+1]; 
    }
    arr.length -= 1 ; 
    return first ; 
}

console.log(deleteElementFromStart(arr));
console.log(arr);

// 5) Splice()
// Properties of splice(a,b,c) method 
// a - for starting index 
// b - for number of element want to delete
// c - for insert the element
// It return the delete element in Array format

function insertDeleteReplace(arr,a,b,...c){
    //Only delete the element 
    let arr1 = [];
    let size = b ; 
    // for returning the deleted element 
    for ( let i = a , j = 0  ; ; i++ , j++){
        if( size > 0 ){
            arr1[j] = arr[i] ;
            size-- ;  
        } else {
            break ; 
        }  
    }
    // Delete the element
    for( let i = a ; i < arr.length ; i++){
        arr[i] = arr[i+b]; 
    }
    arr.length -= b;
    arr.length += c.length ; 
    // Shift the element 
    for( let i = arr.length-1 , j = 0  ; i >= a ; i-- , j++){
        arr[i] = arr[arr.length-c.length-1-j]; 
    }
    // Place the element 
    for( let i = a , j = 0 ; j < c.length ; j++ , i++ ){
        arr[i] = c[j]; 
    }
    return arr1 ; 
}

console.log(insertDeleteReplace(arr,2,0,44,23,98));
console.log(arr);

// 5) Slice(a,b)
// It use to copy the array with out changing the orignal array 
// a - starting index (include)
// b - end index (exclude)
// If we didn't give the end index then it automatic take arr.length 

function copyArray(arr,a,b = arr.length){
    let arr1 = [];
    for( let i = a , j = 0 ; i < b ; i++ , j++ ){
        arr1[j] = arr[i];
    }
    return arr1; 
}

console.log(copyArray(arr,2,6));

// 6) IndexOf(value , index)
// It check whether the element present or not 
// If element present then it return the index value 
// If element not present then return -1 

function indexpostion(arr,value, b = 0){ 
    for( let i = b ; i < arr.length ; i++){
        if( arr[i] === value){
            return i ; 
        }
    }
    return -1 ; 
}

console.log(indexpostion(arr,23,2));

// 7) Include(value, index)
// It also check wheather the element is present or not 
// If element present it return true and if not then return false 

function checkElement( arr, value , b = 0 ){
    for( let i = b ; i < arr.length ; i++){
        if( arr[i] === value){
            return true ; 
        }
    }
    return false; 
}

console.log(checkElement(arr,34));