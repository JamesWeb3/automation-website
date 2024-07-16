import { useAuthModal } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";

import Cookies from "js-cookie";
import { signIn } from "next-auth/react";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { z } from "zod";

import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icon-spinner";
import { IconFacebook, IconGoogle } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/schemas/index";

type SignupSchema = z.infer<typeof signupSchema>;

const SignUpForm: React.FC = () => {
  const { openModal, inviteToken } = useAuthModal();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordVisibility2 = () => setShowPassword2(!showPassword2);

  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupSchema> = async (data) => {
    Cookies.set("additionalAuthParams", JSON.stringify({ type: "signup" }), {
      expires: 7,
    });
    const signupData = { ...data, token: inviteToken };
  };

  return (
    <>
      <AlertDialogHeader className="text-left">
        <AlertDialogTitle className="text-3xl">
          Create an Account
        </AlertDialogTitle>
        <AlertDialogDescription>
          Start Building Now with Agentive
        </AlertDialogDescription>
      </AlertDialogHeader>

      <div className="flex flex-row items-center justify-center space-x-4">
        <div
          className="flex rounded-full text-sm py-2 px-6 w-full items-center justify-center gap-2 bg-black/40 hover:bg-black/50 cursor-pointer transition-ease"
          onClick={() => {
            Cookies.set(
              "additionalAuthParams",
              JSON.stringify({ type: "signup" }),
              { expires: 7 }
            );
            signIn("google", {
              callbackUrl: "/home",
            });
          }}
        >
          <IconGoogle />
        </div>

        <div
          className="flex rounded-full text-sm py-2 px-6 w-full items-center justify-center gap-2 bg-[#0081FB] hover:bg-[#0081FB]/90 cursor-pointer transition-ease"
          onClick={() => {
            Cookies.set(
              "additionalAuthParams",
              JSON.stringify({ type: "signup" }),
              { expires: 7 }
            );
            signIn("facebook", {
              callbackUrl: "/home",
            });
          }}
        >
          <IconFacebook />
        </div>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground/50 text-sm">
        <div className="border-t w-full" />
        or
        <div className="border-t w-full" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      id="firstName"
                      placeholder="John"
                      type="name"
                      autoCapitalize="none"
                      autoComplete="name"
                      autoCorrect="off"
                      className="bg-transparent rounded-xl p-3 px-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      type="name"
                      autoCapitalize="none"
                      autoComplete="name"
                      autoCorrect="off"
                      className="bg-transparent rounded-xl p-3 px-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2 mt-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="hello@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      className="bg-transparent rounded-xl p-3 px-5"
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
                    <div className="relative">
                      <Input
                        placeholder="Create your password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                        autoCapitalize="none"
                        autoComplete="password"
                        className="bg-transparent rounded-xl p-3 px-5"
                        autoCorrect="off"
                      />
                      <div
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      >
                        {showPassword ? <IoEye /> : <IoEyeOff />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative ">
                      <Input
                        placeholder="Confirm your password"
                        type={showPassword2 ? "text" : "password"}
                        {...field}
                        autoCapitalize="none"
                        autoComplete="password"
                        className="bg-transparent rounded-xl p-3 px-5"
                        autoCorrect="off"
                      />
                      <div
                        onClick={togglePasswordVisibility2}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      >
                        {showPassword2 ? <IoEye /> : <IoEyeOff />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-full p-6 my-4 flex shadow"
          >
            Create an Account
          </Button>

          <div className="flex gap-2 text-sm">
            <p className="text-white/50">Already have an account?</p>
            <div
              className="cursor-pointer hover:text-white/80 transition-ease"
              onClick={() => openModal("login", true)}
            >
              Log In
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignUpForm;
