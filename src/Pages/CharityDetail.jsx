import React from 'react'
import { Breadcrumb, Progress } from 'antd';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function CharityDetail() {

    const [value, setValue] = React.useState('1');
    const [value2, setValue2] = React.useState('2');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    return (
        <div className="container">
            <div className="bg-white p-2">
                <Breadcrumb style={{ margin: '0' }}>
                    <Breadcrumb.Item>
                        <NavLink to="/home">Trang chủ</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <NavLink to="/chatitydetail">Chi tiết chiến dịch</NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <h2 className="text-center mt-3 mb-5">Tiếp tế lương thực cho TP.HCM </h2>
                <div>
                    <h3 className="mb-5"><i class="fa fa-clipboard-list text-success"></i> Thông tin chiến dịch từ thiện</h3>
                    <div className="row mt-3 ml-3">
                        <div className="col-4 mt-4">
                            <img src="https://static2.yan.vn/YanNews/2167221/202108/20210822_102423_nnel_optimized91f368de-3e2f830b.jpeg" width="300" alt="" />
                        </div>
                        <div className="col-8">
                            <div className="row ">
                                <div className="col-8">
                                    <h5 className="mt-3 mb-3"><span style={{ opacity: 0.7 }}>Tổng số tiền: </span><span>305,000,000 VNĐ</span></h5>
                                    <h6 className="mt-3 mb-3"><span style={{ opacity: 0.7 }}>Tiền còn lại: </span><span>152,500,000 VNĐ</span></h6>
                                    <h6 className="mt-3 mb-3"><span style={{ opacity: 0.7 }}>Ngày bắt đầu chiến dịch: </span><span>18/09/2021</span></h6>
                                    <h6 className="mt-3 mb-3"><span style={{ opacity: 0.7 }}>Ngày dự kiến hoàn thành: </span><span>10/10/2021</span></h6>
                                    <h6 className="mt-3 mb-3"><span style={{ opacity: 0.7 }}>Người phụ trách chiến dịch: </span><span>Lê Duy Tuấn Vũ</span></h6>
                                </div>
                                <div className="col-4">
                                    <div className="text-center mb-2 mt-3">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={50}
                                        />
                                    </div>
                                    <h6 className="text-center">Tiến độ giải ngân</h6>
                                </div>
                            </div>
                            <h6 className="mb-3"><span style={{ opacity: 0.7 }}>Mô tả chiến dịch: </span></h6>
                            <div className="ml-3">
                                <span>
                                    •  Trước tình hình diễn biến phức tạp của dịch bệnh COVID-19. Nhiều người thất nghiệp bị mắc kẹt tại khu vực TP.Hồ Chí Minh,
                                    nhưng lại không có đủ chi phí để mua thực phẩm cần thiết. Vì một miền nam thân yêu chúng tôi đứng ra kêu gọi mọi người ủng hộ
                                    để có thể đem đến bửa ăn đầy đủ hơn cho những người có hoàn cảnh khó khăn hiện tại. <br />
                                    •  Một miếng khi đói bằng một gói khi no.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="mt-5 mb-5"><i class="fa fa-bullhorn text-primary"></i> Các hoạt động chi tiêu của chiến dịch</h3>
                    <div>
                        <h5><i class="fa fa-calendar-alt text-warning"></i> Ngày 18/09/2021</h5>
                        <div>
                            <div className="p-3">
                                <div className="alert alert-light">
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                    <Tab label="1:00 PM" value="1" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">
                                                <h6 className="row"><span className="col-6">Thời gian: </span><span className="col-6 text-dark">1:00 PM</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Số tiền đã sử dụng: </span><span className="col-6 text-dark">10,000,000 VNĐ</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Hoạt động: </span><span className="col-6 text-dark">Thuê phương tiện</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Người thực hiện: </span><span className="col-6 text-dark">Nguyễn Văn An</span></h6>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                    <div className="text-right">
                                        <NavLink to="/activitydetail">Chi tiết hoạt động <i class="fa fa-hand-point-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5><i class="fa fa-calendar-alt text-warning"></i> Ngày 19/09/2021</h5>
                        <div>
                            <div className="p-3">
                                <div className="alert alert-light">
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value2}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                                                <TabList onChange={handleChange2} aria-label="lab API tabs example">
                                                    <Tab label="5:00 AM" value="2" />
                                                    <Tab label="7:00 AM" value="3" />
                                                    <Tab label="11:00 AM" value="4" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="2">
                                                <h6 className="row"><span className="col-6">Thời gian: </span><span className="col-6 text-dark">5:00 AM</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Số tiền đã sử dụng: </span><span className="col-6 text-dark">140,000,000 VNĐ</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Hoạt động: </span><span className="col-6 text-dark">Mua lương thực</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Người thực hiện: </span><span className="col-6 text-dark">Đỗ Thị Thảo</span></h6>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <h6 className="row"><span className="col-6">Thời gian: </span><span className="col-6 text-dark">7:00 AM</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Số tiền đã sử dụng: </span><span className="col-6 text-dark">2,000,000 VNĐ</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Hoạt động: </span><span className="col-6 text-dark">Mua vật liệu đóng gói</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Người thực hiện: </span><span className="col-6 text-dark">Đỗ Thị Thảo</span></h6>
                                            </TabPanel>
                                            <TabPanel value="4">
                                                <h6 className="row"><span className="col-6">Thời gian: </span><span className="col-6 text-dark">11:00 AM</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Số tiền đã sử dụng: </span><span className="col-6 text-dark">500,000 VNĐ</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Hoạt động: </span><span className="col-6 text-dark">Chi phí phát sinh</span></h6>
                                                <hr />
                                                <h6 className="row"><span className="col-6">Người thực hiện: </span><span className="col-6 text-dark">Đỗ Thị Thảo</span></h6>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                    <div className="text-right">
                                        <NavLink to="/activitydetail">Chi tiết hoạt động <i class="fa fa-hand-point-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
