import React, {useState} from "react";
import { Select, SelectedItems } from '@backstage/core-components';

export function ReproductionComponent(): React.JSX.Element {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    const allValues = ['a', 'b'];

    const firstItems = allValues.map((v) => ({ value: v, label: v }));
    const indexOfFirstValue = allValues.indexOf(firstValue);
    const secondValues =
        indexOfFirstValue === -1
        ? allValues
        : allValues.slice(indexOfFirstValue + 1);
    const secondItems = secondValues.map((v) => ({ value: v, label: v }));

    function onFirstChange(value: SelectedItems) {
        setFirstValue(value as string);
        setSecondValue('');
    }
    function onSecondChange(value: SelectedItems) {
        setSecondValue(value as string);
    }
    return (<>
     <Select
        items={firstItems}
        label="first"
        onChange={onFirstChange}
        selected={firstValue}
        placeholder=""
      />
      <Select
        items={secondItems}
        label="second"
        onChange={onSecondChange}
        selected={secondValue}
        placeholder=""
      />
      <hr />
      <p>
        <h3>Steps:</h3>
        <ul>
          <li>select 'a' in the first</li>
          <li>select 'b' in the second</li>
          <li>select 'b' in the first</li>
        </ul>
        You'll see an error in the console.
      </p>
    </>)
}