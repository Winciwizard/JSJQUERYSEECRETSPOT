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
            $(this).css({ // on rend le champ rouge
                borderColor : '#d31d4e',
                color : '#d31d4e',
                boxShadow : '1px 1px 15px #d31d4e '
            });
            $messagePass.text(' Mot de passe invalide');
            $messagePass.css({
                color : '#d31d4e',
                fontWeight : 'bold',
                fontSize : '0.9em'
            });
         }
         else{
             $(this).css({ // si tout est bon, on le rend vert
             borderColor : '#8cd98c',
             color : '#8cd98c',
             boxShadow : '1px 1px 15px #8cd98c '
         });
         $messagePass.text('');
         }
    });


    $mail.keyup(function(){
        if(!regexEmail.test($mail.val())){ // si la chaîne de caractères n'est pas un email.
            $(this).css({ // on rend le champ rouge
                borderColor : '#d31d4e',
                color : '#d31d4e',
                boxShadow : '1px 1px 15px #d31d4e '
            });
            $messageMail.text(' Email Invalide');
            $messageMail.css({
                color : '#d31d4e',
                fontWeight : 'bold',
                fontSize : '0.9em'
            });
         }
         else{
             $(this).css({ // si tout est bon, on le rend vert
                borderColor : '#8cd98c',
                color : '#8cd98c',
                boxShadow : '1px 1px 15px #8cd98c '
         });
         $messageMail.text('');
         }
    });

    
    $valid.click(function(){
        if(!regexEmail.test($mail.val())){ // si la chaîne de caractères n'est pas un email.
            $mail.css({ // on rend le champ rouge
                borderColor : '#d31d4e',
                color : '#d31d4e',
                 boxShadow : '1px 1px 15px #d31d4e '
            });
            $messageMail.text(' Email Invalide');
            $messageMail.css({
                color : '#d31d4e',
                fontWeight : 'bold',
                fontSize : '0.9em'
            });
        }
        if(($(this).val().length < 8) || ($(this).val().length > 16)){ // si la chaîne de caractères n'est pas un email.
            $pass.css({ // on rend le champ rouge
                borderColor : '#d31d4e',
                color : '#d31d4e',
                boxShadow : '1px 1px 15px #d31d4e '
            });
            $messagePass.text(' Mot de passe invalide');
            $messagePass.css({
                color : '#d31d4e',
                fontWeight : 'bold',
                fontSize : '0.9em'
            });
         }

    });
    
    
});
