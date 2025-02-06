import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./InputOtp.module.css";

const InputOtp = ({
  numInputs = 4,
  value,
  onChange,
  onComplete,
  isInvalid,
  errorMessage,
  otpStyle,
  containerStyle,
  ...rest
}) => {
  const [otp, setOtp] = useState(Array(numInputs).fill(""));

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange && onChange(newOtp.join(""));

    // Automatically move to the next input
    if (value && index < numInputs - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    // Trigger onComplete when all inputs are filled
    if (newOtp.every((digit) => digit !== "") && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div className={styles.container} style={containerStyle}>
      {Array(numInputs)
        .fill("")
        .map((_, index) => (
          <Form.Control
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            isInvalid={isInvalid}
            className={styles.otpInput}
            style={otpStyle}
            {...rest}
          />
        ))}
      {isInvalid && (
        <Form.Control.Feedback type="invalid" className={styles.error}>
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </div>
  );
};

export default InputOtp;
