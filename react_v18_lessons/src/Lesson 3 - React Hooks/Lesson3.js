import React from 'react';
import {ExampleOfUseEffect1, ExampleOfUseEffect2} from './useEffect-Hook';
import {ExampleOfUseRef1, ExampleOfUseRef2} from './useRef-Hook';
import {ExampleOfUseId, ExampleOfUseTransition} from './useId-Hook';

function Lesson3() {
    return (
      <div className="Lesson3">
        <ExampleOfUseEffect1 />
        <ExampleOfUseEffect2 />
        <ExampleOfUseRef1 />
        <ExampleOfUseRef2 />
        <ExampleOfUseId />
        <ExampleOfUseTransition />
      </div>
    );
}

export default Lesson3;