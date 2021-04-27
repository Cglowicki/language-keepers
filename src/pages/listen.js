import React from 'react';

import entry from '../assets/songs/entry-song.mp3';
import bowArrow from '../assets/songs/bow-arrow.mp3';
import bowArrow2 from '../assets/songs/bow-arrow-2.mp3';
import emchikla from '../assets/songs/emchikla.mp3';
import paddleSong from '../assets/songs/paddle-song.mp3';
import wii from '../assets/songs/wii.mp3';
import wikana from '../assets/songs/wikana.mp3';
import woodpecker from '../assets/songs/woodpecker.mp3';

export default function Listen() {

  const songs = [entry, bowArrow, bowArrow2, emchikla, paddleSong, wii, wikana, woodpecker];

  return (
    <div>{songs.map((song) =>
      <audio controls>
        <source src={song} type="audio/mpeg"></source>
      </audio>
    )}
    </div>
  );
}