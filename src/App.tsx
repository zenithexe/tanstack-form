import { useForm } from "@tanstack/react-form";
import z from "zod";
import { Input } from "./components/ui/input";

const formSchema = z.object({
  name: z.string().min(3, "Must be 3 chars"),
  email: z.string().email("Invalid email format"),
});

function App() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    validators: {
      // onChange: formSchema,
      onSubmit: formSchema,
      onDynamic: ({ value }) => {
        if (value.name === "Jalish") {
          return { name: "Jalish is not allowed" };
        }
        return undefined;
      },
    },
    onSubmit: async ({ value }) => {
      // Handle successful form submission
      console.log("Form submitted with values:", value);
      alert("Form submitted successfully!");
    },
  });

  // console.log("Form state:", form.state);

  return (
    <>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await form.handleSubmit();
          }}
        >
          <form.Field name="name">
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

          <form.Field name="email">
            {({ state, handleBlur, handleChange }) => {
              console.log("Email field state :::", state);

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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
