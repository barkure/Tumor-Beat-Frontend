// Login.js 登陆页面
import { Layout, Button, Form, Input } from 'antd'; // 引入antd组件
import { UserOutlined, LockOutlined } from '@ant-design/icons'; // 引入antd图标

const { Content } = Layout;

const LayoutStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '25vh',
};


const Login = () => {


return (
    <Layout style={LayoutStyle}>
        <Content style={contentStyle}>
            <div className="login-title">
                <h1>Tumor Beat • 后台登录</h1>
            </div>
            <Form name="normal_login" style={{ marginTop: '20%' }}>
                <Form.Item name="userNameOrEmail"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名！',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="  用户名" />
                </Form.Item>
                <Form.Item name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码！',
                        },
                    ]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="  密    码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width:'100%' }}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    </Layout>
);
};

export default Login;