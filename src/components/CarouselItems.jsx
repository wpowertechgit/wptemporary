import React from 'react';
import images from '../images/Imageholder'

const items = [
  <div className="facebook-post" key="1">
    <a
      href="https://www.facebook.com/permalink.php?story_fbid=122126359934311964&id=61559358922953"
    >
      <img src={images.feed1} alt="Facebook Post 1" className="facebook-embed" />
    </a>
  </div>,
  <div className="facebook-post" key="2">
    <a
      href="https://www.facebook.com/permalink.php?story_fbid=122123720474311964&id=61559358922953"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={images.feed2} alt="Facebook Post 2" className="facebook-embed" />
    </a>
  </div>,
  <div className="facebook-post" key="3">
    <a
      href="https://www.facebook.com/permalink.php?story_fbid=122104183922311964&amp;id=61559358922953"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={images.feed3} alt="Facebook Post 3" className="facebook-embed" />
    </a>
  </div>,
  <div className="facebook-post" key="4">
    <a
      href="https://www.facebook.com/permalink.php?story_fbid=122099210996311964&id=61559358922953"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={images.feed4} alt="Facebook Post 4" className="facebook-embed" />
    </a>
  </div>,
  <div className="facebook-post" key="5">
    <a
      href="https://fb.watch/tEHc3VA5v6/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={images.feed5} alt="Facebook Post 5" className="facebook-embed" />
    </a>
  </div>,
];

export default items;