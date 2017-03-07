var React = require('react');
var MusicList = require('./musicList.jsx');
var MusicDetails = require('./musicDetails.jsx');


var MusicContainer = React.createClass({


  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      if(request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({music: data["feed"]["entry"]});
      // console.log("state", this.state.music);
    }.bind(this);

    request.send();
  }, 


  getInitialState: function(){
    return {music: []}
  }, 


  render: function(){
    // console.log("test",this.state.music);
    return (
      <div className="music-container">
        <h2>Music Container</h2>
          <MusicList music ={this.state.music} />
      </div>
      );

  }

});

module.exports = MusicContainer;