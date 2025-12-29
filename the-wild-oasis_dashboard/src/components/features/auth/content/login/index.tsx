import { Button } from "@/components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";

import { BiLoaderAlt } from "react-icons/bi";

import useLoginLogic from "./use-login-logic";

export default function LoginForm() {
  const { form, onSubmit, isLogin } = useLoginLogic();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50  shadow-sm dark:border-gray-800 dark:bg-gray-900 p-10 w-full max-w-md"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="username"
                  disabled={isLogin}
                  className="bg-gray-100 dark:bg-gray-800"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="current-password"
                  disabled={isLogin}
                  className="bg-gray-100 dark:bg-gray-900"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLogin} className="w-full">
          {isLogin ? <BiLoaderAlt className="size-4 animate-spin" /> : "Login"}
        </Button>
      </form>
    </Form>
  );
}
