import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import useSignupLogic from "./use-signup-logic";
import { signUpFields } from "./constant";

export default function SignUp() {
  const { form, onSubmit, isSigning } = useSignupLogic();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50  shadow-sm dark:border-gray-800 dark:bg-gray-900 p-10 "
      >
        {signUpFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: hookField }) => (
              <FormItem className="grid grid-cols-[24rem_1fr] items-center gap-6">
                <FormLabel>{field.label}</FormLabel>
                <div>
                  <FormControl>
                    <Input
                      type={field.type}
                      disabled={isSigning}
                      {...hookField}
                      className="bg-gray-100 dark:bg-gray-800"
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            type="reset"
            disabled={isSigning}
            variant="outline"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSigning}>
            Add new user
          </Button>
        </div>
      </form>
    </Form>
  );
}
