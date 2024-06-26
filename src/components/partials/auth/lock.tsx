import React, { useState } from 'react'
import TextInput from '@/components/ui/TextInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is Required'),
    password: yup.string().required('Password is Required'),
  })
  .required()

const Lock = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
      <TextInput name='email' label='email' type='password' register={register} error={errors.password} />

      <button className='btn btn-dark block w-full text-center'>Unlock</button>
    </form>
  )
}

export default Lock
