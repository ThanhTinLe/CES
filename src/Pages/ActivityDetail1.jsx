import React, { useState } from 'react'
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import { display } from '@mui/system';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


const images = [
    "https://cdnmedia.baotintuc.vn/Upload/pTMF1jgWpbjY1m8G1xWUsg/files/2021/07/cactinhungho/binhthuanh13.jpg",
    "https://info-imgs.vgcloud.vn/2020/10/22/18/am-ap-nhung-chuyen-xe-nghia-tinh-cho-hang-cuu-tro-huong-ve-mien-trung.jpg",
    "https://cdnmedia.baotintuc.vn/Upload/e9GdNZvHDFi8lZSWc6ubA/files/2020/10/xe-cuu-tro-281020a.jpeg",
    "https://img.nhandan.com.vn/resize/600x-/Files/Images/2020/09/10/tr8-1599678065249.jpg",
    "https://i.ytimg.com/vi/gv7-Px62pAw/maxresdefault.jpg",
    // "https://bizweb.dktcdn.net/100/057/061/articles/1-5d577fe7-41bb-4a48-a111-6c794eaca24a.jpg?v=1499325275443",
    // "https://cdn.vietnambiz.vn/stores/news_dataimages/thuongnt/032018/05/06/tp-hcm-tap-hoa-truyen-thong-song-lay-lat-22-.7466.jpg",
    // "https://images-ext-1.discordapp.net/external/Qq7qhGXcErrhPDUUDk6dAt_lk0sMS5XJs_ST-lAYfkE/https/dongsaigonplas.com/vnt_upload/File/06_2019/vi-tri-cua-hang.jpg",

];

export default function ActivityDetail1() {


    const [imgSrc, setimgSrc] = useState({
        photoIndex: 0,
        isOpen: false,
    })

    console.log(imgSrc)

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
                    <Breadcrumb.Item>
                        <NavLink to="/activitydetail">Chi tiết chiến dịch</NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <h2 className="text-center mt-3">Chi tiết hoạt động ngày 18/09/2021</h2>
                <div className="row mt-5 mb-5">
                    <div className="col-6 d-flex" style={{ position: 'relative', marginTop: '60px' }}>
                        <div className="d-flex" >
                            <div>
                                <img src={images[0]} alt="hinhANh" width="270" height="400" />
                            </div>
                            <div>
                                <img src={images[1]} alt="hinhANh" width="135" height="200" />
                                <img src={images[2]} alt="hinhANh" width="135" height="200" />
                            </div>
                            <div>
                                <img src={images[3]} alt="hinhANh" width="135" height="200" />
                                <img src={images[4]} alt="hinhANh" width="135" height="200" />
                            </div>
                        </div>
                        {/* <div style={{
                            position: 'absolute',
                            background: 'rgba(153, 153, 153,0.5)',
                            width: '135px',
                            height: '200px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '50px',
                            color: 'white',
                            right: '15px',
                            bottom: '157px'
                        }}>
                            +5
                        </div> */}
                        <div style={{ position: 'absolute' }}>
                            <button style={{
                                background: 'rgba(153, 153, 153,0)',
                                height: '400px',
                                width: '540px'
                            }} type="button" onClick={() => setimgSrc({ ...imgSrc, isOpen: true })}>
                            </button>


                            {imgSrc.isOpen && (
                                <Lightbox
                                    mainSrc={images[imgSrc.photoIndex]}
                                    nextSrc={images[(imgSrc.photoIndex + 1) % images.length]}
                                    prevSrc={images[(imgSrc.photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setimgSrc({ ...imgSrc, isOpen: false })}
                                    onMovePrevRequest={() =>
                                        setimgSrc({
                                            ...imgSrc,
                                            photoIndex: (imgSrc.photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        setimgSrc({
                                            ...imgSrc,
                                            photoIndex: (imgSrc.photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <div>
                            <h2><i class="fa fa-clipboard-list text-success" /> Thông tin</h2>
                            <div className="alert alert-light">
                                <div className="m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-map-marker-alt"></i> Địa điểm thực hiện:</h5>
                                    <span className="ml-4 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>•  268 Tô Hiến Thành, Phường 15, Quận 10, Thành phố Hồ Chí Minh</span>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-clipboard-check"></i> Số lượng:</h5>
                                    <span className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>5 xe tải - loại 0.5 -> 1 tấn</span>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-clock"></i> Thời gian bắt đầu:</h5>
                                    <span className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>18/09/2021</span>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-clock"></i> Thời gian kết thúc:</h5>
                                    <span className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>18/09/2021</span>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-dollar-sign"></i> Tổng số tiền đã chi:</h5>
                                    <span className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>10,000,000 VNĐ</span>
                                </div>
                                <div className="m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-clipboard-check"></i> Mô tả chi tiết:</h5>
                                    <div className="ml-4">
                                        <span className="text-dark">
                                            •  Vào lúc 5:00AM 18/09/2021 đã thuê 5 xe vận tải tại GOGOX để vận chuyển hàng hóa từ thiện<br />
                                            {/* •  Vào lúc 7:00AM 19/09/2021 đã mua 40KG túi ni lông loại 10KG giá 50.000VNĐ/KG tại đại lí túi nilông Ngọc Hoa. <br />
                                            •  Vào lúc 11:00AM 19/09/2021 đã mua 10 thùng nước suối tại tạp hoá Thành Tín cho đoàn công tác từ thiện. <br /> */}
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-user"></i> Người thực hiện:</h5>
                                    <span className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>Nguyễn Văn An</span>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-user-check"></i> Người kiểm duyệt:</h5>
                                    <span className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>Lê Duy Tuấn Vũ</span>
                                </div>
                                <div className="d-flex m-3">
                                    <h5><i style={{ color: '#004d00', width: '20px' }} class="fa fa-check-circle"></i> Trạng thái: </h5>
                                    <p className="ml-3 text-dark d-flex" style={{alignItems:'center', marginBottom:'5px'}}>Đã hoàn thành</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
