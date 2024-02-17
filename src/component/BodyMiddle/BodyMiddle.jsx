import { useEffect, useState } from "react";
import AddBook from "../AddBook/AddBook";
import AllBooks from "../AllBooksContent/AllBooks";
import CategoryContent from "../CategoryContent/CategoryContent";
import Discover from "../Discover/Discover";
import "./BodyMiddle.css";
function BodyMiddle({ selectedAction }) {
  const [actionName, setActionName] = useState("");
  useEffect(() => {
    switch (selectedAction) {
      case "allBooks":
        setActionName("All Books list");
        break;
      case "category":
        setActionName("Books by Category");
        break;
      case "addbooks":
        setActionName("Add new book");
        break;
      default:
        setActionName("Discover our new");
        break;
    }
  }, [selectedAction]);
  return (
    <div className="MiddleBody">
      <div className="Middlehead">
        <h4>{actionName}</h4>
        <span>All</span>
      </div>
      <div className="Middlecontent">
        {selectedAction === "discover" && <Discover />}
        {selectedAction === "allBooks" && <AllBooks />}
        {selectedAction === "category" && <CategoryContent />}
        {selectedAction === "addbooks" && <AddBook />}
      </div>
    </div>
  );
}

export default BodyMiddle;
