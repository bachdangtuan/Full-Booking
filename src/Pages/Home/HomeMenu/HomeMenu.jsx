import React, { useState } from 'react'
import { Tabs } from 'antd';

export default function HomeMenu(props) {
    const { TabPane } = Tabs;
    const [state, setState] = useState({
        state: {
            tabPosition: 'left',
        }
    })
    const { tabPosition } = state.state
    console.log('tabPosition',tabPosition);
    return (
        <>
        {/* Ant Design Tab */}
            <Tabs tabPosition={tabPosition}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </>
    )
}
