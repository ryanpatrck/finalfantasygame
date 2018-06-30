import React from "react";
import "./FighterCard.css";

const FighterCard = props => (
    <div className="card">
        <div className="img-container">
        <a onClick={()=> props.selectFighter(props.fighter)} 
            className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
            <img alt={props.fighter} src={props.image} />
        </a>
    </div>
</div>
);

export default FighterCard;