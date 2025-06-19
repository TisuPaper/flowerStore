'use client';

import StarRating from './StarRating';

interface TestimonialProps {
  avatarUrl: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  likes: number;
  dislikes: number;
}

export default function Testimonial({
  avatarUrl,
  name,
  date,
  rating,
  comment,
  likes,
  dislikes
}: TestimonialProps) {
  return (
    <div className="flex flex-col gap-3 bg-white">
      <div className="flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("${avatarUrl}")`
          }}
        />
        <div className="flex-1">
          <p className="text-[#181112] text-base font-medium leading-normal">
            {name}
          </p>
          <p className="text-[#896168] text-sm font-normal leading-normal">
            {date}
          </p>
        </div>
      </div>
      <StarRating rating={rating} />
      <p className="text-[#181112] text-base font-normal leading-normal">
        {comment}
      </p>
      <div className="flex gap-9 text-[#896168]">
        <button className="flex items-center gap-2">
          <div
            className="text-inherit"
            data-icon="ThumbsUp"
            data-size="20px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
            </svg>
          </div>
          <p className="text-inherit">{likes}</p>
        </button>
        <button className="flex items-center gap-2">
          <div
            className="text-inherit"
            data-icon="ThumbsDown"
            data-size="20px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
            </svg>
          </div>
          <p className="text-inherit">{dislikes}</p>
        </button>
      </div>
    </div>
  );
}