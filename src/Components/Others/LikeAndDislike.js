import React from "react";
import "../Others/LikeAndDislike.css"

const LikeAndDislike = ({ likes, dislikes, onClickLike, onClickDislike }) => (
  <div className="like-dislike">
    <svg
      className="likeAndDislike-icon"
      width="19px"
      viewBox='0 0 512 512'
      onClick={onClickLike}
    >
      <title>Heart</title>
      <path d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z'
        fill='red'
        stroke='red'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='12' />
    </svg>
    <p className="likeAndDislike-number">{likes}</p>
    <svg
      className="likeAndDislike-icon"
      width="19px"
      viewBox='0 0 512 512'
      onClick={onClickDislike}
    >
      <title>Heart Dislike</title>
      <path d='M417.84 448a15.94 15.94 0 01-11.35-4.72L40.65 75.26a16 16 0 0122.7-22.56l365.83 368a16 16 0 01-11.34 27.3zM364.92 80c-48.09 0-80 29.55-96.92 51-16.88-21.48-48.83-51-96.92-51a107.37 107.37 0 00-31 4.55L168 112c22.26 0 45.81 9 63.94 26.67a123 123 0 0121.75 28.47 16 16 0 0028.6 0 123 123 0 0121.77-28.51C322.19 121 342.66 112 364.92 112c43.15 0 78.62 36.33 79.07 81 .54 53.69-22.75 99.55-57.38 139.52l22.63 22.77c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.8 58.61-153C475.37 130.52 425.54 80 364.92 80zM268 432C180.38 372.51 91 297.6 92 193a83.69 83.69 0 012.24-18.39L69 149.14a115.1 115.1 0 00-9 43.49c-.54 54.22 18.63 104.27 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.84 31.84 0 0036 0c20.35-13.81 37.7-26.5 52.58-38.11l-22.66-22.81C300.25 409.6 284.09 421.05 268 432z'
        fill='red'
      />
    </svg>
    <p className="likeAndDislike-number">{dislikes}</p>
  </div >
);

export default LikeAndDislike;