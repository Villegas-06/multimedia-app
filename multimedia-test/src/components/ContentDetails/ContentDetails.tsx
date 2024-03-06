import React, { useState } from 'react';
import { Movie } from '../../types/types';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

import '../../styles/contentDetails.css';

interface Props {
  movie: Movie;
}

const ContentDetails: React.FC<Props> = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const videoId = movie.videoUrl.split('watch?v=')[1];

  return (
    <div className="content-details">
      <h2>{movie.title}</h2>
      <div className="details-container">
        <div className="poster">
          <button type="button" className="btn btn-primary" onClick={() => setIsOpen(true)}>
            Ver Video
          </button>
        </div>
        <div className="details">
          <p><strong>Título:</strong> {movie.title}</p>
          <p><strong>Descripción:</strong> {movie.sinopsis}</p>
          <p><strong>Poster:</strong> {movie.poster}</p>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">{movie.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?si=bKWVgtQMUqNC9Wrp`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
