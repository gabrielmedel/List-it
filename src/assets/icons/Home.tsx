import React from "react";
import "../../App.css";
import { ReactComponent as Icon } from "./home.svg";

export const Home = () => {
    return (
        <div className="home">
            <Icon className="home__icon" />
        </div>
    );
};
