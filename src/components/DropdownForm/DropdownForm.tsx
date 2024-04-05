import React, {useState} from "react";
import {Sizes, sizeToClass} from "../../utils/utils";

export interface Option {
  isDisabled?: boolean;
  value: string;
  label: string;
}

export interface DropdownOptionProps {
  options: Option[];
  isRadio?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconType?: "material" | "boxicon";
  size?: Sizes;
  idDropdown?: string;
  isDisabled?: boolean;
}

export interface CheckboxStates {
  [key: string]: boolean;
}

const DropdownForm = ({
  options,
  isRadio = false,
  children,
  icon,
  iconType,
  size,
  idDropdown,
  isDisabled = false,
}: DropdownOptionProps): JSX.Element => {
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  const handleRadioChange = (radioName: string) => {
    const selectedOption = options.find((option) => option.value === radioName);

    if (selectedOption && selectedOption.isDisabled) {
      return;
    }

    setSelectedOption(selectedOption?.label || null);

    const updatedCheckboxStates: CheckboxStates = {};
    options.forEach((option) => {
      updatedCheckboxStates[option.value] = option.value === radioName;
    });
    setCheckboxStates(updatedCheckboxStates);
  };

  const selectedCheckboxCount = Object.values(checkboxStates).filter(
    (checked) => checked,
  ).length;
  const dropdownTitle =
    selectedCheckboxCount > 0
      ? `Desplegable (${selectedCheckboxCount})`
      : "Desplegable";
  const displayTitle = selectedOption ? selectedOption : dropdownTitle;

  const generateUniqueID = (value: string, isRadio: boolean) => {
    const prefix = isRadio ? "radio" : "checkbox";
    return `${prefix}-${value}-${Math.random().toString(36).substr(2, 9)}`;
  };

  return (
    <>
      <div className="dropdown dropdown-form">
        <button
          type="button"
          className={`btn btn-dropdown btn-dropdown-border ${
            size !== undefined && sizeToClass(size)
              ? `btn-dropdown-${sizeToClass(size)} `
              : ""
          }`.trim()}
          data-toggle="collapse"
          data-target={`#${idDropdown}`}
          aria-controls={idDropdown}
          aria-expanded="false"
          aria-label="Toggle"
        >
          {icon && iconType === "material"
            ? icon
            : icon && <i className={`bx ${icon}`}></i>}
          <span className="btn-dropdown-text">{displayTitle}</span>
          <span className="material-icons-round btn-dropdown-icon">
            expand_more
          </span>
        </button>
        <div className="dropdown-menu dropdown-body collapse" id={idDropdown}>
          {options.map((option) => (
            <div
              className={`custom-control ${
                isRadio ? "custom-radio" : "custom-checkbox"
              }`}
              key={option.value}
            >
              {isRadio ? (
                <label
                  className={`btn btn-chip ${
                    checkboxStates[option.value] ? "active" : ""
                  } ${option.isDisabled ? "disabled" : ""}`}
                >
                  <input
                    className="btn-check"
                    type="radio"
                    id={generateUniqueID(option.value, isRadio)}
                    name="profession"
                    value={option.value}
                    checked={checkboxStates[option.value]}
                    onChange={() => handleRadioChange(option.value)}
                  />
                  <span className="btn-chip-text">{option.label}</span>
                  {children}
                </label>
              ) : (
                <>
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id={`skills-${option.value}-input`}
                    name="skills"
                    value={option.value}
                    checked={checkboxStates[option.value]}
                    onChange={() => handleCheckboxChange(option.value)}
                    disabled={isDisabled || option.isDisabled}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`skills-${option.value}-input`}
                  >
                    {option.label}
                  </label>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropdownForm;
