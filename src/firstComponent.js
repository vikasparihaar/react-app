import { directive, react } from "@babel/types";
import React from "react";
import { render } from "react-dom";

function firstComponent() {
    return (
        <react.Fragment>
        <div>
            <p>
                this is my first para
            </p>

        </div>
        <div>

        </div>
        </react.Fragment>
    )
}