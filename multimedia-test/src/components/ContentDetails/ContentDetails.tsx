import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Movie } from '../../types/types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navigate } from 'react-router-dom';

import '../../styles/contentDetails.css';

interface Props {
  movie: Movie | null;
  isLoggedIn: boolean;
}

const ContentDetails: React.FC<Props> = ({ movie, isLoggedIn }) => {
  const [centredModal, setCentredModal] = useState(false);
  const [videoPlayer, setVideoPlayer] = useState<React.ReactNode>(null);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (!movie) {
    return <div>No movie selected</div>; 
  }

  const toggleOpen = () => {
    setCentredModal(!centredModal);
    if (!centredModal && movie) { 
      const videoId = movie.videoUrl.split('watch?v=')[1];
      setVideoPlayer(
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else {
      setVideoPlayer(null);
    }
  };

  return (
    <div className="content-details">
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <div className="details-container">
            <div className="poster">
              <MDBBtn onClick={toggleOpen} className='video-image'>
                <img src={movie.poster} alt={movie.title} />
              </MDBBtn>
            </div>
            <div className="details">
              <p><strong>Título:</strong> {movie.title}</p>
              <p><strong>Descripción:</strong> {movie.sinopsis}</p>
              <p><strong>Poster:</strong> {movie.poster}</p>
            </div>
          </div>

          <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal} id='videoModal' backdrop>
            <MDBModalDialog centered size='lg'>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>{movie.title}</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  {videoPlayer}
                </MDBModalBody>
                <MDBModalFooter>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </>
      )}
    </div>
  );
};

export default ContentDetails;
