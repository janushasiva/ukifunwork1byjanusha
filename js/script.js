SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/47049486',function(sound){
         $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/21551328',function(sound){
         $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/155665995',function(sound){
         $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/33958371',function(sound){
         $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/173750835',function(sound){
         $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404310',function(sound){
         $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

});
