// UserLayoutScreen.jsx

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Utility/Navigation';
import ContactUs from './ContactUs/ContactUs';
import CookiePolicy from './CookiePolicy/CookiePolicy';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Services from './Services/Services';
import TermsConditions from './Terms&Conditions/TermsConditions';
import WhyChooseUs from './Why Us/Whyus';
import Aboutus from './aboutus/aboutus';
import Ifooter from './ifooter/ifooter';
import Home from './HomePage/Home';
import Solutions from './Solutions/Solutions';
import BackendSupportMain from './AI-BackendSuport/BackendSupportMain';

function UserLayoutScreen() {
    return (
      <>
        <Layout>
          <div>
            <Navigation />
          </div>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<Aboutus />} />
              <Route path="/aicustomerservice" element={<Services />} />
              <Route path="/Why Choose Us" element={<WhyChooseUs />} />
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="/Terms&Conditions" element={<TermsConditions />} />
              <Route path="/CookiePolicy" element={<CookiePolicy />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Solutions" element={<Solutions />} />
              <Route
                path="/AIcustomworkforce"
                element={<BackendSupportMain />}
              />
            </Routes>
          </Content>
          <div>
            <Ifooter />
          </div>
        </Layout>
      </>
    );
}

export default UserLayoutScreen;
