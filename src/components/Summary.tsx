import { profile } from "@/data/portfolio";

const Summary = () => (
  <section id="about" className="section site-container about-section" tabIndex={-1}>
    <figure className="about-portrait">
      <img src={`${import.meta.env.BASE_URL}portrait.webp`} alt="Saurabh sitting outdoors among rocks and trees" width="480" height="600" loading="lazy" decoding="async" />
      <figcaption>Away from the keyboard.</figcaption>
    </figure>
    <div className="about-copy">
      <div className="about-heading">
        <p className="eyebrow"><span className="section-number">07</span>About me</p>
        <h2>A bit about me</h2>
      </div>
      {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <dl className="personal-notes">
        <div><dt>Based in</dt><dd>{profile.location}</dd></div>
        <div><dt>Language</dt><dd>English / Full professional proficiency</dd></div>
      </dl>
    </div>
  </section>
);

export default Summary;
