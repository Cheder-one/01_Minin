import React from "react";
import { episodes } from "../fakeStorage/episodes";

const EpisodesList = () => {
  return (
    <div className="container">
      <div className="row"></div>
      {episodes.map((episode) => (
        <div key={episode.id} style={{ height: "200px" }} className="col-3">
          {episode.name}
        </div>
      ))}
    </div>
  );
};

export default EpisodesList;
