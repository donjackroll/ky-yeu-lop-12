import ClassInfo from "./ClassInfo";
import Teacher from "./Teacher";
import Leaders from "./Leaders";
import "./Body.css";

function Body() {
  return (
    <section className="body-wrapper">
      <div className="top-grid">
        <ClassInfo />
        <Teacher />
      </div>

      <Leaders />
    </section>
  );
}

export default Body;
