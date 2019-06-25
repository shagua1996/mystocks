import "./app.css";
import React from 'react';
import { Tabs } from 'antd';

import { Redirect, Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import K1 from '../kemu1/k1';
import K4 from '../kemu4/k4';


const { TabPane } = Tabs;


// 标题
function Header(props) {
    return <div>
        <h2 className="title">驾考宝典</h2>
    </div>
}
// 选项卡
function callback(key) {
    console.log(key);
}
function DriveTab() {
    return <Tabs defaultActiveKey="kemu1" onChange={callback}>

        <TabPane tab={
            <Link className="tab_link" to="/kemu1">科目一</Link>
        } key="kemu1">
            {/* <K1 /> */}
        </TabPane>

        <TabPane tab={
            <Link className="tab_link" to="/kemu4">科目四</Link>
        } key="kemu4">
            {/* <K4 /> */}
        </TabPane>
    </Tabs>
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log(this.props);
    }
    render() {
        return <Router>
            <Header />
            <DriveTab />
            {/* <Link to="/kemu1">科目一</Link>
            <Link to="/kemu4">科目四</Link> */}
            <Switch>
                {/* <Route path="/kemu1" render={() => <K1 ask={this.props.state.ask} action={this.props.askAction} />} /> */}
                <Route path="/kemu1" component={K1} />
                <Route path="/kemu4" component={K4} />
                {/* Redirect中的from相当于Route中的path，它也会匹配location路径 */}
                <Redirect exact from="/" to="/kemu1" />
                <Route render={() => (<h1>404</h1>)} />
            </Switch>
        </Router>
    }
}

export default App;