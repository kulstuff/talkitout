import React, { Component } from 'react'

class Call extends Component {
    
    state = {
        caller: {},
        reciepent: {},
        secret: null,
        duration: null,
        onhold: false,
        oncall: false,
        status: null
    }

    render() {
        return(
            <div className='call'>
                <div className='call-centric'>
                    <div className='call-centric-information-head'>

                    </div>
                    <div className='call-centric-interface'>

                    </div>
                    <div className='call-centric-information-tali'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Call;