import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import logo_image from '../../assets/images/save_logo.png';
import CallIcon from '@mui/icons-material/Call';
import businessStore from '../../stores/BusinessStore';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import LogoutIcon from '@mui/icons-material/Logout';
import { observer } from "mobx-react";
import GlobalStore from '../../stores/GlobalStore'
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import EditDetails from '../editDetails/EditDetails';
import BusinessStore from '../../stores/BusinessStore';
import './header.css';

const Header = (observer(() => {
    useEffect(() => {
        async function fetchData() {
            await BusinessStore.initialBusinessDetails();
            if (Object.keys(BusinessStore.data).length === 0) {
                BusinessStore.initData(
                    {
                        name: "save-mortgage and finance consulting",
                        address: "Derech Bar Yehuda 52, Nesher",
                        email: "info@save.org.il",
                        phone: "0723326584",
                        owner: "Yron Katz",
                        description: "We are here to provide comprehensive mortgage consulting services tailored to Daguma's needs. Our team of experts will accompany you through the entire mortgage process, and offer customized solutions and advice.",
                        logo: '../src/assets/images/save_logo.png'
                    }
                );
            }

        }
        fetchData();
    }, []);
    useEffect(() => {
        BusinessStore.initialBusinessDetails()
    }, []);
    return (

        <>
            <div className='headerDiv'>
                <div className='infoDiv'>
                    <div className="logo">
                        <img src={logo_image} />
                    </div>

                    <div className="business-details">
                        <h1>{businessStore.data.name}</h1>
                        <h3>{businessStore.data.description}</h3>
                        <p>{businessStore.data.address} | {businessStore.data.email}</p>
                    </div>
                    {GlobalStore.isLogin &&
                        <EditDetails></EditDetails>
                    }
                </div>


                <div className='buttonsDiv'>
                    <Button variant="outlined"> {businessStore.data.phone} <CallIcon></CallIcon></Button>
                    {
                        !GlobalStore.isLogin ?
                            <Button variant="outlined" href='/admin'> login <LoginIcon /> </Button>
                            :
                            <Button variant="outlined" href='/' > logout <LogoutIcon /> </Button>
                    }



                </div>



            </div>



        </>

    );


}))
export default Header
