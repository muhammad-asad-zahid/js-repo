let count = 0;
function increaseCount(){
 
    
    count++;
    displayCount();
    checkCountValue()
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}


function checkCountValue() {
    if (count === 10) {
        alert('Your gain 10 follower')
    }else if(count === 20){
        alert('you hit 20 followers')
    }
}

