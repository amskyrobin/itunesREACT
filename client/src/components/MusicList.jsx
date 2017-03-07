var React = require('react');
var MusicDetails = require('./musicDetails.jsx')


var MusicList = React.createClass({


  render: function(){


    var options = this.props.music.map(function(song, index){
      return <MusicDetails value={index} key={index} song={song} /> 
    });

    return (

      <div className="music-list">
      {options}
      </div> 
      )
  }
});



module.exports = MusicList;