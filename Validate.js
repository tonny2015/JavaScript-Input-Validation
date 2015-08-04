/**
 * Created by Jeton on 5/15/2015.
 */
var Validate = {
    failed : [],
    validated: [],
    inputs : function(formClass) {
        this.reset();
        var inputs = $('.' + formClass);
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() == "") {
                this.save($(inputs[i]).attr('id'));
            }else{
                this.validated.push($(inputs[i]).attr('id'));
            }
        }
    },
    save : function(id) {
        this.failed.push(id);
    },
    reset : function() {
        this.failed = [];
        this.validated = [];
        $('.validationError').text('');
    },
    passed : function(formClass) {
        this.inputs(formClass);
        if(Validate.failed.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    showError : function() {
        this.failed.forEach(function(id) {
            $('#' + id).after('<div class="validationError">This is required.</div>');
        });
    },
    phoneMask: function(e){
        var s=e.val();
        var s=s.replace(/[_\W]+/g,'');
        var n=s.length;
        if(n<11){var m='(00) 0000-00000';}else{var m='(00) 00000-00000';}
        $(e).mask(m);
    },
    numeric: function(event){
        var theEvent = event || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }
};
