'use direct';

import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div style = {{
                flex: 1,
                textAlign: 'center',
                paddingTop: 100
            }}>
            <label>版本: v1.1.4</label><br/>
            </div>
        )
    }
}