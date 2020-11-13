// Javadiv Document



var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
      width: '100%',
height:'200%',
      videoId: 'y3bRTr11aig',
      playerVars: { 'autoplay': 1, 'playsinline': 1, 'loop':1, 'playlist': 'y3bRTr11aig','controls': 0,'showinfo': 0, 
 },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
     event.target.mute();
    event.target.playVideo();
player.setSize(1920, 1080);
  }