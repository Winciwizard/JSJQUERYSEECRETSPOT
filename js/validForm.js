$(document).ready(function(){

    var $champ = $('.form-control'),
        $mail = $('#email'),
        $pass = $('#password'),
        $nom = $('#nom'),
        $prenom = $('#prenom'),
        $utilisateur = $('#utilisateur'),
        $inscription = $('#inscription'),
        $validIndex = $('#bouton-inscription-home'),
        $messagePass = $('#messagePass'),
        $messageMail = $('#messageMail'),
        $messageNom = $('#messageNom'),
        $messagePrenom = $('#messagePrenom'),
        $messageEnvoi = $('#messageEnvoi');

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/,
        regexNom = /[^0-9][a-zA-Z]/,
        regexUser = /[a-zA-Z0-9._-]/;

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

    $nom.keyup(function(){
        if(!regexNom.test($nom.val())){
            $(this).removeClass("valide").addClass("erreur");
            $messageNom.text(' Ne pas utiliser de chiffres');
            $messageNom.removeClass("valideMessage").addClass("erreurMessage");
         }
         else{
             $(this).removeClass("erreur").addClass("valide");
             $$messageNom.text('');
             $messageNom.removeClass("erreurMessage").addClass("valideMessage");
         }
    });

    $prenom.keyup(function(){
        if(!regexNom.test($prenom.val())){
            $(this).removeClass("valide").addClass("erreur");
            $messagePrenom.text(" C'est quoi ce prenom");
            $messagePrenom.removeClass("valideMessage").addClass("erreurMessage");
         }
         else{
             $(this).removeClass("erreur").addClass("valide");
             $messagePrenom.text('');
             $messagePrenom.removeClass("erreurMessage").addClass("valideMessage");
         }
    });

    $utilisateur.focus(function(){
        $utilisateur.attr('value', $prenom.val() + "." + $nom.val());
    });

    $utilisateur.keyup(function(){
        if(!regexUser.test($utilisateur.val())){
            $(this).removeClass("valide").addClass("erreur");
            $messageUtilisateur.text(" C'est quoi ce prenom");
            $messageUtilisateur.removeClass("valideMessage").addClass("erreurMessage");
         }
         else{
             $(this).removeClass("erreur").addClass("valide");
             $messageUtilisateur.text('');
             $messageUtilisateur.removeClass("erreurMessage").addClass("valideMessage");
         }
    });

    $validIndex.click(function(){
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
