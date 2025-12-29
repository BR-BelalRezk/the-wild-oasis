import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { updateUserFields } from "./constant";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import useUpdateUserDataLogic from "./use-updateUserData-logic";

export default function UpdateUserData() {
  const { form, onSubmit, handleCancel, isUpdatingCurrentUserData, user } =
    useUpdateUserDataLogic();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50  shadow-sm dark:border-gray-800 dark:bg-gray-900 p-10"
      >
        {updateUserFields.map((fieldConfig) => {
          if (fieldConfig.name === "email") {
            return (
              <FormItem
                key={fieldConfig.name}
                className="grid grid-cols-[24rem_1fr] items-center gap-6"
              >
                <FormLabel>{fieldConfig.label}</FormLabel>
                <FormControl>
                  <Input
                    type={fieldConfig.type}
                    disabled
                    value={user?.email ?? ""}
                    className="bg-gray-100 dark:bg-gray-800"
                  />
                </FormControl>
              </FormItem>
            );
          }

          return (
            <FormField
              key={fieldConfig.name}
              control={form.control}
              name={fieldConfig.name}
              render={({ field }) => (
                <FormItem className="grid grid-cols-[24rem_1fr] items-center gap-6">
                  <FormLabel>{fieldConfig.label}</FormLabel>

                  <div>
                    <FormControl>
                      {fieldConfig.type === "file" ? (
                        <Input
                          type="file"
                          accept={fieldConfig.accept}
                          disabled={isUpdatingCurrentUserData}
                          className="file:cursor-pointer bg-gray-100 
                         file:mr-4  file:rounded-md file:border-0
                         file:bg-transparent file:px-2 file:py-0 
                         file:text-xs file:font-medium file:text-gray-500
                          dark:bg-gray-800
                         "
                          onChange={(e) =>
                            field.onChange(e.target.files?.[0] ?? null)
                          }
                        />
                      ) : (
                        <Input
                          type={fieldConfig.type}
                          name={field.name}
                          value={field.value as string}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          disabled={isUpdatingCurrentUserData}
                          className=" bg-gray-100 dark:bg-gray-800 
                         "
                        />
                      )}
                    </FormControl>

                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          );
        })}

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
            Update account
          </Button>
        </div>
      </form>
    </Form>
  );
}
