/* eslint-disable react-hooks/exhaustive-deps */
import { JOB_API_ENDPOINT } from '@/components/utils/constant';
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import{ useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_ENDPOINT}/get`, {withCredentials: true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }
        fetchAllJobs();
    }, []);
}

export default useGetAllJobs