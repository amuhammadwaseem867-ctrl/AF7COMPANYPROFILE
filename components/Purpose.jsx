"use client";

import { PURPOSE } from "./content";
import { MaskLines, Reveal, ScrollWords } from "./motion";
import "./Purpose.css";

export default function Purpose() {
  return (
    <section className="purpose" id="purpose">
      <div className="wrap">
        <div className="purpose__pair">
          <Reveal className="purpose__block">
            <span className="label label--dot">Our Vision</span>
            <p>{PURPOSE.vision}</p>
          </Reveal>
          <Reveal className="purpose__block" delay={0.12}>
            <span className="label label--dot">Our Mission</span>
            <p>{PURPOSE.mission}</p>
          </Reveal>
        </div>

        <div className="purpose__commitment">
          <div className="section-head__meta">
            <span className="section-head__index">10</span>
            <span className="label label--dot">Our Commitment</span>
          </div>
          <div className="purpose__body">
            <MaskLines
              as="h2"
              className="purpose__lead"
              lines={[
                "Excellence is created",
                <>
                  through the <em className="serif">details.</em>
                </>,
              ]}
            />
            <ScrollWords className="purpose__statement" text={PURPOSE.commitment[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
