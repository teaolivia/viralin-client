/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Domain from '@material-ui/icons/Domain';
import FastForward from '@material-ui/icons/FastForward';
import Games from '@material-ui/icons/Games';
import Dvr from '@material-ui/icons/Dvr';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import Money from '@material-ui/icons/Money';
import Share from '@material-ui/icons/Share';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import Ballot from '@material-ui/icons/Ballot';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Error from '@material-ui/icons/Error';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import CalendarToday from '@material-ui/icons/CalendarToday';

import CountUp from 'react-countup';
import OnVisible from 'react-on-visible';

import blank from 'images/blank-carousel.jpg';
import carousel1 from 'images/carousel1.jpg';
import carousel2 from 'images/carousel2.jpg';
import telkom from 'images/telkom.png';
import logo1 from 'images/logo1.png';
import logo2 from 'images/logo2.png';
import client1 from 'images/client1.jpeg';
import client2 from 'images/client2.jpeg';
import client3 from 'images/client3.jpeg';

import 'Components/Home/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            xs={12}
            md={6}
            container
            direction="row"
          >
            <Grid item>
              <img src={logo2} className="Logo" alt="logo" />
              <img src={logo1} className="Logo" alt="logo" />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="row-reverse"
            spacing={2}
          >
            <Grid item md={4}>
              <Typography variant="subtitle1">
                <Domain />
                &nbsp;Address
              </Typography>
              <Typography variant="subtitle1" align="center" paragraph>Jl. Pemuda No.45, Kergon, Pekalongan</Typography>
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
              <AnchorLink href="#feedback" className="url">
                Feedback
              </AnchorLink>
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
        <Grid container>
          <Carousel
            className="Carousel"
            autoPlay
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            interval={3000}
          >
            <div>
              <img src={blank} alt="blank carousel" />
              <div className="legend">
                <Typography variant="h5">Viralkan Bisnis Kamu Dengan</Typography>
                <Typography variant="h1">VIRALIN</Typography>
                <Typography variant="h5">Siapapun bisa dengan mudah mempromosikan produkmu, dengan</Typography>
                <Typography variant="h5">
                  konsep
                  &nbsp;
                  <i>
                    advertisement
                  </i>
                  &nbsp;yang baru dan efektif.
                </Typography>
                <br />
                <br />
                <Link to="/" className="link">
                  Info Lebih Lanjut
                </Link>
              </div>
            </div>
            <div>
              <img src={carousel1} alt="blank carousel" />
              <div className="legend">
                <Typography variant="h5">Dapatkan Penghasilan Tambahan Dengan</Typography>
                <Typography variant="h1">VIRALIN</Typography>
                <Typography variant="h5">Daftarkan dirimu dan promosikan produk viralin, raih keuntungan</Typography>
                <Typography variant="h5">sebesar-besarnya!</Typography>
                <br />
                <br />
                <Link to="/" className="link">
                  Info Lebih Lanjut
                </Link>
              </div>
            </div>
            <div>
              <img src={carousel2} alt="blank carousel" />
              <div className="legend">
                <Typography variant="h5">Viralkan bisnis kamu dengan</Typography>
                <Typography variant="h1">VIRALIN</Typography>
                <Typography variant="h5">Siapapun bisa dengan mudah mempromosikan produkmu, dengan</Typography>
                <Typography variant="h5">
                  konsep
                  &nbsp;
                  <i>
                    advertisement
                  </i>
                  &nbsp;yang baru dan efektif.
                </Typography>
                <br />
                <br />
                <Link to="/" className="link">
                  Info Lebih Lanjut
                </Link>
              </div>
            </div>
          </Carousel>
        </Grid>
        <div className="MainContainer">
          <Grid
            className="Main"
            container
          >
            <Grid item className="Head">
              <Typography
                variant="h4"
                align="center"
              >
                Bagaimana Anda Bisa Memulai
              </Typography>
              <br />
              <Typography
                variant="h5"
                align="center"
              >
                {`Kini untuk menjadi Viral dan memperoleh uang akan
                semakin mudah, cukup dengan menggerakan tangan
                dan jarimu untuk click, like dan share konten viralmu.`}
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems="flex-start"
              justify="center"
            >
              <Grid
                item
                md={4}
                className="borderRight"
              >
                <Typography
                  variant="h5"
                  className="withBorder"
                  align="center"
                >
                  Viralkan Produk Saya
                </Typography>
                <br />
                <Typography
                  align="center"
                >
                  Viralkan produkmu dengan mengatur konten iklan yang dapat diatur sesukamu
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                className="borderLeft"
              >
                <Typography
                  variant="h5"
                  className="withBorder"
                  align="center"
                >
                  Dapatkan Uang Saya
                </Typography>
                <br />
                <Typography
                  align="center"
                >
                  {`Kini untuk mendapatkan uang cukup dengan viralkan konten
                  pebisnismu melalui link referralmu dan
                  dapatkan click, like, dan share netizen sebanyak-banyaknya.`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
            >
              <Grid item md={12}>&nbsp;</Grid>
              <Grid item md={12}>&nbsp;</Grid>
              <Grid item md={12}>&nbsp;</Grid>
              <Grid item md={12}>&nbsp;</Grid>
              <Grid item md={12}>&nbsp;</Grid>
              <Grid item md={12}>
                <Typography variant="h3" align="center">Mengapa memakai Viralin?</Typography>
              </Grid>
              <Grid item md={12}>
                <br />
                <br />
              </Grid>
              <Grid
                item
                md={12}
                container
              >
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Typography variant="h4" align="center">Pebisnis</Typography>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid
                  item
                  md={12}
                  spacing={2}
                  container
                  justify="center"
                  alignItems="flex-start"
                >
                  <Grid item md={3}>
                    <Typography variant="h1" align="center">
                      <MonetizationOn fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Promosi bisnis ga harus mahal, dengan viralin,
                      kamu bisa mengatur sendiri berapa budget untuk memviralkan bisnismu`}
                    </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography variant="h1" align="center">
                      <Games fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Takut promosimu salah sasaran ? atau promosi kurang viral ?
                        kini kamu bisa mengatur siapa saja target cutomer bisnismu dengan tepat,
                        karena mesin pembuat viralmu adalah banyak orang yang mampu mencari customer
                        dan berinteraksi dengan pendekatan yang tidak bisa dilakukan sebuah mesin`}
                    </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography variant="h1" align="center">
                      <FastForward fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Terdapat fitur transaksi langsung yang
                      memudahkan agar produk anda segera terjual`}
                    </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography variant="h1" align="center">
                      <Dvr fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Ada juga hasil statistik pem-viralan iklanmu
                      sehingga kamu dapat menganalisis pengembangan bisnismu`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12}>
                <br />
              </Grid>
              <Grid
                item
                md={12}
                container
              >
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid item md={12}>
                  <Typography variant="h4" align="center">Promotor</Typography>
                </Grid>
                <Grid item md={12}>&nbsp;</Grid>
                <Grid
                  item
                  md={12}
                  container
                  justify="center"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item md={4}>
                    <Typography variant="h1" align="center">
                      <Share fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Dapatkan penghasilan tambahan dengan melakukan
                      kegiatanmu sehari-hari yaitu share foto dan video`}
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="h1" align="center">
                      <Money fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Setiap deal, like, share dan view dari foto dan video
                      yang kamu share akan dihitung sebagai poin yang kemudian bisa diuangkan`}
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="h1" align="center">
                      <MonetizationOn fontSize="inherit" />
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      {`Jual apa saja yang mau kamu jual
                      tanpa harus punya produknya`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>&nbsp;</Grid>
            <Grid item md={12}>&nbsp;</Grid>
            <Grid item md={12}>&nbsp;</Grid>
            <Grid item md={12}>&nbsp;</Grid>
            <Grid item md={12}>&nbsp;</Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
            >
              <Grid
                item
                container
                alignItems="center"
                md={3}
                justify="center"
              >
                <Grid item>
                  <Typography variant="h2">
                    <Person fontSize="inherit" />
                  </Typography>
                </Grid>
                <Grid item>
                  <CountUp
                    className="counter"
                    ref={this.countUpRef}
                    start={0}
                    end={5}
                    duration={3}
                    separator="."
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <OnVisible
                        className="my-container"
                        bounce
                        onChange={start}
                      >
                        <div>
                          <Typography variant="h5" ref={countUpRef} />
                          <Typography variant="h5">Pebisnis</Typography>
                        </div>
                      </OnVisible>
                    )}
                  </CountUp>
                </Grid>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                md={3}
                justify="center"
              >
                <Grid item>
                  <Typography variant="h2">
                    <Group fontSize="inherit" />
                  </Typography>
                </Grid>
                <Grid item>
                  <CountUp
                    className="counter"
                    ref={this.countUpRef}
                    start={0}
                    end={20}
                    duration={3}
                    separator="."
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <OnVisible
                        className="my-container"
                        bounce
                        onChange={start}
                      >
                        <div>
                          <Typography variant="h5" ref={countUpRef} />
                          <Typography variant="h5">Promotor</Typography>
                        </div>
                      </OnVisible>
                    )}
                  </CountUp>
                </Grid>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                md={3}
                justify="center"
              >
                <Grid item>
                  <Typography variant="h2">
                    <Ballot fontSize="inherit" />
                  </Typography>
                </Grid>
                <Grid item>
                  <CountUp
                    className="counter"
                    ref={this.countUpRef}
                    start={0}
                    end={5}
                    duration={3}
                    separator="."
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <OnVisible
                        className="my-container"
                        bounce
                        onChange={start}
                      >
                        <div>
                          <Typography variant="h5" ref={countUpRef} />
                          <Typography variant="h5">Iklan</Typography>
                        </div>
                      </OnVisible>
                    )}
                  </CountUp>
                </Grid>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                md={3}
                justify="center"
              >
                <Grid item>
                  <Typography variant="h2">
                    <NotificationsActive fontSize="inherit" />
                  </Typography>
                </Grid>
                <Grid item>
                  <CountUp
                    className="counter"
                    ref={this.countUpRef}
                    start={0}
                    end={25}
                    duration={3}
                    separator="."
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <OnVisible
                        className="my-container"
                        bounce
                        onChange={start}
                      >
                        <div>
                          <Typography variant="h5" ref={countUpRef} />
                          <Typography variant="h5">Engagement</Typography>
                        </div>
                      </OnVisible>
                    )}
                  </CountUp>
                </Grid>
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
              >
                <Typography variant="h3" align="center">Our Clients</Typography>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid
                item
                xs={12}
                container
                spacing={5}
              >
                <Grid item xs={4}>
                  <img src={client1} alt="Client 1" className="clientPhotos" />
                </Grid>
                <Grid
                  item
                  container
                  xs={8}
                >
                  <Grid item xs={12}>
                    <Typography variant="h5">Paket Indihome Pekalongan</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><Error /></Grid>
                    <Grid item><Typography variant="subtitle1">2 Transaksi : 1 Point</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><CardGiftcard /></Grid>
                    <Grid item><Typography variant="subtitle1">@Point = Rp 50.000,-</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><CalendarToday /></Grid>
                    <Grid item><Typography variant="subtitle1">Massa berlaku sampai 30 September 2019</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><Group /></Grid>
                    <Grid item><Typography variant="subtitle1">Referral : 1 dari 5 orang</Typography></Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid
                item
                xs={12}
                container
                spacing={5}
              >
                <Grid item xs={4}>
                  <img src={client2} alt="Client 2" className="clientPhotos" />
                </Grid>
                <Grid
                  item
                  container
                  xs={8}
                >
                  <Grid item xs={12}>
                    <Typography variant="h5">Lapangan Badminton Diponegoro</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><Error /></Grid>
                    <Grid item><Typography variant="subtitle1">1 Transaksi : 2 Point</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><CardGiftcard /></Grid>
                    <Grid item><Typography variant="subtitle1">@Point = Rp 15.000,-</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><CalendarToday /></Grid>
                    <Grid item><Typography variant="subtitle1">Massa berlaku sampai 22 Juli 2019</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><Group /></Grid>
                    <Grid item><Typography variant="subtitle1">Referral : 3 dari 3 orang</Typography></Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid
                item
                xs={12}
                container
                spacing={5}
              >
                <Grid item xs={4}>
                  <img src={client3} alt="Client 3" className="clientPhotos" />
                </Grid>
                <Grid
                  item
                  container
                  xs={8}
                >
                  <Grid item xs={12}>
                    <Typography variant="h5">Bubur Malam Special Benny, Alun - Alun Pekalongan</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><Error /></Grid>
                    <Grid item><Typography variant="subtitle1">1 Transaksi : 1 Point</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><CardGiftcard /></Grid>
                    <Grid item><Typography variant="subtitle1">@Point = Rp 10.000,-</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><CalendarToday /></Grid>
                    <Grid item><Typography variant="subtitle1">Massa berlaku sampai 11 November 2019</Typography></Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                  >
                    <Grid item><Group /></Grid>
                    <Grid item><Typography variant="subtitle1">Referral : 4 dari 8 orang</Typography></Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
              <Grid item xs={12}>&nbsp;</Grid>
            </Grid>
            <Grid
              id="feedback"
              className="Feedback"
              container
            >
              <Grid
                item
                xs={12}
              >
                <Typography variant="h3" align="center">Feedback</Typography>
                <form onSubmit={console.log('hello')}>
                  <TextField
                    type="text"
                    fullWidth
                    placeholder="Nama Anda"
                  />
                  <TextField
                    type="email"
                    fullWidth
                    placeholder="Email Anda"
                  />
                  <TextField
                    type="text"
                    multiline
                    fullWidth
                    placeholder="Feedback Anda"
                  />
                  <Button>Kirim Feedback!</Button>
                </form>
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
              Copyright 2019 Viralin
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
