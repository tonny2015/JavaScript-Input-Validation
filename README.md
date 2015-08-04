How to use it?

 - Include with script src="path/Validate.js"
 
 - You have multiple HTML input types with the same class for example class="required"
 
    if(Validate.passed('required')){
        //code
    }
    else{
        //Error with message "This is required", after each empty input will appear.
        Validate.showError();
    }
