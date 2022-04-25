import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredTop">
        <h1 className="featuredTitle">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featuredBottom"></div>
    </div>
  );
}

export default Featured;
