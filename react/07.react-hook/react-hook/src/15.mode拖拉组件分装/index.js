import { Modal } from 'antd';
import { useState, useEffect } from 'react';

let content, contentLeft = 0, contentRight = 0;

const ModalBox = (props) => {
    const [styleLT, setStyleLT] = useState({
        styleLeft: 0, styleTop: window.innerHeight / 2 - 132
    });
    let [flag, setFlag] = useState<boolean>(true);
    const style = { left: styleLT.styleLeft, top: styleLT.styleTop }

    useEffect(() => {
        return () => {
            setStyleLT({
                styleLeft: 0,
                styleTop: window.innerHeight / 2 - 132
            })
            setFlag(true);
        }
    }, [props.isModalVisible])

    const onMouseDown = (e) => {
        e.preventDefault();
        if (flag) {
            content = document.getElementsByClassName("ant-modal-content")[0];
            contentLeft = content.getBoundingClientRect().left;
            contentRight = content.getBoundingClientRect().right - content.offsetWidth;
            setFlag(false);
        }

        // 记录初始移动的鼠标位置
        const startPosX = e.clientX
        const startPosY = e.clientY;
        const { styleLeft, styleTop } = styleLT
        // 添加鼠标移动事件
        document.onmousemove = (e) => {
            var cx = e.clientX - startPosX + styleLeft,
                cy = e.clientY - startPosY + styleTop;
                
            if (cx < -contentLeft) {
                cx = -contentLeft;
            }
            if (cy < 0) {
                cy = 0;
            }
            if (cx > contentRight) {
                cx = contentRight;
            }

            if (window.innerHeight - cy < content.offsetHeight) {
                cy = window.innerHeight - content.offsetHeight;
            }
            setStyleLT({
                styleLeft: cx,
                styleTop: cy
            })
        } 
        // 鼠标放开时去掉移动事件
        document.onmouseup = function (e) {
            document.onmousemove = null
            if (e.clientX > window.innerWidth || e.clientY < 0 || e.clientX < 0 || e.clientY > window.innerHeight) {
                document.onmousemove = null
            }
        }
    }

    return (
        <Modal
            title={
                <div
                    className='dragBoxBar'
                    style={{ height: "100", width: "100%", cursor: 'move', userSelect: "none" }}
                    onMouseDown={onMouseDown}
                >
                    {props.title}
                </div>
            }
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            style={style}
            wrapClassName='dragBox'
            okText={props.okText}
            cancelText={props.cancelText}>
            {props.children}
        </Modal>
    )
}

export default ModalBox;
