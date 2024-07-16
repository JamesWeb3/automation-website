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
import { loginSchema } from "@/schemas/index";

type LoginSchema = z.infer<typeof loginSchema>;

const SignInForm: React.FC = () => {
  const { openModal } = useAuthModal();
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    Cookies.set("additionalAuthParams", JSON.stringify({ type: "signin" }), {
      expires: 7,
    });
    handleSignIn("credentials", data as any);
  };

  const handleSignIn = async (method: string, data = null) => {};

  return (
    <>
      <AlertDialogHeader className="text-left">
        <AlertDialogTitle className="text-3xl">Log In</AlertDialogTitle>
        <AlertDialogDescription>
          Enter Your Email and Password to Log In
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="flex flex-row items-center justify-center space-x-4">
        <div
          className="flex rounded-full text-sm py-2 px-6 w-full items-center justify-center gap-2 bg-black/40 hover:bg-black/50 cursor-pointer transition-ease"
          onClick={() => {
            Cookies.set(
              "additionalAuthParams",
              JSON.stringify({ type: "signin" }),
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
              JSON.stringify({ type: "signin" }),
              { expires: 7 }
            );
            signIn("facebook", {
              callbackUrl: "/home",
            });
          }}
        >
          <IconFacebook />
        </div>

        {/* <div
                    className="flex rounded-full py-3 px-6 w-full items-center justify-center gap-2 bg-black hover:bg-black/80 cursor-pointer transition duration-200 ease-in-out"
                    onClick={() => {
                        track("Apple Login");
                        Cookies.set(
                            "additionalAuthParams",
                            JSON.stringify({ type: "signin" }),
                            { expires: 7 },
                        );
                        signIn("apple", {
                            callbackUrl: "/home",
                        });
                    }}
                >
                    <IconApple />
                </div> */}
      </div>

      <div className="flex items-center gap-2 text-muted-foreground/50 text-sm">
        <div className="border-t w-full" />
        or
        <div className="border-t w-full" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Enter your email"
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
                    <div className="relative ">
                      <Input
                        placeholder="Enter your password"
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
          </div>

          <Button type="submit" className="w-full rounded-full p-6 flex shadow">
            Log In
          </Button>

          <div className="flex gap-2 text-sm">
            <p className="text-white/50">Forgot password?</p>
            <div
              className="cursor-pointer hover:text-white/80 transition-ease"
              onClick={() => openModal("email", true)}
            >
              Reset Password Here
            </div>
          </div>

          <div className="flex gap-2 text-sm">
            <p className="text-white/50">Dont have an account?</p>
            <div
              className="cursor-pointer hover:text-white/80 transition-ease"
              onClick={() => openModal("signup", true)}
            >
              Sign Up
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
