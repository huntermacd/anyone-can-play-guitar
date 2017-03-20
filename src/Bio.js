import React from 'react';
import './Bio.css'

const Bio = () => {
  return (
    <div className='Bio'>
      <h3>Bio</h3>
      <p><em>Hi, my name is Hunter MacDermut.</em> I have 7 and a half years of
        experience working with hundreds of students young and old, helping them
        learn to enjoy playing guitar and make their own music. Many go on to
        perform in the annual student showcase, which gives them a chance to
        show off their skills in front of an audience of friends and family. I
        believe music is a language that everyone can learn and use to express
        themselves. And it's a ton of fun, too!</p>
      <img src="huntermacdermut.jpg" alt="Photograph of Hunter MacDermut" />
      <p>I've been playing guitar since 1999, and played both piano and the drum
        set for years before that. I've studied with acclaimed master teachers
        Kevin White, Stefan Stuber, Amy Bowles, Tom Yoder, and Jim Lichens.
        These teachers have inspired me to write, play, and now share this
        wonderful craft with anyone who's willing to learn.</p>
      <p>If you've been itching to pick up the guitar but didn't know how to
        begin, let me help you get off on the right foot. Or if you already play
        and are looking to reach the next level, I specialize in getting players
        excited about progressing and giving them the tools they need to do so.</p>
    </div>
  );
}

export default Bio;
