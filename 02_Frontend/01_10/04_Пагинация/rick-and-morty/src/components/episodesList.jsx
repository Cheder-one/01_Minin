import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import { paginate } from "../utils/paginate";
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
  const count = episodes.length;
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pageEpisodes = paginate(episodes, currentPage, pageSize);

  return (
    <div className="container">
      <div className="row">
        {pageEpisodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </div>
      <div className="row">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default EpisodesList;
