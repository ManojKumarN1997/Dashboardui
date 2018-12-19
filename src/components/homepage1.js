import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import { Button, ButtonGroup } from '@trendmicro/react-buttons';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import ensureArray from 'ensure-array';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaChartLine, FaListAlt, FaCogs } from 'react-icons/fa';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export default class extends PureComponent {
    state = {
        selected: 'home',
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    pageTitle = {
        'home': 'Home',
        'devices': ['Devices'],
        'reports': ['Reports'],
        'settings/policies': ['Settings', 'Policies'],
        'settings/network': ['Settings', 'Network']
    };

    renderBreadcrumbs() {
        const { selected } = this.state;
        const list = ensureArray(this.pageTitle[selected]);

        return (
            <Breadcrumbs>
                {list.map((item, index) => (
                    <Breadcrumbs.Item
                        active={index === list.length - 1}
                        key={`${selected}_${index}`}
                    >
                        {item}
                    </Breadcrumbs.Item>
                ))}
            </Breadcrumbs>
        );
    }

    navigate = (pathname) => () => {
        this.setState({ selected: pathname });
    };

    render() {
        const { expanded, selected } = this.state;

        return (
            <div>
                <div
                    style={{
                        marginLeft: expanded ? 240 : 64,
                        padding: '15px 20px 0 20px'
                    }}
                >
                    <ButtonGroup>
                    <Button btnStyle="flat" onClick={this.navigate('home')}>
                            Home
                            </Button>
                        <Button btnStyle="flat" onClick={this.navigate('devices')}>
                            Devices
                        </Button>
                        <Button btnStyle="flat" onClick={this.navigate('reports')}>
                            Reports
                        </Button>
                        <Dropdown>
                            <Dropdown.Toggle>
                                Settings
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <MenuItem onClick={this.navigate('settings/policies')}>
                                    Policies
                                </MenuItem>
                                <MenuItem onClick={this.navigate('settings/network')}>
                                    Network
                                </MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonGroup>
                </div>
                <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
                    <SideNav.Toggle />
                    <SideNav.Nav selected={selected}>
                        <NavItem eventKey="home"  >
                            <NavIcon className="font">
                          
                           <div>
                           <FaHome size={28}  />
                           </div>
                       </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Home">
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="devices">
                            <NavIcon>
                            <div>
                           <FaChartLine size={28}  />
                           </div>                            
                           </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Devices">
                                Devices
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="reports">
                            <NavIcon>
                            <div>
                           <FaListAlt size={28}  />
                           </div>                                              
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Reports">
                                Reports
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="settings">
                            <NavIcon>
                            <div>
                           <FaCogs size={28}  />
                           </div>                                               </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Settings">
                                Settings
                            </NavText>
                            <NavItem eventKey="settings/policies">
                                <NavText title="Policies">
                                    Policies
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/network">
                                <NavText title="Network">
                                    Network
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Main expanded={expanded}>
                    {this.renderBreadcrumbs()}
                </Main>
            </div>
        );
    }
}
