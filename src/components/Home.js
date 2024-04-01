import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './Home.css';
import image from '../static/home.jpg';

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="left">
                <h1 style={{ fontSize: '4rem' }}>Tumor Beat</h1>
                <h1 className='theme-gradient' style={{ color: '#f10d53', marginTop: '25%', marginLeft: '2%' }}>高效 · 低成本</h1>
                <p style={{ marginLeft: '2%', lineHeight: '1.7', marginTop: '5%', fontWeight: 'bold' }}>Tumor Beat 是一个利用循环生成对抗网络（CycleGAN）处理图像并检测乳腺癌的项目. Tumor Beat is a project that uses CycleGAN to process images and detect breast cancer.</p>
                <Button style={{ marginLeft: '1%', marginTop: '7%' }} type="primary" onClick={handleButtonClick}>登录后台</Button>
            </div>
            <div className="right">
                <img src={image} alt="Illustration" />
            </div>
        </div>
    );
}

export default Home;