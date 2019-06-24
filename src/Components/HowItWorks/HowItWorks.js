/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';

import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Domain from '@material-ui/icons/Domain';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

// import FastForward from '@material-ui/icons/FastForward';
// import Games from '@material-ui/icons/Games';
// import Dvr from '@material-ui/icons/Dvr';
// import MonetizationOn from '@material-ui/icons/MonetizationOn';
// import Money from '@material-ui/icons/Money';
// import Share from '@material-ui/icons/Share';
// import Person from '@material-ui/icons/Person';
// import Group from '@material-ui/icons/Group';
// import Ballot from '@material-ui/icons/Ballot';
// import NotificationsActive from '@material-ui/icons/NotificationsActive';
// import Error from '@material-ui/icons/Error';
// import CardGiftcard from '@material-ui/icons/CardGiftcard';
// import CalendarToday from '@material-ui/icons/CalendarToday';

import CountUp from 'react-countup';
import OnVisible from 'react-on-visible';

import telkom from 'images/telkom.png';
import myindihome from 'images/myindihome.png';
import logo1 from 'images/logo1.png';
import logo2 from 'images/logo2.png';
import howitworks from 'images/howitworks.png';
import howitworks2 from 'images/howitworks2.jpg';
import client1 from 'images/client1.jpeg';

import 'Components/HowItWorks/HowItWorks.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step1view: false,
      step2view: false,
      step3view: false,
      step4view: false,
      step5view: true,
    };
    this.countUpRef = React.createRef();
  }

  render() {
    return (
      <div className="Home">
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
              <Link className="url" to="/">
                <SvgIcon
                  viewBox="0 0 24 24"
                >
                  <svg>
                    <path fill="#fff" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </SvgIcon>
              </Link>
            </Grid>
            <Grid
              item
            >
              <Link className="url" to="/">
                <SvgIcon
                  viewBox="0 0 24 24"
                >
                  <svg>
                    <path fill="#fff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg>
                </SvgIcon>
              </Link>
            </Grid>
            <Grid
              item
            >
              <Link className="url" to="/">
                <SvgIcon
                  viewBox="0 0 24 24"
                >
                  <svg>
                    <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                  </svg>
                </SvgIcon>
              </Link>
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
              <Typography variant="h5">
                <Domain />
                &nbsp;Address
              </Typography>
              <Typography variant="subtitle1" align="center">Jl. Pemuda No.45, RW.6, Kergon, Kec. Pekalongan Bar., Kota Pekalongan, Jawa Tengah 51119</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="subtitle1">
                <Phone />
                &nbsp;0823 2393 6436
              </Typography>
              <Typography variant="subtitle1" align="center">Call us for more details!</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="h5">
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
              <Link to="/" className="url">
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
              <Link to="/login" className="url bgMain">
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
          >
            <Grid item xs={12} className="Head">
              <Typography
                variant="h2"
                align="center"
              >
                Cara Kerja
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img src={howitworks} alt="How It Works" className="clientPhotos" />
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
                <Grid item xs={6}>
                  <img src={howitworks2} alt="Client 1" className="clientPhotos" />
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                >
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Typography variant="subtitle1" paragraph>
                      {`Konsep digital marketing viralin itu menggunakan kekuatan
                      “word of mouth” sosial media. Sistem ini memiliki kemampuan
                      advertising tidak terbatas pada kalangan tertentu dan dapat
                      disesuaikan dengan kebutuhan anda. Kini mempromosikan konten
                      di sosial media tidak hanya terbatas di konten wall tapi juga
                      bisa masuk kedalam room chat sehingga menjadi viral.`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid
                item
                xs={12}
                container
                spacing={2}
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={4}>
                  <OnVisible
                    className="card"
                    visibleClassName="visible"
                  >
                    <Card>
                      <CardHeader
                        avatar={(
                          <CountUp
                            className="counter"
                            ref={this.countUpRef}
                            start={0}
                            end={1}
                            duration={3}
                          >
                            {({ countUpRef, start }) => (
                              <OnVisible
                                className="my-container"
                                bounce
                                onChange={start}
                              >
                                <div>
                                  <Avatar aria-label="Step" ref={countUpRef} />
                                </div>
                              </OnVisible>
                            )}
                          </CountUp>
                        )}
                        title="Atur Konten Iklan &amp; Viralkan"
                      />
                      <CardMedia
                        image={client1}
                        title="Langkah 1"
                      >
                        <img src={client1} alt="Langkah 1" className="cardImage" />
                      </CardMedia>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {`Pebisnis mengatur parameter konten iklan yang
                          akan dipromosikan berdasarkan demografi,
                          letak geografis, gimmick untuk promotor,
                          jumlah promotor serta budget iklan yang
                          dapat diset mulai dari Rp. 0,- (Bebas Biaya)`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </OnVisible>
                </Grid>
                <Grid item xs={12} md={4}>
                  <OnVisible
                    className="card"
                    visibleClassName="visible"
                  >
                    <Card>
                      <CardHeader
                        avatar={(
                          <CountUp
                            className="counter"
                            ref={this.countUpRef}
                            start={0}
                            end={2}
                            duration={3}
                          >
                            {({ countUpRef, start }) => (
                              <OnVisible
                                className="my-container"
                                bounce
                                onChange={start}
                              >
                                <div>
                                  <Avatar aria-label="Step" ref={countUpRef} />
                                </div>
                              </OnVisible>
                            )}
                          </CountUp>
                        )}
                        title="Pilih Konten Iklan"
                      />
                      <CardMedia
                        image={client1}
                        title="Langkah 2"
                      >
                        <img src={client1} alt="Langkah 2" className="cardImage" />
                      </CardMedia>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {`Promotor memilih konten iklan
                          aktif mana saja yang ingin dipromosikan`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </OnVisible>
                </Grid>
                <Grid item xs={12} md={4}>
                  <OnVisible
                    className="card"
                    visibleClassName="visible"
                  >
                    <Card>
                      <CardHeader
                        avatar={(
                          <CountUp
                            className="counter"
                            ref={this.countUpRef}
                            start={0}
                            end={3}
                            duration={3}
                          >
                            {({ countUpRef, start }) => (
                              <OnVisible
                                className="my-container"
                                bounce
                                onChange={start}
                              >
                                <div>
                                  <Avatar aria-label="Step" ref={countUpRef} />
                                </div>
                              </OnVisible>
                            )}
                          </CountUp>
                        )}
                        title="Get Referral Link &amp; Mulai Viralkan"
                      />
                      <CardMedia
                        image={client1}
                        title="Langkah 3"
                      >
                        <img src={client1} alt="Langkah 3" className="cardImage" />
                      </CardMedia>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {`Promotor memilih konten iklan dan akan
                          mendapatkan referral link. Referral link
                          inilah yang nantinya akan dipromosikan promotor
                          melalui social media.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </OnVisible>
                </Grid>
                <Grid item xs={12} md={4}>
                  <OnVisible
                    className="card"
                    visibleClassName="visible"
                  >
                    <Card>
                      <CardHeader
                        avatar={(
                          <CountUp
                            className="counter"
                            ref={this.countUpRef}
                            start={0}
                            end={4}
                            duration={3}
                          >
                            {({ countUpRef, start }) => (
                              <OnVisible
                                className="my-container"
                                bounce
                                onChange={start}
                              >
                                <div>
                                  <Avatar aria-label="Step" ref={countUpRef} />
                                </div>
                              </OnVisible>
                            )}
                          </CountUp>
                        )}
                        title="Viralin mengubah click, like and share menjadi Uang"
                      />
                      <CardMedia
                        image={client1}
                        title="Langkah 4"
                      >
                        <img src={client1} alt="Langkah 4" className="cardImage" />
                      </CardMedia>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {`Setiap orang yang melakukan click, like
                          dan share suatu konten yang promotor bagikan
                          maka akan menjadi uang bagi promotor dimana
                          masing-masing action mempunyai jumlah point
                          yang berbeda.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </OnVisible>
                </Grid>
                <Grid item xs={12} md={4}>
                  <OnVisible
                    className="card"
                    visibleClassName="visible"
                  >
                    <Card>
                      <CardHeader
                        avatar={(
                          <CountUp
                            className="counter"
                            ref={this.countUpRef}
                            start={0}
                            end={5}
                            duration={3}
                          >
                            {({ countUpRef, start }) => (
                              <OnVisible
                                className="my-container"
                                visibleClassName="asdf"
                                bounce
                                onChange={start}
                              >
                                <div>
                                  <Avatar aria-label="Step" ref={countUpRef} />
                                </div>
                              </OnVisible>
                            )}
                          </CountUp>
                        )}
                        title="Get Customer &amp; Rewards"
                      />
                      <CardMedia
                        image={client1}
                        title="Langkah 5"
                      >
                        <img src={client1} alt="Langkah 5" className="cardImage" />
                      </CardMedia>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {`Saat promotor mendapatkan pelanggan dari referral link
                          yang dibagikan maka promotor memperoleh rewards sesuai
                          dengan gimmick yang diberikan oleh pebisnis.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </OnVisible>
                </Grid>
              </Grid>
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
                  <Link to="/faq" className="footerLinks">
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
                  <Link to="/twitter" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                        </svg>
                      </SvgIcon>
                      Viralin
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <Link to="/twitter" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                        </svg>
                      </SvgIcon>
                      myviralin
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
                  <Link to="/twitter" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                        </svg>
                      </SvgIcon>
                      Viralin
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <Link to="/twitter" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                        </svg>
                      </SvgIcon>
                      myviralin
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <Link to="/twitter" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                      </SvgIcon>
                      myviralin
                    </Typography>
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <Link to="/twitter" className="footerLinks">
                    <Typography variant="subtitle1">
                      <SvgIcon
                        viewBox="0 0 24 24"
                      >
                        <svg>
                          <path fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                        </svg>
                      </SvgIcon>
                      Viralin
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
                  <img src={myindihome} alt="My Indihome" />
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
              Copyright 2019 Viralin
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
