import type { ReactFormExtendedApi } from "@tanstack/react-form";
import { Input } from "./ui/input";

interface FormInputFieldProps {
  form: ReactFormExtendedApi<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
  name: string;
  onChange: (v: string) => void;
}

const FormInputField = ({
  form,
  name,
  onChange: _onChange,
}: FormInputFieldProps) => {
  return (
    <>
      <form.Field name={name}>
        {({ state, handleBlur, handleChange }) => {
          console.log("Name field state :::", state);

          return (
            <>
              <Input
                value={state.value}
                onBlur={handleBlur}
                onChange={(e) => handleChange(e.target.value)}
              />
              {state.meta.errors.length > 0 && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {state.meta.errors[0]?.message}
                </div>
              )}
            </>
          );
        }}
      </form.Field>
    </>
  );
};

export default FormInputField;
