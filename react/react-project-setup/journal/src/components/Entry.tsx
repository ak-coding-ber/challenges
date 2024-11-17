import "./Entry.css";
import star from "../assets/star.svg";
import starFilled from "../assets/star-filled.svg";

interface entryProps {
  isFavorite: boolean;
}

export default function Entry({ isFavorite }: entryProps) {
  return (
    <li className="entry">
      <p className="entry__date">Nov 11, 2024</p>
      <div className="entry__heading">
        <h2 className="entry__headingText">"That's life in the city"</h2>
        <img
          src={isFavorite ? starFilled : star}
          alt={isFavorite ? "favorite-icon-filled" : "favorite-icon"}
        />
      </div>

      <p className="entry__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum natus,
        ab culpa ratione fugiat magnam, repellendus deleniti eius tempora autem
        asperiores quisquam consequatur dolore libero porro perspiciatis? Vitae,
        maiores labore.
      </p>
      <hr className="entry__divider" />
    </li>
  );
}
