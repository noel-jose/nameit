import React from "react";
import "./ResultsContainer.css";
import NameCard from "../NameCard/NameCard.jsx";

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="resultsContainer">{suggestedNameJsx}</div>;
};

export default ResultsContainer;
