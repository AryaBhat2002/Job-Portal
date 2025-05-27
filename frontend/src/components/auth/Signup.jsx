import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { RadioGroup } from '../ui/radio-group'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { USER_API_ENDPOINT } from '../utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'


const Signup = () => {
    const [input, setInput] = useState({
        fullname: '',
        phoneNumber: '',
        email: '',
        password: '',
        role: '',
        file: '' // Default role
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector(store => store.auth);

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const changeFileHandler = (e) => {
        setInput({
            ...input,
            file: e.target.files?.[0]
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('email', input.email);
        formData.append('password', input.password);
        formData.append('role', input.role);
        if (input.file) {
            formData.append('file', input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate('/login');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            <Navbar />
            <div class="flex justify-center py-10 bg-background px-4">
                <div class="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
                    <h2 class="text-3xl font-semibold mb-8 text-center">Sign Up</h2>

                    <form onSubmit={submitHandler} class="space-y-2">
                        <div>
                            <label class="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                value={input.fullname}
                                name="fullname"
                                onChange={changeEventHandler}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="1234567890"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div className='flex items-center justify-between '>
                            <RadioGroup className="flex items-center gap-4 my-5">
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r1">Student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2">Recruiter</Label>
                                </div>
                            </RadioGroup>

                            <div className='flex items-center gap-2'>
                                <Label>
                                    Profile
                                </Label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={changeFileHandler}
                                    className='cursor-pointer w-full px-1 py-2 border'
                                />
                            </div>
                        </div>
                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait </Button> : <Button type="submit" className='w-full my-4'>Sign Up</Button>
                        }
                        <span className='text-sm'>Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup