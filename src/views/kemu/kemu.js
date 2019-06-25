import "./kemu.css";
import React from 'react';
import Http from '../../unit/http';
import Select from "../../components/select";
import { Pagination } from 'antd';
import { Spin } from 'antd';
import { BackTop } from 'antd';
import $ from 'jquery';

class Kemu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', curPage: 1, list: [], total: 0, isShowSpin: false };
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount() {
        console.log(this.props);
    }
    requestK1() {
        this.setState({
            isShowSpin: true
        })
        Http.k1(this.state.curPage, (res) => {
            this.setState({
                isShowSpin: false
            })
            // 对请求到的数据进行解析
            let obj = JSON.parse(res.data.data);
            // console.log(obj);
            // 解构result数据
            let { curPage, list, total } = obj.result;
            // 更新state状态
            this.setState({
                curPage,
                list,
                total
            }, () => {
                // 数据渲染后回顶部
                $(document).scrollTop(0);
            })
        })
    }
    requestK4() {
        this.setState({
            isShowSpin: true
        })
        Http.k4(this.state.curPage, (res) => {
            this.setState({
                isShowSpin: false
            })
            // 对请求到的数据进行解析
            let obj = JSON.parse(res.data.data);
            console.log(obj);
            // 解构result数据
            let { curPage, list, total } = obj.result;
            // 更新state状态
            this.setState({
                curPage,
                list,
                total
            }, () => {
                // 数据渲染后回顶部
                $(document).scrollTop(0);
            })
        })
    }
    changePage(pageNumber) {
        this.setState({
            curPage: pageNumber
        }, () => {
            this.requestK1();
        })
    }
    render() {
        return <div>
            <div>
                {this.state.list.map(val => {
                    return <Select kemu={this.state.name} key={val.id} data={val} />
                })}
            </div>
            <div>{
                !this.state.isShowSpin && <Pagination showQuickJumper defaultCurrent={this.state.curPage} total={this.state.total} onChange={this.changePage} />
            }
            </div>
            <div className="loading">
                <Spin size="large" spinning={this.state.isShowSpin} />
            </div>
            {/* 回顶部按钮 */}
            <BackTop />
        </div>
    }
}

export default Kemu;