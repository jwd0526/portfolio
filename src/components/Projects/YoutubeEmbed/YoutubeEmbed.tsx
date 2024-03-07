import React from "react";

interface YoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="753"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{ marginRight: "10px", width: "43vw", height: "55vh" }}
    />
  </div>
);

export default YoutubeEmbed;
