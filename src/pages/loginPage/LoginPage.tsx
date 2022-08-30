import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginPageProps } from "../../styled/ILoginPageProps/ILoginPageProps";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import { loginUser } from "../../redux/store/reducers/authReducer/AuthAction";
import { ButtonConfirm } from "../../shared/buttonConfirm/ButtonConfirm";
import { ErrorBlock } from "../../shared/errorBlock/ErrorBlock";
import { LoadingBlock } from "../../shared/loadingBlock/LoadingBlock";
import { TextInput } from "../../shared/texInput/TextInput";
import "./LoginPage.scss";

export const LoginPage: React.FC<ILoginPageProps> = ({
  loggedIn,
  setLoggedIn,
}) => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");
  const [valueInputDirty, setValueInputDirty] = useState(false);
  const [valueInputError, setValueInputError] = useState("");

  const dispatch = useAppDispatch();

  const { isLoading, error, userToken } = useAppSelector(
    (state) => state.authReducer
  );

  const onLoginChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValueInput(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setValueInputError("");
    } else setValueInputError("Введите имя длиной не менее 2 символов");
  };

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valueInput.length > 1) {
      localStorage.setItem("username", valueInput);
      dispatch(loginUser());
    }
    userToken ? setLoggedIn(true) : setLoggedIn(false);
  };

  const onHandleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.name === valueInput) {
      setValueInputDirty(true);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  });

  return (
    <div>
      <form className="login" onSubmit={onHandleSubmit}>
        <div className="login-title">Авторизуйтесь в приложении:</div>
        <div className="login-field">
          <TextInput
            id="username"
            valueInput={valueInput}
            onChange={onLoginChange}
            onBlur={onHandleBlur}
            autoFocus
          />
          {(valueInputDirty || valueInputError) && (
            <div className="warning-text">{valueInputError}</div>
          )}
        </div>

        <div className="login-btn">
          <ButtonConfirm text="ВОЙТИ" color="#82b284" />
        </div>
        <div className="login-loading">
          {isLoading && (
            <div>
              <LoadingBlock />
            </div>
          )}
        </div>
        <div className="login-error">
          {error && (
            <div>
              <ErrorBlock />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
