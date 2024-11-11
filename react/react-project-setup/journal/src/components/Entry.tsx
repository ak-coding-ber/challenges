import "./Entry.css";

export default function Entry() {
  return (
    <li className="entry">
      <p className="entry__date">Nov 11, 2024</p>
      <h2 className="entry__heading">"That's life in the city"</h2>
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
