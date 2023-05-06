/* eslint-disable react/prop-types */
import "./LikeContainer.css";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const LikeContainer = ({photo, user, handleLike}) => {
  return (
    <div className="like">
        {photo.likes && user && (
            <>
                {photo.likes.includes(user._id)
                ? (<BsHeartFill />)
                : (<BsHeart onClick={() => handleLike(photo)} />)}
                {photo.likes.length === 0 && (
                    <p>Nenhum Like</p>
                )}
                {photo.likes.length === 1 && (
                    <p>1 like</p>
                )}
                {photo.likes.length > 1 && (
                    <p>{photo.likes.length} likes</p>
                )}
            </>
        )}
    </div>
  )
}

export default LikeContainer