(function(root, factory, plug){
    factory.call(root, root.jQuery, plug);
})(window, function($, plug){
    var __DEFAULTS__ = {
        handle : 'keyup change',
        extendRules : function(){

        }
    };
    var __RULES__ = {
        require : function(value){
            return value !== '';
        },
        email : function(value){
            return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);
        },
        regex : function(value, fieldRule){
            var regex = eval(fieldRule);
            return regex.test(value);
        },
        number : function(value){
            return /^\d+$/.test(value);
        },
        compareto : function(value, fieldRule){
            return $(fieldRule).val() === value;
        },
        mobilePhone: function(value){
            return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value);
        },
        length: function(value){

        }
    };
    $.fn[plug] = function(options){
        if(!$(this).size()) return;
        $.extend(this, __DEFAULTS__, options);
        $(this).find('input').on(this.handle, function(){ 
            var $this = $(this);
            $.each(__RULES__, function(rule, index){
                var fieldRule = $this.data('bv-'+rule);           
                var bool = false;
                if(fieldRule){ 
                    bool = __RULES__[rule]($this.val(), fieldRule);
                    var errorMsg = $this.data('bv-' + rule + '-error');
                    $this.parents('.form-group').removeClass('has-success has-error').find('.help-block').remove();
                    if(bool){
                        $this.parents('.form-group').addClass('has-success');    
                        $this.parents('.form-group').find('.help-block').remove();   
                    }else{
                        $this.parents('.form-group').addClass('has-error').append('<p class="help-block text-danger">'+ errorMsg +'</p>');

                    }
                    return bool;
                }       
            });
        });
    }
}, 'bootstrapValidate');

$('.bootstrap-validate').bootstrapValidate();

