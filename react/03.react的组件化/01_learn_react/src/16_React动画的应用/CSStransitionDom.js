
import React, { PureComponent } from 'react';
import { Card, Avatar } from 'antd';
import { CSSTransition } from 'react-transition-group'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;



class CSStransitionDom extends PureComponent {
     constructor(props) {
          super(props);

          this.state = {
               isShow: true
          };
     }

     render() {
          let { isShow } = this.state
          return (
               <div>
                    <CSSTransition in={isShow}
                         classNames='card'
                         timeout={300}
                         unmountOnExit={true}
                         appear
                         onEnter={el => { console.log('开始进入') }}
                         onEntering={el => { console.log('正在进入') }}
                         onEntered={el => { console.log('进入完成') }}
                         onExit={el => { console.log('开始退出') }}
                         onExiting={el => { console.log('正在退出') }}
                         onExited={el => { console.log('退出结束') }}
                    >
                         <Card
                              style={{ width: 300 }}
                              cover={
                                   <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                   />
                              }
                              actions={[
                                   <SettingOutlined key="setting" />,
                                   <EditOutlined key="edit" />,
                                   <EllipsisOutlined key="ellipsis" />,
                              ]}
                         >
                              <Meta
                                   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                   title="Card title"
                                   description="This is the description"
                              />
                         </Card>
                    </CSSTransition>
                    <button onClick={e => { this.showHidden() }}>显示隐藏</button>
               </div>
          )
     }
     showHidden() {
          this.setState({ isShow: !this.state.isShow })
     }
}


export default CSStransitionDom;