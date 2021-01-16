function validation(){
    let fname=document.getElementById('firstname');
    let checkbox=document.getElementById('checkbox');
    let submit=document.getElementById('submit');
    if(fname.value && checkbox.checked){
        return submit.disabled = false;
    }
    else{
         submit.disabled = true;
    }
}