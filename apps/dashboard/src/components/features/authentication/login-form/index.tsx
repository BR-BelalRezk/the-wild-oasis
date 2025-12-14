"use client";
import Button from "@/components/ui/form-ui/button";
import Form from "@/components/ui/form-ui/form";
import FormRowVertical from "@/components/ui/form-ui/form-row-vertical";
import Input from "@/components/ui/form-ui/input";
import SpinnerMini from "@/components/ui/mini-spinner";
import useLogin from "@/hooks/auth/use-login";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginMutate, isLogin } = useLogin();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    loginMutate({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit} className="w-2xl p-20">
      <FormRowVertical htmlFor="email" label="Email address">
        <Input
          className="w-full"
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          disabled={isLogin}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical htmlFor="password" label="Password">
        <Input
          className="w-full"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLogin}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button
          size="large"
          disabled={isLogin}
          className="flex items-center justify-center"
        >
          {!isLogin ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}
