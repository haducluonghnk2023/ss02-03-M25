import React from "react";
import "./B5.scss";
export default function B5() {
  return (
    <div>
      <h2>B5</h2>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close-button">&times;</span>
            <h2>Delete blog post</h2>
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>
          </div>
          <div className="modal-footer">
            <button className="cancel-button">Cancel</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
