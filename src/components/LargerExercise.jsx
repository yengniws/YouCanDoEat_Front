import "../css/modal.css";

export default function LargerExercise({name, description, image}){
  return (
      <div id="larger-exercise">
        <div>
          <img src={image} alt="image" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
  );
}