"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { post } from "@/lib/api";

interface ZodErrorDetail {
  path: (string | number)[];
  message: string;
}

interface ErrorState {
  message: string;
  errors?: ZodErrorDetail[];
}

export function RegisterForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const getFieldError = (fieldName: string) => {
    return error?.errors?.find((e) => e.path.includes(fieldName))?.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = { firstName, lastName, email, password };
      await post("/api/auth/register", data);

      setSuccessMessage(
        "Account created succcessully! Redirecting to login..."
      );

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: unknown) {
      if (err && typeof err === "object" && "message" in err) {
        const errorData = err as ErrorState;
        setError({
          message: errorData.message || "An error occurred.",
          errors: errorData.errors,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {successMessage && (
        <div
          className="bg-green-100 text-center border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      {error && (
        <div
          className="bg-red-100 text-center border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4"
          role="alert"
        >
          <span className="block sm:inline">{error.message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <Input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className="mt-1"
          />
          {getFieldError("firstName") && (
            <p className="mt-1 text-xs text-red-600">
              {getFieldError("firstName")}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <Input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            className="mt-1"
          />
          {getFieldError("lastName") && (
            <p className="mt-1 text-xs text-red-600">
              {getFieldError("lastName")}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="mt-1"
          />
          {getFieldError("email") && (
            <p className="mt-1 text-xs text-red-600">
              {getFieldError("email")}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            minLength={8}
            className="mt-1"
          />
          {getFieldError("password") && (
            <p className="mt-1 text-xs text-red-600">
              {getFieldError("password")}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading || !!successMessage}
        >
          {isLoading
            ? "Creating Account..."
            : successMessage
            ? "Redirecting..."
            : "Create Account"}
        </Button>
      </form>
    </>
  );
}