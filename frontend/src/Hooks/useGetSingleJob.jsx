/* eslint-disable no-unused-vars */
import { JOB_API_ENDPOINT } from '@/components/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetSingleJobs = (jobId) => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchSingleJobs = async () => {
    //         try {
    //             const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {withCredentials: true});
    //             if(res.data.success){
    //                 dispatch(setSingleJob(res.data.jobs));
    //             }
    //         } catch (error) {
    //             console.error('Error fetching jobs:', error);
    //         }
    //     }
    //     fetchSingleJobs();
    // }, []);
}

export default useGetSingleJobs