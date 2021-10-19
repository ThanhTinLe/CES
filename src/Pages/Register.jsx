import React from 'react'

export default function Register() {

    return (
        <div className="container-flute p-0" style={{ backgroundImage: `url('https://www.sas.com/profile/ui/images/profile-background.gif')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="m-auto" style={{ width: '500px' }}>

                <div className="pt-5 pb-5">
                    <h1 className="mb-4 text-white">CES xin chào!</h1>
                    <div className="bg-white" style={{ borderRadius: '10px' }}>
                        <form action="" className="p-5">
                            <h2 className="text-center">Đăng ký</h2>
                            <div class="form-group">
                                <label for="">Họ và Tên</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="">Số điện thoại</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="">Mật khẩu</label>
                                <input type="password"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="">Xác nhận mật khẩu</label>
                                <input type="password"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <a href="/" className="btn btn-block" style={{ backgroundColor: '#ff8224' }}>Đăng ký</a>
                            </div>
                            <div className="form-group text-right">
                                <p>Bạn đã có tài khoản? <span><a href="/">Đăng nhập</a></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
