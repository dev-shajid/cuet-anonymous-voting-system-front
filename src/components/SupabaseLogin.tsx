'use client'

import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { signInWithGoogle } from '@/lib/auth-actions'
import { FcGoogle } from "react-icons/fc";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

export default function SupabaseLogin() {

    return (
        <div className='p-4 z-10 max-w-[600px] w-full'>
            <Card className='!w-full'>
                <CardHeader>
                    <AnimatedText text='CAVS' />
                    <CardTitle className='text-xl text-center'>Welcome please join to continue</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        action={signInWithGoogle}
                    >
                        <Button type="submit" className='w-full space-x-2'>
                            <FcGoogle size={20} />
                            <span>Login with Google</span>
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
