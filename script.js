function whackGame() {
      (function($) {
        var $mole = $('<div class="mole"></div>')
        $('[data-js="hole"]').eq(getRandomInt(0, 4)).append($mole)

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
          var point = 0;
          $($mole).on('click', function (){
          point++
          // $('#drawScore').html(score);
          $($mole).remove()
          $('[data-js=”hole”]').empty();
          console.log(point);

          setTimeout(function () {
          whackGame();
          }, Math.floor(Math.random() * 1000));
        });
      }(jQuery));
}
whackGame()
