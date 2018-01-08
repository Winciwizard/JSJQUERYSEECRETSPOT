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
        regexNom = /^([a-z]+(( |')[a-z]+)*)+([-]([a-z]+(( |')[a-z]+)*)+)*$/,
        regexUser = /^[A-Za-z0-9._-]{3,16}$/;

    function affichageErreur(valeur,messageVar,messageErreur){
        valeur.removeClass("valide").addClass("erreur");
        messageVar.text(messageErreur);
        messageVar.removeClass("valideMessage").addClass("erreurMessage");
    }
    
    function affichageValide(valeur,messageVar){
        valeur.removeClass("erreur").addClass("valide");
            messageVar.text('');
            messageVar.removeClass("erreurMessage").addClass("valideMessage");
    }

    function validationInput(valeur,condition,messageVar,messageErreur){
        if(condition){
            affichageErreur(valeur,messageErreur);
         }
         else{
            affichageValide(valeur,messageVar);
         }
    }


    $pass.keyup(function(){       
        validationInput(
            $(this),
            ($(this).val().length < 8) || ($(this).val().length > 16),
            $messagePass,
            ' Mot de passe invalide'
        );
    });

    $mail.keyup(function(){
        validationInput(
            $(this),
            (!regexEmail.test($mail.val())),
            $messageMail,
            ' Email Invalide'
        );
    });

    $nom.keyup(function(){
        validationInput(
            $(this),
            (!regexNom.test($nom.val())),
            $messageNom,
            ' Ne pas utiliser de chiffres'
        );
    });

    $prenom.keyup(function(){
        validationInput(
            $(this),
            (!regexNom.test($prenom.val())),
            $messagePrenom,
            " C'est quoi ce prenom"
        );
    });

    $utilisateur.focus(function(){
        $utilisateur.attr('value', $prenom.val() + "." + $nom.val());
    });

    $utilisateur.keyup(function(){
        validationInput(
            $(this),
            (!regexUser.test($utilisateur.val())),
            $messageUtilisateur,
            " C'est quoi ce prenom"
        );
    });

    $validIndex.click(function(){
        if(!regexEmail.test($mail.val())){
            affichageErreur(
                $mail,$messageMail,
                ' Email Invalide'
            );
        }
        if(($(this).val().length < 8) || ($(this).val().length > 16)){
            affichageErreur(
                $pass,$messagePass,
                ' Mot de passe invalide'
            );
         }

    });
    
    
});
