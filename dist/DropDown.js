import React from 'react';
const dd_option_styles = {
  padding: '0.5rem',
  borderBottom: '1px solid lightgray'
};
export default function DropDown({
  options,
  color,
  backgroundColor,
  ddMenuBackgroundColor,
  onOptionSelect
}) {
  const [isDropped, setDropped] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [ddOptions, setDDOptions] = React.useState(options);
  return React.createElement("div", null, React.createElement("div", {
    style: {
      border: '1px solid lightgray',
      borderRadius: '0.3em',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      padding: '0.5rem',
      borderBottom: isDropped ? '1px solid lightgray' : 0,
      background: 'lightgray',
      color: color ? color : 'inherit',
      backgroundColor: backgroundColor ? backgroundColor : 'inherit'
    },
    onClick: e => {
      setDropped(true);
      e.currentTarget.contentEditable = true;
      setDDOptions(options);
    },
    onInput: e => {
      if (e.currentTarget.innerText) {
        setDDOptions(filterOptions(options, e.currentTarget.innerText));
      }
    },
    contentEditable: selectedOption ? false : isDropped ? true : false
  }, selectedOption ? selectedOption : isDropped ? null : 'Select an Option'), isDropped ? React.createElement("div", null, ddOptions.map(o => React.createElement("div", {
    style: {
      background: ddMenuBackgroundColor ? ddMenuBackgroundColor : 'inherit',
      ...dd_option_styles
    },
    onClick: e => {
      if (onOptionSelect && typeof onOptionSelect === 'function') {
        e.value = e.currentTarget.innerText;
        onOptionSelect(e);
      }

      setSelectedOption(e.currentTarget.innerText);
      setDropped(false);
    },
    key: btoa(Math.random() * Math.random() + '')
  }, o))) : null));
}

function filterOptions(array = [], target) {
  const filteredArray = [];
  array.forEach(item => item.includes(target) ? filteredArray.push(item) : null);
  return filteredArray;
}