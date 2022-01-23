import ReviewList from "./ReviewList";
import { useState } from "react";
import { getReviews } from "../api";

function App() {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState('createdAt')
  const sortedItems = items.sort((a, b) => b[order]-a[order])

  const handleNewestClick = () => setOrder('createdAt')
  const handleBestClick = () => setOrder('rating')

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems)
  }

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  }
    
  return (
  <div>
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>별점순</button>
    </div>
    <ReviewList items={sortedItems} onDelete={handleDelete} />
    <button onClick={handleLoadClick}>불러오기</button>
  </div>
  );
}

export default App;