import React from 'react'
import Header from './Header';
import Footer from './Footer';
import MobileNavigation from '../mobilenavigation/MobileNavigation';



function Layout({children}) {
      return (
            <>
                  <Header />
                  <main style={{ flexGrow: 1 }}>{children}</main> {/* main element with flexGrow to push footer down */}
                  <MobileNavigation />
                  <Footer />
            </>
      );
}

export default Layout