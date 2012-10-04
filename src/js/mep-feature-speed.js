(function($) {

  $.extend(mejs.MepDefaults, {
    speedText: 'Speed'
  });

  // Fast Button
	$.extend(MediaElementPlayer.prototype, {
    buildspeed: function(player, controls, layers, media) {
      if (!player.isVideo)
        return;
      var t = this,
      speed = 
        $('<div class="mejs-button mejs-speed-button mejs-speed-normal">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.speedText + '"></button>' +
				'</div>')
        .appendTo(controls)
        .click(function() {
          if(!media.paused && !media.ended) {
            if(media.playbackRate==2) {
              media.playbackRate = 1;
              speed.removeClass('mejs-speed-double').addClass('mejs-speed-normal');
            } else {
              media.playbackRate = 2;
              speed.removeClass('mejs-speed-normal').addClass('mejs-speed-double');
            }
          }
        });
    }

		// add speed controls
	});


})(mejs.$);
