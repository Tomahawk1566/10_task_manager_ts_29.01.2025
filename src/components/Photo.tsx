 import { FC } from "react";

interface IPhoto {
  title: string;
  url: string;
}

const Photo: FC<IPhoto> = ({ title, url }) => {
  return (
    <div className="card mb-3">
      <img src={url} alt={title} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

export default Photo;