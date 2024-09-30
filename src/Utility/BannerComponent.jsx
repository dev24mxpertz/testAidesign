import { Breadcrumbs, Typography, } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

function BannerComponent({ imageUrl, heading, linkUrl, LinkText }) {
    return (
        <>
            <div className='Banner_wrapper'
                style={{
                    // backgroundImage: `url(${imageUrl})`,
                    background: 'linear-gradient(180deg, #5E52C2 0%, #312A70 100%)'
                }}>
                <div className='Banner_content bachground-purple'>
                    <h1 style={{color:'white',textTransform:"uppercase"}}>{heading}</h1>
                    <hr />
                    {/* <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            Home
                        </Link>
                        <Typography>{heading}</Typography>
                    </Breadcrumbs> */}

                </div>

            </div>
        </>
    )
}

export default BannerComponent