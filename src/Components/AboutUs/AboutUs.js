/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Domain from '@material-ui/icons/Domain';

import telkom from 'images/telkom.png';
import logo1 from 'images/logo1.png';
import logo2 from 'images/logo2.png';
import about from 'images/about.png';

import 'Components/AboutUs/AboutUs.css';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.countUpRef = React.createRef();
  }

  render() {
    return (
      <div className="AboutUs">
        <Grid
          container
          className="FirstTopBar"
        >
          <Grid
            item
            container
            md={6}
            alignItems="center"
            spacing={1}
          >
            <Grid
              item
            >
              <Link className="url" to="/faq">FAQ</Link>
            </Grid>
            <Grid
              item
            >
              <Typography variant="subtitle1">|</Typography>
            </Grid>
            <Grid
              item
            >
              <Link className="url" to="/support">Support</Link>
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={6}
            direction="row-reverse"
            spacing={2}
          >
            <Grid
              item
            >
              <a className="url" href="https://www.instagram.com/goviralin">
                <SvgIcon
                  viewBox="0 0 24 24"
                >
                  <svg>
                    <path fill="#fff" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </SvgIcon>
              </a>
            </Grid>
            <Grid
              item
            >
              <a className="url" href="https://twitter.com/goviralin">
                <SvgIcon
                  viewBox="0 0 24 24"
                >
                  <svg>
                    <path fill="#fff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg>
                </SvgIcon>
              </a>
            </Grid>
            <Grid
              item
            >
              <a className="url" href="#">
                <SvgIcon
                  viewBox="0 0 24 24"
                >
                  <svg>
                    <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                  </svg>
                </SvgIcon>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className="SecondTopBar"
          container
        >
          <Grid
            item
            xs={6}
            container
            direction="row"
          >
            <Grid item xs={12}>
              <img src={logo2} className="Logo" alt="logo" />
              <img src={logo1} className="Logo" alt="logo" />
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row-reverse"
            spacing={2}
          >
            <Grid item md={4}>
              <Typography variant="subtitle1">
                <Domain />
                &nbsp;Address
              </Typography>
              <Typography variant="subtitle1" align="center">Jl. Pemuda No.45, Kergon, Pekalongan</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="subtitle1">
                <Phone />
                &nbsp;0823 2393 6436
              </Typography>
              <Typography variant="subtitle1" align="center">Call us for more details!</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="subtitle1">
                <Email />
                &nbsp;Mail Us Today
              </Typography>
              <Typography variant="subtitle1" align="center">kuyviralin@gmail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          className="ThirdTopBar"
        >
          <Grid
            item
            xs={6}
            container
          >
            <Grid
              item
            >
              <Link to="/" className="url">
                Beranda
              </Link>
              <Link to="/cara-kerja" className="url">
                Cara Kerja
              </Link>
              <Link to="/tentang-kami" className="url">
                Tentang Kami
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row-reverse"
            spacing={1}
          >
            <Grid
              item
            >
              <Link to="/login-promotor" className="url bgMain">
                Login
              </Link>
            </Grid>
            <Grid
              item
            >
              <Link to="/register" className="url bgMain">
                Register
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <div className="MainContainer">
          <Grid
            className="Main"
            container
            justify="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <img src={about} alt="How It Works" className="clientPhotos" />
            </Grid>
            <Grid
              item
              xs={2}
              container
              justify="center"
            >
              <Grid
                item
                xs={12}
              >
                <img src={logo2} className="AboutLogo" alt="logo" />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <img src={logo1} className="AboutLogo" alt="logo" />
              </Grid>
            </Grid>
            <Grid
              className="Clients"
              container
            >
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid
                item
                xs={12}
                container
                spacing={5}
              >
                <Grid
                  item
                  container
                  xs={12}
                >
                  <Typography variant="h5" paragraph align="center">
                    {`Viralin adalah sebuah platform yang mempertemukan
                    pebisnis dengan memanfaatkan konsumen sebagai promotornya
                    dalam mempromosikan produk mereka. Dengan Viralin, pebisnis
                    bisa dengan mudah mencari pertolongan untuk memviralkan
                    produknya. Sehingga proses penyebaran promosi dapat
                    lebih masif, praktis, dan terukur.  Viralin ini akan
                    menjadi wadah advertisement baru yang dapat menyenangkan
                    semua pihak, dengan payment gatewaynya siapapun mampu
                    mengubah click, like dan share menjadi uang.`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
            </Grid>
          </Grid>
          <div
            className="FooterContainer"
          >
            <Grid
              container
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Grid
                item
                md={3}
                container
              >
                <Grid item md={12}>
                  <Typography variant="h5">
                    Info
                  </Typography>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Link to="/tentang-kami" className="footerLinks">
                    <Typography variant="subtitle1">
                      About Us
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Typography variant="h5">
                    Support
                  </Typography>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Link to="/faq" className="footerLinks">
                    <Typography variant="subtitle1">
                      FAQ
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Typography variant="h5">
                    Links
                  </Typography>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Link to="/" className="footerLinks">
                    <Typography variant="subtitle1">
                      www.myviralin.com
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid
                item
                md={3}
                container
              >
                <Grid item md={12}>
                  <Typography variant="h5">
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Link to="/" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                        </svg>
                      </SvgIcon>
                      viralin Bisnismu
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <a href="https://twitter.com/goviralin" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                        </svg>
                      </SvgIcon>
                      goviralin
                    </Typography>
                  </a>
                </Grid>
                <Grid item md={12}>
                  <a href="https://www.instagram.com/goviralin" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                      </SvgIcon>
                      goviralin
                    </Typography>
                  </a>
                </Grid>
              </Grid>
              <Grid
                item
                md={3}
                container
              >
                &nbsp;
              </Grid>
              <Grid
                item
                md={3}
                container
              >
                <Grid item md={12}>
                  <img src={logo2} className="FooterLogo" alt="logo" />
                  <img src={logo1} className="FooterLogo" alt="logo" />
                </Grid>
                <Grid item md={12}>
                  <img src={telkom} alt="Telkom" />
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div
            className="FooterBottomContainer"
          >
            <Typography variant="subtitle1" align="center">
              Copyright 2019 Viralin | Powered by PT Telekomunikasi Indonesia (Persero) Tbk
            </Typography>
          </div>
        </div>
        <div aria-label="Whatsapp" className="FABWhatsapp">
          <a href="https://wa.me/6282323936436" target="_blank">
            <Grid
              container
            >
              <Grid
                item
                xs={12}
                container
                alignItems="center"
                justify="center"
              >
                <svg
                  style={{
                    width: 32,
                    height: 32,
                  }}
                  viewBox="0 0 24 24"
                >
                  <path fill="#fff" d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                </svg>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" align="center">Chat WhatsApp</Typography>
              </Grid>
            </Grid>
          </a>
        </div>
      </div>
    );
  }
}

export default AboutUs;
