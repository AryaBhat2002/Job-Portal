import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
    try {
        const { title, description, location, salary, requirements, jobType, experience, position, companyId } = req.body;
        const userId = req.id;
        if (!title || !description || !location || !salary || !requirements || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: Array.isArray(requirements) ? requirements : requirements.split(','),
            salary:Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId,
        });

        return res.status(201).json({
            message: "Job posted successfully",
            success: true,
            job
        });
    } catch (error) {
        console.error("Error in postJob:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keywords = req.query.keywords || "";
        const query = {
            $or:[
                {title: { $regex: keywords, $options: "i" }},
                {description: { $regex: keywords, $options: "i" }},
            ]
        };
        const jobs = await Job.find(query).populate({
            path: 'company',
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Jobs retrieved successfully",
            success: true,
            jobs
        });
    } catch (error) {
        console.error("Error in getJobs:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate('company');
        if (!job) {
                return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Job retrieved successfully",
            success: true,
            job
        });
    } catch (error) {
        console.error("Error in getJobById:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
} 

export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate('company');
        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Jobs retrieved successfully",
            success: true,
            jobs
        });
    } catch (error) {
        console.error("Error in getAdminJobs:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}