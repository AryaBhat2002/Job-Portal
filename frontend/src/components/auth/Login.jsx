import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { RadioGroup} from '../ui/radio-group'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <Navbar />
            <div class="flex justify-center py-10 bg-background px-4">
                <div class="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
                    <h2 class="text-3xl font-semibold mb-8 text-center">Login</h2>

                    <form class="space-y-2">

                        <div>
                            <label class="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
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
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r1">Student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2">Recruiter</Label>
                                </div>
                            </RadioGroup>

                        </div>
                        <Button type="submit" className='w-full my-4'>Login</Button>
                        <span className='text-sm'>Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></span>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login