'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

// import { createUser } from '@/redux/features/user/userSlice';
import { useAppSelector } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '@/redux/features/user/userApi';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  role: string;
  phoneNumber: string;
}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const [signUp, { isError, isLoading: isUserLoading, isSuccess, error }] =
    useSignUpMutation();
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: 'user',
      phoneNumber: data.phoneNumber,
    };
    console.log(newData);
    signUp(newData);
  };

  const validatePassword = (value: string) => {
    const { password } = getValues();
    return value === password || 'Passwords do not match';
  };

  React.useEffect(() => {
    if (user.email && !isLoading) {
      navigate('/');
    }
  }, [user.email, isLoading, navigate]);

  console.log(isError, error, isUserLoading, isSuccess);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="your email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              id="name"
              placeholder="your name"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <Input
              id="phoneNumber"
              placeholder="your phone number"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('phoneNumber', { required: 'Phone is required' })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500"> {errors.phoneNumber.message}</p>
            )}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <Input
              id="confirmPassword"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: validatePassword,
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <Button>Create Account</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        className="flex items-center justify-between"
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
    </div>
  );
}
