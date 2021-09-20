import React from "react";

const Field = React.forwardRef(
  ({ label, type, onChange, rules, validation, setValidation }, ref) => {
    const handleOnChange = (e) => {
      let value = e.target.value;
      let allgood = true;
      if (rules) {
        for (let rule of rules) {
          let errorMsg = rule(value);
          if (typeof errorMsg !== "boolean") {
            allgood = false;
          } else {
            allgood = true;
            errorMsg = "";
          }
          if (setValidation) {
            setValidation({
              valid: allgood,
              msg: errorMsg,
            });
          }
          if (!allgood) {
            break;
          }
        }
      }
    };

    return (
      <div className="flex flex-col mb-4">
        <input
          className="border-0 border-b-2 focus:outline-none py-2 px-3 text-grey-darkest"
          ref={ref}
          placeholder={label}
          type={type}
          onKeyPress={onChange}
          onChange={handleOnChange}
        />
        {validation.msg.length > 0 && (
          <span className="text-xs font-medium text-red-400">
            {validation.msg}
          </span>
        )}
      </div>
    );
  }
);

export default Field;
