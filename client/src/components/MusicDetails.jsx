var React = require('react');


var MusicDetails = function(props){

    return (
      <div className="song"> 

      <p>{(props.song['im:name']['label'])}</p>

      <p>{(props.song['im:artist']['label'])}</p>


      </div>
      )


  };



module.exports = MusicDetails;