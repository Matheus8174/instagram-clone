import React from 'react';
import type { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  variant?: 'password' | 'generateNumber';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, variant, ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(
      forwardedRef,
      () => ref.current as HTMLInputElement
    );

    const numberGenerated = React.useRef('');

    const [showPassword, setShowPassword] = React.useState(false);

    const generateRandomNumber = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    function handleGenerateRandomNumbers() {
      const inputValue = ref.current?.value;

      const indexGeneratedNumber = inputValue?.indexOf(numberGenerated.current);

      const valueWithNoGeneratedNumber = inputValue?.slice(
        0,
        typeof indexGeneratedNumber !== 'undefined' && indexGeneratedNumber <= 0
          ? undefined
          : indexGeneratedNumber
      );

      const ramdomNumber = generateRandomNumber(100, 9999);

      numberGenerated.current = ramdomNumber.toString();

      if (ref.current?.value)
        ref.current.value = `${valueWithNoGeneratedNumber}${ramdomNumber}`;
    }

    // function handleShowPassword() {
    //   if (ref.current?.type === 'password') {
    //     setShowPassword(true);

    //     ref.current.type = 'text';
    //   } else if (ref.current?.type === 'text') {
    //     setShowPassword(false);

    //     ref.current.type = 'password';
    //   }
    // }

    // React.useEffect(() => {
    //   console.log('PNIS');

    //   setShowPassword((prev) => (prev === true ? false : true));
    // }, [ref.current?.type]);

    React.useEffect(() => {
      // console.log('CC', ref.current?.type);

      if (ref.current?.type === 'password') {
        ref.current.type = 'text';
      } else if (ref.current?.type === 'text') {
        ref.current.type = 'password';
      }

      // console.log('PP', ref.current?.type);
    }, [showPassword]);

    function handleShowPassword() {
      setShowPassword((prev) => (prev === true ? false : true));
    }

    const isPassword = ref.current?.type === 'password' ? 'Mostrar' : 'Ocultar';

    return (
      <div>
        <label className="flex gap-2 justify-between items-center w-full text-sm placeholder:text-sm outline-none px-4 py-2 rounded-sm bg-gray-50 border-gray-300 border-[1px] text-black">
          <input
            aria-required
            {...props}
            ref={ref}
            className="outline-none border-none bg-transparent w-full"
          />

          <div className="flex gap-2">
            {error && <div className="icons-background-core error-circle" />}

            {!error && <div className="icons-background-core accept" />}

            {variant === 'generateNumber' ? (
              <div
                className="icons-background-core circle-arrow cursor-pointer active:brightness-125"
                onClick={() => handleGenerateRandomNumbers()}
              />
            ) : null}

            {variant === 'password' ? (
              <button
                type="button"
                className="font-bold cursor-pointer"
                onClick={() => {
                  handleShowPassword();
                }}
              >
                {isPassword}
              </button>
            ) : null}
          </div>
        </label>
      </div>
    );
  }
);

Input.displayName = 'input';

export default Input;
