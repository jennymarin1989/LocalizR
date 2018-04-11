import React, { Component } from 'react';
import Picture from './Picture'
import SubHeader from './SubHeader'
import {VoicePlayer, VoiceRecognition} from 'react-voice-components';
import ReactDOM from 'react-dom';

const LanguageList = (props) => {
  ReactDOM.render(
    <VoicePlayer
      play
      text="Español"
    />,
    document.getElementById('root')
  )
  return (
    <div className="displaybox">
    <div className="languagepagetitle">
      <SubHeader
        subHeader={"Choose your language!"}
      />
      <Picture
        handlePictureClicked = {props.handleSpanishClicked}
        flagImage={props.spanishImage}
      />
      <Picture
        handlePictureClicked = {props.handleFrenchClicked}
        flagImage={props.frenchImage}
      />
      
      {props.spanishScenarios}
      {props.frenchScenarios}
    </div>
  </div>
  );
};

export default LanguageList;
