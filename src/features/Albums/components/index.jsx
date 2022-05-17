import React from 'react';
import AlbumVertical from '../AlbumVertical';
import AlbumHorizontal from '../AlbumHorizontal';
import { useSelector } from 'react-redux';
import './styles.scss';

ListAlbum.propTypes = {};

function ListAlbum({ horizontal }) {
  const imgUrl = 'https://mdbootstrap.com/img/new/slides/041.webp';
  const listAlbum = useSelector((state) => state.album);
  console.log(listAlbum);
  if (horizontal) {
    return (
      <>
        <ul className="list-album">
          {listAlbum.map((album) => (
            <AlbumHorizontal
              key={'albumHor-' + album.id}
              title={album.title}
              imgUrl={album.url}
            />
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <ul className="">
        {listAlbum.map((album) => (
          <AlbumVertical
            key={'albumVer-' + album.id}
            title={album.title}
            imgUrl={album.url}
          />
        ))}
      </ul>
    );
  }
}

export default ListAlbum;
