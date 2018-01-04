$(document).ready(function(){

    var $champ = $('.form-control'),
        $mail = $('#identifiants'),
        $pass = $('#password')
        $inscription = $('#inscription'),
        $valid = $('#bouton-inscription-home'),
        $messagePass = $('#messagePass'),
        $messageMail = $('#messageMail'),
        $messageEnvoi = $('#messageEnvoi')

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    $pass.keyup(function(){       
        if(($(this).val().length < 8) || ($(this).val().length > 16)){ // si la chaîne de caractères n'est pas un email.
            $(this).removeClass("valide").addClass("erreur");
            $messagePass.text(' Mot de passe invalide');
            $messagePass.removeClass("valideMessage").addClass("erreurMessage");
         }
         else{
            $(this).removeClass("erreur").addClass("valide");
            $messagePass.text('');
            $messagePass.removeClass("erreurMessage").addClass("valideMessage");
         }
    });


    $mail.keyup(function(){
        if(!regexEmail.test($mail.val())){ // si la chaîne de caractères n'est pas un email.
            $(this).removeClass("valide").addClass("erreur");
            $messageMail.text(' Email Invalide');
            $messageMail.removeClass("valideMessage").addClass("erreurMessage");
         }
         else{
             $(this).removeClass("erreur").addClass("valide");
             $messageMail.text('');
             $messageMail.removeClass("erreurMessage").addClass("valideMessage");
         }
    });

    
    $valid.click(function(){
        if(!regexEmail.test($mail.val())){ // si la chaîne de caractères n'est pas un email.
            $mail.removeClass("valide").addClass("erreur");
            $messageMail.text(' Email Invalide');
            $messageMail.removeClass("valideMessage").addClass("erreurMessage");
        }
        if(($(this).val().length < 8) || ($(this).val().length > 16)){ // si la chaîne de caractères n'est pas un email.
            $pass.removeClass("valide").addClass("erreur");
            $messagePass.text(' Mot de passe invalide');
            $messagePass.removeClass("valideMessage").addClass("erreurMessage");
         }

    });
    
    
});
