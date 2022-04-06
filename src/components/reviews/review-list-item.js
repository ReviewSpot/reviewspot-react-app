import React from "react";

const ReviewListItem = ({ review }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-4">
          <img
            src={review.profile_pic}
            className="rs-img-192 img-fluid"
            alt="Profile Picture"
          />
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-between">
            <div>
              <span className="text-muted me-1">Review by</span>
              <span>{review.user_name}</span>
            </div>
            <div>Likes: {review.likes}</div>
          </div>

          <div className="w-50">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                style={{ width: `${review.rating}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div>{review.review}</div>
          <div>Replies: {review.replies}</div>
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;