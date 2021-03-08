import React from "react";
import "./App.css";
import Note from "./Components/Note/Note";
import Nav from "./Components/Nav/Nav";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Nav></Nav>
                <div className="notes-container">
                    <Note title="Compra lunes"></Note>
                    <Note title="Compra lunes"></Note>
                    <Note title="Compra lunes"></Note>
                    <Note title="Compra lunes"></Note>
                </div>
            </div>
        </div>
    );
}

export default App;
