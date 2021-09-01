export default function DisableModule(){
    if ($('#disable-form').length) {
        $(".pro-input.disable").prop('disabled', true);
        
        $(".product-inner.sold-out").click(function (e) { 
            e.preventDefault();
        });
    }

    
}