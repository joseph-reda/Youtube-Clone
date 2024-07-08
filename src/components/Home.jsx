import React, { useState } from "react";

import SideBar from "./SideBar";
import Feed from "./Feed";

function Home({ menuBar }) {
  const [category, setCategory] = useState(0);

  return (
    <div className="flex gap-5 bg-gray-50 max-sm:justify-center">
      <SideBar
        menuBar={menuBar}
        category={category}
        setCategory={setCategory}
      />
      <div>
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Home;
