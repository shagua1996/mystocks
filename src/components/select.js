import "./select.css";
import React from 'react';
import { Radio, Modal, Button } from 'antd';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import ask1Action from '../store/action/askK1Action';
import ask4Action from '../store/action/askK4Action';
// 这里映射的是属性
function mapStateToProps(state) {
    return {
        state
    }
}
// 这里映射的是事件
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ask1Action, ask4Action }, dispatch);
}


function Image(props) {
    if (props.file !== "") {
        return (<div>
            <img src={props.file} alt="" />
        </div>)
    }
    return null;
}
function DriveRadio(props) {
    let { val, title } = props;
    if (title !== "") {
        return (
            <div>
                <Radio value={val}>{title}</Radio>
            </div>
        )
    }
    return null;
}
class Select extends React.Component {
    constructor(props) {
        super(props);
        // isError 为true表示做错题了，否则表示正确
        this.state = { value: 0, isShowModal: false, isError: false, disabled: false };
        // 本题解释按钮
        this.showExplainText = this.showExplainText.bind(this);
        // 模态框上的确定按钮
        this.handleOk = this.handleOk.bind(this);
        this.myRef = React.createRef();

    }
    onChange = e => {
        this.setState({
            value: e.target.value
        })
        if (e.target.value != this.props.data.val) {
            this.setState({
                isError: true
            })
            // if (this.props.kemu == 'k1') {
            //     this.props.ask1Action({ id: this.props.data.id, ask: false, val: e.target.value })
            // }
            // else {
            //     this.props.ask4Action({ id: this.props.data.id, ask: false, val: e.target.value })
            // }
            this.props[`as${this.props.kemu}Action`]({ id: this.props.data.id, ask: false, val: e.target.value })

        }
        else {
            this.setState({
                isError: false
            })
            // if (this.props.kemu == 'k1') {
            //     this.props.ask1Action({ id: this.props.data.id, ask: true, val: e.target.value })
            // }
            // else {
            //     this.props.ask4Action({ id: this.props.data.id, ask: true, val: e.target.value })
            // }
            this.props[`as${this.props.kemu}Action`]({ id: this.props.data.id, ask: true, val: e.target.value })

        }

    }
    // 弹出本题解释的模态框
    showExplainText() {
        this.setState({
            isShowModal: true
        });
    }
    handleOk() {
        this.setState({
            isShowModal: false
        });
    }
    componentDidMount() {
        // console.log(this.props);
        this.props.state[`as${this.props.kemu}`].map(val => {
            if (val.id == this.props.data.id) {
                this.setState({
                    disabled: true,
                    value: val.val
                })
            }
        })
    }
    render() {
        return (<div>
            <h3>{this.props.data.title}</h3>
            <div>
                <Radio.Group onChange={this.onChange} value={this.state.value} disabled={this.state.value != 0 || this.state.disabled}>
                    <DriveRadio val={1} title={this.props.data.a} />
                    <DriveRadio val={2} title={this.props.data.b} />
                    <DriveRadio val={3} title={this.props.data.c} />
                    <DriveRadio val={4} title={this.props.data.d} />
                </Radio.Group>
            </div>
            <Image file={this.props.data.file} />
            <div>
                <span>{(this.state.value != 0) ? (this.state.isError ? '错误' : '正确') : null}</span>
            </div>
            <div>
                <Button size="small" onClick={this.showExplainText}>本题解释</Button>
            </div>

            <div>
                <Modal
                    title="本题解释"
                    visible={this.state.isShowModal}
                    onOk={this.handleOk}
                    okText="确定"
                >
                    <p>{this.props.data.explainText}</p>
                </Modal>
            </div>
        </div>)
    }
}
Select = connect(mapStateToProps, mapDispatchToProps)(Select);

export default Select;