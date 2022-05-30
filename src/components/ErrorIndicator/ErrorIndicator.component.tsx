import { ErrorProps } from "../../typings/types/ErrorProps.type";

const ErrorIndicator = (props: ErrorProps) => {
  const { message, header } = props;
  return (
    <div className="container">
      <div className="error">
        {/* <img src={icon} alt="Error Icon" className="error-icon" /> */}
        <h4 className="error-header">{header}</h4>
        <p className="error-subheader">
          Something has gone terribly wrong
          <br />
          <span className="error-subheader__message">{message}</span>
        </p>
      </div>
    </div>
  );
};

export default ErrorIndicator;
