import { useState } from "react";
import { data } from "../../helper/data";
import PlayerCard from "../player/PlayerCard";
import "../../styles/style.css";

const Card_Container = () => {
  console.log(data);

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          className="w-50 border border-4 rounded-2"
          id="search"
          placeholder="Search Player.."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="card-container mt-3 d-flex flex-wrap justify-content-center gap-2">
        {data
          .filter((player) =>
            player.name.toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((player, id) => (
            <PlayerCard key={id} {...player} />
          ))}
      </div>
    </div>
  );
};

export default Card_Container;
