import { ErrorProps } from "../../typings/types/ErrorProps.type";
import { Link } from "react-router-dom";
import { BtnTemplate } from "../Templates/Templates.component";

const ErrorIndicator = (props: ErrorProps) => {
  const { message, header } = props;
  return (
    <div className="container">
      <div className="error flex flex-wrap flex-col min-h-[300px] justify-between">
        <h4 className="error__header text-[40px] font-medium text-red-600">
          {header}
        </h4>
        <div className="error-block ">
          <p className="">
            Something has gone terribly wrong. Ask website administrators to fix
            it.
          </p>
          <p className="error-block__message text-4xl text-blue-600">
            {message}
          </p>
        </div>
        <Link to="/">
          <BtnTemplate>Go back to home page</BtnTemplate>
        </Link>
      </div>
    </div>
  );
};

export default ErrorIndicator;
