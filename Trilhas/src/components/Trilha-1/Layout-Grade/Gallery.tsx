import brs1 from "../../../assets/brs1.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery">
        <div className="gallery-item">
          <img src={brs1} alt="Imagem 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={brs1} alt="Imagem 2" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={brs1} alt="Imagem 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={brs1} alt="Imagem 4" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
