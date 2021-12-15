import "./Tobeannounced.scss";
import {Sponsors} from "../Sponsors/Sponsors"
export default function Tobeannounced() {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
     class="to-be-announced">
      <div>
        <h1>Swags</h1>
        <p>To be announced!!!!</p>
        <h1>Leaderboard</h1>
        <p>To be announced!!!!</p>
        <h1>Sponsors</h1>
        <div className="Sponsor-sections">
          <Sponsors/>
        </div>
        <p>To be announced!!!!</p>
      </div>
    </div>
  );
}
