$(document).ready(function(){

    let $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);

$img.css('display','none');
$currentImg.css('display','block');

$carrousel.append('<div class="controls"> <span class="prev"><</span> <span class="next">></span> </div>');

$('.prev').css('fontSize','50px');
$('.next').css('fontSize','50px');

$('.next').click(function(){ // image suivante
    console.log(i);
    i++; // on incrémente le compteur

    if( i >= ($img.length) ){
        indexImg = 0;
        i = indexImg;
        $img.css('display', 'none'); 
        $currentImg = $img.eq(i); 
        $currentImg.css('display', 'block'); 
    }
    else{
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block');
    }

});

$('.prev').click(function(){ // image précédente
    console.log(i);
    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i <= -1 ){
        indexImg = $img.length - 1;
        i = indexImg;
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 3000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

});