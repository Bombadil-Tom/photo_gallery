import React, { useState, useEffect } from "react";

import Picture from "container/Picture";
import DetailView from "container/DetailView";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [detailView, setDetailView] = useState({});

  const onSetDetailView = e => {
    const { src } = e.target;
    const { id } = e.target.dataset;

    if (!src) setDetailView({});

    let { index } = detailView;

    if (!index) index = images.map(img => img.id).indexOf(parseInt(id, 10));

    setDetailView({ ...images[index], index });
  };

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(images => setImages(images));
  }, []);

  const renderPictures = () => {
    return images.map(({ caption, url, id }, idx) => (
      <Picture
        key={idx}
        caption={caption}
        url={url}
        onClick={onSetDetailView}
        id={id}
      />
    ));
  };

  const handleBtnClick = e => {
    const { action } = e.target.dataset;

    const { index } = detailView;

    if (action === "prev") {
      const prev = images[index - 1];
      setDetailView({ ...prev, index: index - 1 });
    } else if (action === "next") {
      const next = images[index + 1];
      setDetailView({ ...next, index: index + 1 });
    } else if (action === "close") {
      setDetailView({});
    }
  };

  return (
    <div>
      {detailView.url ? (
        <DetailView img={detailView} handleClick={handleBtnClick} />
      ) : (
        renderPictures()
      )}
    </div>
  );
};

export default PhotoGallery;
