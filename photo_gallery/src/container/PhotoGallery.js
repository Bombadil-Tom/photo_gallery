import React, { useState, useEffect } from "react";

import Picture from "container/Picture";
import DetailView from "container/DetailView";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [detailView, setDetailView] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(images => setImages(images));
  }, []);

  const renderPictures = () => {
    return images.map(({ caption, url }, idx) => (
      <Picture key={idx} caption={caption} url={url} onClick={setDetailView} />
    ));
  };

  return <div>{detailView ? <DetailView /> : renderPictures()}</div>;
};

export default PhotoGallery;
