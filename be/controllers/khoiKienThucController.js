const KhoiKienThucModel = require('../models/khoiKienThucModel');

class KhoiKienThucController {
    constructor() {
        this.khoiKienThucModel = new KhoiKienThucModel();
    }

    // Phương thức thêm khối kiến thức mới
    async themKhoiKienThuc(req, res) {
        try {
            const { tenKhoiKienThuc, parentID } = req.body;

            // Kiểm tra dữ liệu đầu vào
            if (!tenKhoiKienThuc) {
                return res.status(400).json({
                    success: false,
                    message: 'Tên khối kiến thức không được để trống'
                });
            }

            // Gọi phương thức từ model
            const result = await this.khoiKienThucModel.themKhoiKienThuc(tenKhoiKienThuc, parentID);

            if (result.success) {
                return res.status(201).json(result);
            } else {
                return res.status(400).json(result);
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Lỗi server: ' + error.message
            });
        }
    }

    // Phương thức lấy danh sách khối kiến thức
    async layDanhSachKhoiKienThuc(req, res) {
        try {
            // Gọi phương thức từ model
            const result = await this.khoiKienThucModel.layDanhSachKhoiKienThuc();

            if (result.success) {
                return res.status(200).json(result);
            } else {
                return res.status(400).json(result);
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Lỗi server: ' + error.message
            });
        }
    }

    async suaKhoiKienThuc(req, res) {
        try {
            const { id } = req.params; // Lấy MaKhoiKienThuc từ URL
            const { tenKhoiKienThuc, parentID } = req.body;
    
            // Kiểm tra dữ liệu đầu vào
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: 'Mã khối kiến thức không được để trống'
                });
            }
    
            if (!tenKhoiKienThuc) {
                return res.status(400).json({
                    success: false,
                    message: 'Tên khối kiến thức không được để trống'
                });
            }
    
            // Gọi phương thức từ model
            const result = await this.khoiKienThucModel.suaKhoiKienThuc(id, tenKhoiKienThuc, parentID);
    
            if (result.success) {
                return res.status(200).json(result);
            } else {
                return res.status(400).json(result);
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Lỗi server: ' + error.message
            });
        }
    }
    
    // Phương thức xóa khối kiến thức
    async xoaKhoiKienThuc(req, res) {
        try {
            const { id } = req.params; // Lấy MaKhoiKienThuc từ URL
    
            // Kiểm tra dữ liệu đầu vào
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: 'Mã khối kiến thức không được để trống'
                });
            }
    
            // Gọi phương thức từ model
            const result = await this.khoiKienThucModel.xoaKhoiKienThuc(id);
    
            if (result.success) {
                return res.status(200).json(result);
            } else {
                return res.status(400).json(result);
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Lỗi server: ' + error.message
            });
        }
    }

    async layChiTietKhoiKienThucVaMonHoc(req, res) {
        try {
            const { id } = req.params;
            
            // Kiểm tra dữ liệu đầu vào
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: 'Mã khối kiến thức không được để trống'
                });
            }
            
            // Gọi phương thức từ model
            const result = await this.khoiKienThucModel.layChiTietKhoiKienThucVaMonHoc(id);
        
            if (result.success) {
                return res.status(200).json(result);
            } else {
                return res.status(404).json(result);
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Lỗi server: ' + error.message
            });
        }
    }
}

module.exports = KhoiKienThucController;
