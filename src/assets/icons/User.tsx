import React from "react";
import "../../App.css";
import { ReactComponent as IconPlus } from "./person.svg";

export const User = () => {
    return (
        <div className="Person">
            <IconPlus className="home__icon" />
        </div>
    );
};
