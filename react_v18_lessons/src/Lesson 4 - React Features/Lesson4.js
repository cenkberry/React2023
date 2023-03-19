import React from 'react';
import {ExampleOfConditionalRendering1, ExampleOfConditionalRendering2} from './ReactFeatures';
import {ExampleOfMapping, ExampleOfStyles} from './ReactFeatures';
import { ReactIcons} from './React-icons';
import { UsageOfModuleCss } from './ModuleCss';
import { UsageOfReactstrap } from './ReactStrap';

function Lesson3() {
    return (
      <div className="Lesson4">
        <ExampleOfConditionalRendering1 />
        <ExampleOfConditionalRendering2 />
        <ExampleOfMapping />
        <ExampleOfStyles />
        <ReactIcons/> 
        <UsageOfModuleCss/> 
        <UsageOfReactstrap/> 
      </div> 
    );
}

export default Lesson3;