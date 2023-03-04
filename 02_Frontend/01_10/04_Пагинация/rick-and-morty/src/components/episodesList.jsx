import React, { useEffect, useState } from "react";
import { fetchAll, fetchYears } from "../fakeApi/episodeApi";
import { paginate } from "../utils/paginate";
import Episode from "./episode";
import GroupList from "./groupList";
import Pagination from "./pagination";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [years, setYears] = useState([]);
  const [filter, setFilter] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const count = episodes.length;
  const pageSize = 8;

  const getEpisodes = () => {
    fetchAll(years).then((response) => {
      setEpisodes(response);
      setCurrentPage(1);
    });
  };

  useEffect(() => {
    fetchYears().then((response) => setYears(response));
  });

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pageEpisodes = paginate(episodes, currentPage, pageSize);

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-4">
          <GroupList
            items={years}
            filter={filter}
            onChangeFilter={handleFilterChange}
          />
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
