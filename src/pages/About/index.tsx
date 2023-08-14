import React from "react";

import { PageTitle } from "src/components";

import {
  AboutBackground,
  HistoryImage1,
  HistoryImage2,
  HistoryImage3,
  HistoryImage4,
  HistoryImage5,
  HistoryImage6,
  HistoryImage7,
  HistoryImage8,
  HistoryImage9,
  HistoryImage10,
  HistoryImage11,
} from "src/assets/images";

import "./style.css";

const About = () => {
  return (
    <React.Fragment>
      <PageTitle title="About" background={AboutBackground} />

      {/* History Section */}
      <div className="about-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="history-section">
                <img className="history-header-image" src={HistoryImage1} alt="History Image" />

                <h2 className="history-section-title">Sartoria Monterado</h2>

                <div className="history-section-description">
                  <img className="image image-left" src={HistoryImage2} alt="History Image" />
                  Sartoria Monterado was founded in the municipality of Monterado, in the famous
                  province of Ancona, in the 1930s. First of all, beautiful Marche region - on the
                  Adriatic coast of Italy always was a pool of skilled workers and experienced
                  tailors.
                </div>

                <div className="history-section-description">
                  This combination of characteristics prepared the ground for the winning idea: to
                  create a brand for tailoring clothes with exclusive production "Made in Italy".
                  <img className="image image-right" src={HistoryImage3} alt="History Image" />
                </div>

                <div className="history-section-description" style={{ marginTop: "65px" }}>
                  First of all, it is an Italian family business. It was founded in the 30s by the
                  "maestro" Giuseppe Mondini, joined at an early age by his sons Federico and
                  Gennaro Mondini.
                </div>

                <div className="history-section-description">
                  <img className="image image-left" src={HistoryImage4} alt="History Image" />
                  Sartoria Monterado was founded in the municipality of Monterado, in the famous
                  province of Ancona, in the 1930s. First of all, beautiful Marche region - on the
                  Adriatic coast of Italy always was a pool of skilled workers and experienced
                  tailors. This combination of characteristics prepared the ground for the winning
                  idea: to create a brand for tailoring clothes with exclusive production "Made in
                  Italy".
                </div>

                <div className="history-section-description mt-70">
                  <img className="image image-right" src={HistoryImage5} alt="History Image" />
                </div>

                <div className="history-section-description">
                  First of all, it is an Italian family business. It was founded in the 30s by the
                  "maestro" Giuseppe Mondini, joined at an early age by his sons Federico and
                  Gennaro Mondini. Federico Mondini was born in 1944, and when he was only ten
                  years, he began to comprehend the first concepts of tailoring under the guidance
                  of his experienced father. In 1968, Federico Mondini opens his first own atelier
                  for bespoke tailoring at 8 Via del Lavoro in Ancona, Monterado municipality, where
                  he works to this day and which, almost 60 years later, is still the only Monterado
                  Tailoring in Ancona.
                </div>

                <div className="history-section-description">
                  <img
                    className="image image-left"
                    src={HistoryImage6}
                    alt="History Image"
                    style={{ objectFit: "contain" }}
                  />
                  Maestro Giuseppe repeated to his students that a good tailor is none other than a
                  master,which creates perfect clothes for different typical figures. And his words
                  were not simpleguess. In 1930, he designed, cut and sewed clothes with a
                  never-before-seen lineand unusual trim details: he designed a jacket with a
                  non-cut off side, and a raised armhole.
                </div>

                <div className="history-section-description">
                  <img className="image image-right" src={HistoryImage7} alt="History Image" />
                </div>

                <div className="history-section-description">
                  Clothing that in the sixties was still considered an alternative, and in the
                  nineties was definitively consecrated as an example of sophistication. It was a
                  revolution in the art of individual tailoring. Something very similar to what
                  happened at the same time in the visual arts of Italy, with the advent of Futurism
                  and especially the work of one of its greatest artists, Umberto Boccioni.
                </div>

                <div className="history-section-description">
                  This artist was a masterful expressionist of the movement of forms and the
                  substance of matter, questioning the excessive static character of Cubism. It was
                  a southern style invention and that piece of clothing that today the whole world
                  simply unconsciously calls a "jacket". What Giuseppe, young in those years,
                  created was not only an opportunity for new practicality, liberating lightness,
                  but also the perfect image of a person.
                  <img
                    className="image image-left"
                    src={HistoryImage8}
                    alt="History Image"
                    style={{ objectFit: "contain" }}
                  />
                  His cutting method differed from the classNameical methods of the schools of
                  England and France in that he was able to constructively shape the shoulders and
                  armholes using only natural features male torso, while not using any applied
                  materials (shoulder pads, etc.), explaining this by the fact that if a man has his
                  own shoulders, why does he need additional ones - artificial shoulders.
                </div>

                <img className="image image-right mt-70" src={HistoryImage9} alt="History Image" />

                <div className="history-section-description mt-100">
                  A special cutting method, along with soft shoulders, with an unusual shape of the
                  pockets and a verybold chest pocket in the shape of a trapezoid. It is these
                  features of individual tailoringallowed to move from a person who dresses
                  elegantly for reasons of etiquette to one who,dressing does nothing but
                  self-expression.
                </div>

                <img className="image image-left mt-70" src={HistoryImage10} alt="History Image" />

                <div className="history-section-description mt-100">
                  Since the early days of the atelier-workshop in Monterado, it has been a
                  reflection of Sartoria Monterado's creative craftsmanship, its close association
                  with the Marche region, and its impressive know-how, closely linked to the
                  tradition of craftsmanship in Ancona. The use of the finest Italian raw materials
                  combines with the fundamental skills of passionate craftsmen dedicated to the
                  noble art of a job well done, shaping exquisite, bespoke creations for a new
                  approach to tailoring that can keep up with the times.
                </div>

                <p className="history-section-description mt-50">
                  We have been producing high quality formal and casual wear for the elegant man
                  since the early 30s. years. Refined classNameicism and technical virtuosity are
                  the keynotes of our brand inspired by Italian-cut clothes that are worn with
                  unrestricted ease. In our workshop, cutters turn gorgeous fabrics in bespoke,
                  tailor-made and ready-to-wear collections, attention to detail, perfection the cut
                  and typical soft construction are the company's true heritage. From the start we
                  dared to experiment with different techniques and push the boundaries of
                  traditional style with subtle details such as slightly flared lapel, spalla
                  camicia (shouldered shoulders), hand-stitched fronts and buttonholes, and a
                  particularly notable relaxed fit. To this day, we prefer soft, fitted jackets and
                  jackets that harmoniously fit almost like a second leather - and this is a tribute
                  to tradition. Jackets "Sartoria Monterado" are recognizable by high armholes,
                  without shoulder pads, with raised ruffled and with the lightest lining you can
                  find on the market today. The highest level of tailoring art - our "Ready-to-Wear"
                  collection, crafted from handmade craftsmanship, high-quality fabrics and
                  contemporary elements, has been recognized and appreciated by many prestigious
                  tailoring retailers. We like to easily "wear" elegance, while drawing on
                  traditional wardrobe codes to make a statement of their own style. Italian style
                  always present in every suit, in every jacket, in every coat and in every detail.
                </p>

                <img className="history-footer-image" src={HistoryImage11} alt="History Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
