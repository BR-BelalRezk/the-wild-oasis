import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import { Textarea } from "@/components/ui/shadcn/textarea";

import { createCabinFields } from "./constant";
import type { CabinFormValues } from "./cabin-schema";
import type { UseFormReturn } from "react-hook-form";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/shadcn/alert-dialog";
import { cn } from "@/utils";
import { Button } from "@/components/ui/shadcn/button";

type Props = {
  form: UseFormReturn<CabinFormValues>;
  onSubmit: (data: CabinFormValues) => void;
  isSubmitting: boolean;
  isEditSession?: boolean;
};

export default function CabinForm({
  form,
  onSubmit,
  isSubmitting,
  isEditSession,
}: Props) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "flex flex-col gap-6 rounded-xl border border-gray-200",
          " p-5 dark:border-gray-800  w-full"
        )}
      >
        {createCabinFields.map((fieldConfig) => {
          const isVertical =
            fieldConfig.name === "description" || fieldConfig.type === "file";

          return (
            <FormField
              key={fieldConfig.name}
              control={form.control}
              name={fieldConfig.name}
              render={({ field }) => (
                <FormItem
                  className={cn(
                    "w-full",
                    isVertical
                      ? "flex flex-col items-start gap-5"
                      : "flex items-center justify-between"
                  )}
                >
                  <FormLabel className={cn("pt-2 text-nowrap")}>
                    {fieldConfig.label}
                  </FormLabel>

                  <div className={cn("space-y-2", isVertical ? "w-full" : "")}>
                    <FormControl>
                      {fieldConfig.type === "textarea" ? (
                        <Textarea
                          value={field.value as string}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          disabled={isSubmitting}
                          className="bg-gray-100 dark:bg-gray-800 min-w-full"
                        />
                      ) : fieldConfig.type === "file" ? (
                        <Input
                          type="file"
                          accept="image/*"
                          disabled={isSubmitting}
                          className="bg-gray-100 dark:bg-gray-800"
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                      ) : (
                        <Input
                          type={fieldConfig.type === "text" ? "text" : "number"}
                          value={field.value as string | number}
                          onChange={(e) => {
                            if (fieldConfig.type === "text") {
                              field.onChange(e.target.value);
                            } else {
                              field.onChange(Number(e.target.value));
                            }
                          }}
                          onBlur={field.onBlur}
                          disabled={isSubmitting}
                          className="bg-gray-100 dark:bg-gray-800 w-40 self-end"
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

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={(e) => {
                if (!form.formState.isValid) {
                  e.preventDefault();
                }
              }}
            >
              {isEditSession ? "Edit" : "Create"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </form>
    </Form>
  );
}
