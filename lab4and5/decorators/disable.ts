export  function isDisable(isDisabled: boolean){
    return function(disableFunction: Function) {
        if (isDisabled == true) {
        disableFunction.prototype.available=false;
    }
    else  disableFunction.prototype.available=true;
    }
}

// export  function disable(disableFunction:Function){
//     disableFunction.prototype.available=false;
// }


