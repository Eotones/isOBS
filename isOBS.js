const isOBS = function(){
    if(typeof window.obsstudio !== 'undefined'){
        // is OBS browser
        return true;
    }else{
        // other browser
        return false;
    }
};