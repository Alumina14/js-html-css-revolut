// creare effetti js:
// 1 mouse on appare sottomenu
// 2 usare this insieme a mouse on per fare apparire il sottomenu solamente uno alla volta
// 3 per far scomparire i menu, aggiungere evento hide al click sugli li, vedere se scompaiono anche se clicco da altre parti


$(document).ready(function(){
// faccio sparire i dropdown menu
  $('.sottomenu').hide();
  $('.stilenav li a').click(
    function(){
      // faccio apparire i sottomenu uno alla volta
      $(this).siblings('.sottomenu').toggle();

    }
  )

  $('.hamburger-menu-contenuto').hide();

  $('.hamburger-menu').click(
    function(){
      $('.hamburger-menu-contenuto').toggle();

    }
  )
// faccio sparire la nav con click sulla x
  $('.fa-times').click(
    function(){
      $('.hamburger-menu-contenuto').hide();

    }
  )

  $('.dropdown-hamburger').hide();
  $('.stile-hamburger-menu li a').click(
    function(){
      $(this).siblings('.dropdown-hamburger').toggle();

    }
  )



});


// responsive nav
// a 1080px il menu va in responsive
// al click sull'hamburger menu appare in 100vh e 100vw il menu resopnsive a sinistra
