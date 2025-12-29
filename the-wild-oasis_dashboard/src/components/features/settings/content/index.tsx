import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";

import useSettingsFormLogic from "./use-settings-form-logic";
import { settingsData } from "./constant";
import Spinner from "@/components/ui/spinner";

export default function UpdateSettings() {
  const { form, isLoading, isUpdatingSettings, handleBlur } =
    useSettingsFormLogic();
  if (isLoading) return <Spinner />;

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50  shadow-sm dark:border-gray-800 dark:bg-gray-900 p-10">
        {settingsData.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name={item.id}
            render={({ field }) => (
              <FormItem className="grid grid-cols-[24rem_1fr] items-center gap-6">
                <FormLabel>{item.label}</FormLabel>
                <div>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isUpdatingSettings}
                      className="bg-gray-100 dark:bg-gray-800"
                      {...field}
                      onBlur={() => handleBlur(item.id)}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
}
