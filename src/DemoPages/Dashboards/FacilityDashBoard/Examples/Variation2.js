import React, {Component, Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classnames from 'classnames';
import ReactTable from "react-table";
import Appointments from './appointments'
import {
    Row, Col,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    ListGroup,
    ListGroupItem,
    Card, CardBody,
    CardHeader,
    NavLink,
    TabContent,
    TabPane,
    Progress,
    CardFooter,
    ButtonGroup,
} from 'reactstrap';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area,
    Tooltip
} from 'recharts';

import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    faAngleUp,
    faDotCircle,
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';

import {
    Sparklines,
    SparklinesCurve
} from 'react-sparklines';

import {makeData} from "../../../Tables/DataTables/Examples/utils";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

import avatar1 from '../../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../../assets/utils/images/avatars/3.jpg';

const data55 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data22 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data3 = [
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
];

const data2 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
];

function boxMullerRandom() {
    let phase = true,
        x1, x2, w;

    return (function () {

        if (phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);
console.info({
    sampleData, sampleData2, sampleData3, sampleData4
})

export default class CRMDashboard2 extends Component {
    constructor(props) {
        super(props);

        this.toggle2 = this.toggle2.bind(this);
        this.state = {
            activeTab2: '222',
            activeTab1: '11',
            data: makeData()
        };
    }

    toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
            this.setState({
                activeTab2: tab
            });
        }
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {
        const {data} = this.state;
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Row>
                            <Col md="6" xl="4">
                                <div className="card mb-3 widget-content bg-night-fade">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">
                                                Total Appointments
                                        </div>
                                            <div className="widget-subheading">
                                               appointments since inception
                                        </div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white">
                                                <CountUp end={1896} duration="10" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xl="4">
                                <div className="card mb-3 widget-content bg-arielle-smile">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">
                                                Today's  Appointments
                                        </div>
                                            <div className="widget-subheading">
                                                Appointments booked today
                                        </div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white">
                                                <CountUp start={-75.9}
                                                    end={568.2}
                                                    separator=""
                                                    decimals={0}
                                                    decimal=","
                                                    duration="20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xl="4">
                                <div className="card mb-3 widget-content bg-happy-green">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">
                                               New Clients
                                        </div>
                                            <div className="widget-subheading">
                                                People Interested
                                        </div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white">
                                                <CountUp start={0}
                                                    end={45.9}
                                                    separator=""
                                                    decimals={0}
                                                    decimal=","
                                                    prefix=""
                                                    duration="15" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xl="4" className="d-xl-none d-lg-block">
                                <div className="card mb-3 widget-content bg-premium-dark">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">
                                                Products Sold
                                        </div>
                                            <div className="widget-subheading">
                                                Revenue streams
                                        </div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-warning">
                                                <CountUp start={1}
                                                    end={14}
                                                    separator=""
                                                    decimals={0}
                                                    decimal=","
                                                    prefix="ksh"
                                                    suffix="M"
                                                    duration="20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" xl="12">
                                <Row>
                                    <Col md="6" lg="3" xl="6">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-content pt-3 pl-3 pb-1">
                                                    <div className="widget-chart-flex">
                                                        <div className="widget-numbers">
                                                            <div className="widget-chart-flex">
                                                                <div className="fsize-4">
                                                                    <small className="opacity-5">ksh</small>
                                                                    <CountUp start={0}
                                                                             end={874}
                                                                             separator=""
                                                                             decimals={0}
                                                                             decimal=""
                                                                             prefix=""
                                                                             duration="10"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="widget-subheading mb-0 opacity-5">
                                                        sales last month
                                                    </h6>
                                                </div>
                                                <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                                                    <Col md="9">
                                                        <Sparklines data={sampleData}>
                                                            <SparklinesCurve
                                                                style={{
                                                                    strokeWidth: 3, stroke:
                                                                        "var(--success)", fill: "none"
                                                                }}/>
                                                        </Sparklines>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6" lg="3" xl="6">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-content pt-3 pl-3 pb-1">
                                                    <div className="widget-chart-flex">
                                                        <div className="widget-numbers">
                                                            <div className="widget-chart-flex">
                                                                <div className="fsize-4">
                                                                    <small className="opacity-5">ksh</small>
                                                                    <CountUp start={0}
                                                                             end={1283}
                                                                             separator=""
                                                                             decimals={0}
                                                                             decimal=""
                                                                             prefix=""
                                                                             duration="10"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="widget-subheading mb-0 opacity-5">
                                                        sales Income
                                                    </h6>
                                                </div>
                                                <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                                                    <Col md="9">
                                                        <Sparklines data={sampleData2}>
                                                            <SparklinesCurve
                                                                style={{
                                                                    strokeWidth: 3, stroke:
                                                                        "var(--primary)", fill: "none"
                                                                }}/>
                                                        </Sparklines>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6" lg="3" xl="6">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-content pt-3 pl-3 pb-1">
                                                    <div className="widget-chart-flex">
                                                        <div className="widget-numbers">
                                                            <div className="widget-chart-flex">
                                                                <div className="fsize-4">
                                                                    <small className="opacity-5">ksh</small>
                                                                    <CountUp start={0}
                                                                             end={1286}
                                                                             separator=""
                                                                             decimals={0}
                                                                             decimal=""
                                                                             prefix=""
                                                                             duration="10"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="widget-subheading mb-0 opacity-5">
                                                        last month sales
                                                    </h6>
                                                </div>
                                                <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                                                    <Col md="9">
                                                        <Sparklines data={sampleData3}>
                                                            <SparklinesCurve
                                                                style={{
                                                                    strokeWidth: 3, stroke:
                                                                        "var(--warning)", fill: "none"
                                                                }}/>
                                                        </Sparklines>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6" lg="3" xl="6">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-content pt-3 pl-3 pb-1">
                                                    <div className="widget-chart-flex">
                                                        <div className="widget-numbers">
                                                            <div className="widget-chart-flex">
                                                                <div className="fsize-4">
                                                                    <small className="opacity-5">ksh</small>
                                                                    <CountUp start={0}
                                                                             end={564}
                                                                             separator=""
                                                                             decimals={0}
                                                                             decimal=""
                                                                             prefix=""
                                                                             duration="10"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="widget-subheading mb-0 opacity-5">
                                                        total revenue
                                                    </h6>
                                                </div>
                                                <Row className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto">
                                                    <Col md="9">
                                                        <Sparklines data={sampleData4}>
                                                            <SparklinesCurve
                                                                style={{
                                                                    strokeWidth: 3, stroke:
                                                                        "var(--danger)", fill: "none"
                                                                }}/>
                                                        </Sparklines>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Card className='main-card mb-3'>
                            <CardHeader>
                                <div className='card-header-title font-size-lg text-capitalize font-weight-normal'>
                                Appointments Summary
                                </div>
                            </CardHeader>

                            <Appointments data={[]} />
                        </Card>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}