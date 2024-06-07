import React, {useState} from "react";
import { Select } from '@backstage/core-components';

export function ReproductionComponent(): React.JSX.Element {
  const [value, setValue] = useState('a');
  const [listItems, setListItems] = useState([{ value: 'a', label: 'a' }]);

  function onButtonClick() {
    setListItems([]);
    setValue('');
  }
  function onChange() {}
  return (
    <>
      <input
        type="button"
        value="click me to see the error"
        onClick={onButtonClick}
      />
      <Select
        items={listItems}
        label="second"
        onChange={onChange}
        selected={value}
        placeholder=""
      />
    </>
  );
}