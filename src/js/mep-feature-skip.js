(function($) {

  $.extend(mejs.MepDefaults, {
    skipText: 'Back'
  });

  $.extend(MediaElementPlayer.prototype, {
    buildskip: function(player, controls, layers, media) {
      var t = this,
      skipBack = 
        $('<div class="mejs-button mejs-skip-button mejs-skip-back">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.skipText + '"></button>' +
				'</div>')
        .appendTo(controls)
        .click(function() {
          newTime = media.currentTime - 30;
          media.currentTime = (newTime < 0 ? 0 : newTime);
        }),
      skipForward = 
        $('<div class="mejs-button mejs-skip-button mejs-skip-forward">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.skipText + '"></button>' +
				'</div>')
        .appendTo(controls)
        .click(function() {
          newTime = media.currentTime + 30;
          media.currentTime = (newTime > media.duration ? media.duration : newTime);
        });
    }
  });
})(mejs.$);
