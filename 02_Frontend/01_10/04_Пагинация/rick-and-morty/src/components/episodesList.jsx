import React, { useState } from "react";
import { episodes } from "../fakeApi/episodesApi";
import { paginate } from "../utils/paginate";
import Episode from "./episode";
import GroupList from "./groupList";
import Pagination from "./pagination";

const EpisodesList = () => {
  const count = episodes.length;
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  // const [episodes] = useState([]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pageEpisodes = paginate(episodes, currentPage, pageSize);

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-4">
          <GroupList />
        </div>
        <div className="col-8">
          <div className="row">
            {pageEpisodes.map((episode) => (
              <Episode key={episode.id} {...episode} />
            ))}
          </div>
          <div className="row">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;
