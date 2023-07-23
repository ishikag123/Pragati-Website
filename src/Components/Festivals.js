import React from "react";
import fest1 from "../Assets/fest1.jpg";
import "../Styles/Festivals.css";

export const Festivals = () => {
  return (
    <div className="fest-container">
      <h1>Festivals</h1>
      <p>
        Over the years, we have actively participated in numerous theater
        festivals, showcasing our productions and making our mark in the
        theatrical community. Additionally, since 1995, we have been organizing
        an annual Theatre Festival in Liluah and outside Liluah. This festival
        has been steadily gaining recognition, thanks to the participation of
        various theater groups, both familiar and unfamiliar to us, as well as
        the presence of talented individuals who contribute their unique
        perspectives and talents. It has become a platform where artistic
        endeavors flourish and creativity thrives.
      </p>
      <div className="fest-image">
        <img src={fest1} alt="" />
      </div>
      <p>
        In December 2020, 'Pragati' group organized a two-day theater festival
        at the premises of the Premium Theater, overcoming the restrictions
        imposed due to the COVID-19 pandemic. The festival took place in the
        garden house of Aban Thakur in Konnagar. It started with such enthusiasm
        that touched the hearts so deeply that the festival has been reserved
        for this garden house for at least two days since then. And this time,
        there was no exception. On January 21 and 22, a total of seven plays
        were performed in the open space of the garden house, selected by the
        groups that had chosen their space. Honestly speaking, some plays like
        "Tuntuni Lo" by Antarmukh or "Ekakiter Dinlipi" by Kalpana Theatre for
        Coz, couldn't be celebrated without this open sky and the congregation
        of greenery! Whose words can I leave behind or mention? Pragna Cultural
        Center's "Banuya Pirihi"! People who blend with the earth and present
        their own plays... Songs of the drama of certainty. Sitting under the
        tree... in that beautiful natural environment... That was also a rare
        experience. From January 23 to 26, the remaining part of the festival
        was held at Konnagar Rabindrabhavan. On the 23rd, there was Ushnik's
        "Dui Buror Rupkatha," a hilarious story with a satirical twist...
        Unforgettable performances by Shubhashis Mukhopadhyay and Kamal
        Chatterjee as the two old men. The next day, on the 24th, there was
        Ganakrishti's "Tomar Ami." Focusing on keeping a bookstore alive and
        performed with only two actors, it could be a play that is hard to
        imagine without seeing. Soma Dutt has acted alongside Debshankar Halder
        and created an enchanting performance. On the 25th, there were three
        plays by Konnagar's three groups. And there was "Sanko," Pragati's own
        play. The last day of the festival, January 26, featured the 98th show
        of Kasha Arghya's "Urubhangam," which was the biggest attraction of the
        festival.
      </p>
    </div>
  );
};
