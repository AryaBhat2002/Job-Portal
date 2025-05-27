import {Company} from "../models/company.model.js";

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Company retrieved successfully",
            success: true,
            companies
        });
    } catch (error) {
        console.error("Error in getCompany:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        if (!companyId) {
            return res.status(400).json({
                message: "Company ID is required",
                success: false,
            });
        }
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Company retrieved successfully",
            success: true,
            company
        });
    } catch (error) {
        console.error("Error in getCompanyById:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {name, description, location, website} = req.body;
        const file = req.file;
        //cloudinary upload logic can be added here later

        const updateData = {name, description, location, website};
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Company updated successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error in updateCompany:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}