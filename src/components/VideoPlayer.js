// components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Importer les styles de Video.js

const VideoPlayer = ({ src, poster }) => {
  const videoNode = useRef(null); // Référence pour le lecteur vidéo

  useEffect(() => {
    if (videoNode.current) {
      const player = videojs(videoNode.current, {
        autoplay: true,
        controls: true,
        sources: [
          {
            src,
            type: 'video/mp4', // Indiquer le type de vidéo (à adapter si nécessaire)
          },
        ],
      });

      return () => {
        player.dispose(); // Nettoyer à la destruction du composant
      };
    }
  }, [src]);

  return (
    <div>
      <video
        ref={videoNode}
        className="video-js vjs-default-skin"
        poster={poster} // Afficher une image avant la lecture de la vidéo
      ></video>
    </div>
  );
};

export default VideoPlayer;