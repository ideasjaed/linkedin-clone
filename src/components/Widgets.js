import React from "react";
import "./Widgest.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn Noticias</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Celebra el Día Internacional de la Mujer",
        "Noticias principales • 848 lectores"
      )}
      {newsArticle("La inflación se acelara en febrero", "hace 9 horas")}
      {newsArticle(
        "Covid-19/Vacuna: toda la información actualizada",
        "hace 8 horas • 614 lectores"
      )}
      {newsArticle(
        "México, con la brecha salarial más alta entre mujeres y hombres con hijos pequeños",
        "hace 1 día • 282 lectores"
      )}
      {newsArticle(
        "La OCDE mejora el pronóstico de crecimiento para México",
        "hace 8 horas"
      )}
    </div>
  );
}

export default Widgets;
