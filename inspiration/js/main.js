/*
Sélectionne une balise du DOM
*/
    // Version JS
    let myJStitle = document.getElementsByTagName('h1');
    let myJSsubTitle = document.getElementsByClassName('subTitle');
    letmyJSheader = document.getElementById('myHeader');

    // Version JQuery
    let myJQUERYtitle = $('h1');
    let myJQUERYsubTitle = $('.subTitle');
    let myJQUERYheader = $('#myHeader');
//

/*
Capter un évenement
*/
    document.querySelector('#myButton').addEventListener('click', () => {
      console.log('Clic JS');
    });

    //Version JQuery
    $('#myButton').click( (event) => {
      console.log('Clic jQuery');
    });

//    

/*
Modifier le contenu d'une balise
*/
      // Version JS
      document.querySelector('h1').innerHTML = '<em>Hello</em> Wolrd';
      document.querySelector('h1').textContent = 'Hello Wolrd';

      // Version jQuery
      $('h1').html('<em>Hello</em> World');
      $('h1').text('Hello World');

/*
Les animations
*/
      $('#myButton').click( function() {
        $('h1').fadeToggle();
      });

      $('#myButton').click( function() {
        $('h1').slideToggle();
      });
//