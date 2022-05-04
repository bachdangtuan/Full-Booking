import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Loading(props) {


    const isLoading = useSelector(state => state.LoadingReducer.isLoading)


    console.log("isLoading", isLoading);

    return (

        <Fragment>

            {isLoading ?
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '100px',
                    zIndex: '99'
                }}>
                    <h1 className='text-white font'>LOADDING....</h1>

                </div> : ''

        }

        </Fragment>
    )
}
