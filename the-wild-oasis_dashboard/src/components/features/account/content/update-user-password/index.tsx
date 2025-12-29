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
import useUpdatePasswordLogic from "./use-updateUserPassword-logic";
import { updatePasswordFields } from "./constant";

export default function UpdatePasswordForm() {
  const { form, onSubmit, handleCancel, isUpdatingCurrentUserData } =
    useUpdatePasswordLogic();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl border border-gray-200 
        bg-gray-50 p-10 shadow-sm 
        dark:border-gray-800 dark:bg-gray-900"
      >
        {updatePasswordFields.map((fieldConfig) => (
          <FormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name}
            render={({ field }) => (
              <FormItem className="grid grid-cols-[24rem_1fr] items-center gap-6">
                <FormLabel>{fieldConfig.label}</FormLabel>

                <div>
                  <FormControl>
                    <Input
                      type={fieldConfig.type}
                      autoComplete={fieldConfig.autoComplete}
                      disabled={isUpdatingCurrentUserData}
                      className="bg-gray-100 dark:bg-gray-800"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        ))}

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-4">
          <Button
            type="button"
            variant="outline"
            disabled={isUpdatingCurrentUserData}
            onClick={handleCancel}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isUpdatingCurrentUserData}>
            Update password
          </Button>
        </div>
      </form>
    </Form>
  );
}
