import { useForm } from "@tanstack/react-form";
import z from "zod";
import { Input } from "./components/ui/input";

const formSchema = z.object({
  name: z.string().min(3, "Must be 3 chars"),
  email: z.string(),
});

function App() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    validators: {
      onChange: formSchema,
      onDynamic: ({ value }) => {

        
        if (value.name === "Jalish") {
          return { name: "Jalish is not allowed" };
        }

        return undefined
      },
    },
  });

  return (
    <>
      <div>
        <form>
          <form.Field name="name">
            {({ state, handleBlur, handleChange }) => {
              console.log("State :::", state);

              return (
                <>
                  <Input
                    value={state.value}
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  {state.meta.errors.length > 0 &&
                    state.meta.errors[0]?.message}
                </>
              );
            }}
          </form.Field>

          <form.Field name="email">
            {({ state, handleBlur, handleChange }) => {
              console.log("State :::", state);

              return (
                <>
                  <Input
                    value={state.value}
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  {state.meta.errors.length > 0 &&
                    state.meta.errors[0]?.message}
                </>
              );
            }}
          </form.Field>
          <button
            type={"submit"}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
