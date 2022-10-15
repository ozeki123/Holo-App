import React from 'react';
import './Landing.scss';
import landingImage from '../../assets/images/shinka-bg.png';
import featuredIcon from '../../assets/images/featured-icon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import groupImage from '../../assets/images/group.jpg'
import partnerImage from '../../assets/images/partner.jpg'
import courtImage from '../../assets/images/court.jpg'

const featuredData = {
  "items":[
    {"title":"Basketball court in Okinawa","location": "Okinawa, Japan", "price":"¥1000", "image": "chiba-basketball.jpg"},
    {"title":"Basketball court in Okinawa","location": "Okinawa, Japan", "price":"¥1000", "image": "saitama-basketball.jpg"},
    {"title":"Basketball court in Tokyo","location": "Tokyo, Japan", "price":"¥1000", "image": "basketball-tokyo.jpg"},
    {"title":"Track field in Karuizawa","location": "Karuizawa, Japan", "price":"¥1000", "image": "track-karuizawa.jpg"},
  ]
}

const popularData = {
  "items":[
    {"title":"Swimming pool in Kyoto ","location": "Okinawa, Japan", "price":"¥1000", "image": "osaka-basketball.png"},
    {"title":"Swimming pool in Kyoto ","location": "Okinawa, Japan", "price":"¥1000", "image": "swimming-kyoto.jpg"},
    {"title":"Basketball court in Osaka","location": "Tokyo, Japan", "price":"¥1000", "image": "nagano-soccer.jpg"},
    {"title":"Basketball court in Kanagawa","location": "Karuizawa, Japan", "price":"¥1000", "image": "kanagawa-soccer.jpg"},
  ]
}

const categoryData = {
  "categories":[
   {"category":"baseball"},
   {"category":"soccer"},
   {"category":"swimming"},
   {"category":"golf"},
   {"category":"tennis"},
   {"category":"basketball"},
  ]
}

const Landing = () => {
  return (
    <main className="landing-container">
      <section className="landing-banner">
        <article className="landing-image">
          <img src={landingImage}/>
          <h1>
            スポーツをより快適に。 <br/>
            技術とスポーツを繋ぐアプリ。
          </h1>
          <aside className="event-popup">
            <div className="event-contents">
              <p>限定イベント</p>
              <p className="number">50%<span>オフ</span></p>
              <p>開催中</p>
            </div>
          </aside>
        </article>
      </section>
      <section className="landing-categories">
        <section className="section-header">
          <article className="section-title">
              <h4>Filter by sport</h4>
              <h2>スポーツから絞り込み</h2>
          </article>
          <article className="section-all">
            <p>全てを表示</p>
            <div className="expand-icon">
              <FontAwesomeIcon className="arrow-icon" icon={faArrowRightLong}/>
            </div>
          </article>
        </section>
        
        <ul className="category-contents">
          <li className="category">野球</li>
          <li className="category">サッカー</li>
          <li className="category">水泳</li>
          <li className="category">ゴルフ</li>
          <li className="category">テニス</li>
          <li className="category">バスケ</li>
        </ul>
      </section>
      <section className="landing-gallery">
        <section className="section-gallery">
          <section className="section-header">
            <article className="section-title">
              <h4>Featured</h4>
              <h2>お勧めコート</h2>
            </article>
            <article className="section-all">
              <p>全てを表示</p>
              <div className="expand-icon">
                <FontAwesomeIcon className="arrow-icon" icon={faArrowRightLong}/>
              </div>
            </article>  
          </section>
          
          <div className="section-contents">
              
            {
              featuredData.items.map((item, index) => {
                return(
                  <article className="gallery-item" key={index}>
                    <article className="item-text">
                      <h5>{item.price}/night</h5>
                      <div className="item-bottom">
                        <h5>{item.title}</h5>
                        <h6>{item.location}</h6>
                      </div>
                    </article>
                    <div className="gallery-image">
                      <img src={require('../../assets/images/' + item.image)} alt=""/>
                    </div>
                    
                  </article>
                )
              })
            }
          </div>
          
        </section>
        <section className="section-gallery">
          <section className="section-header">
            <article className="section-title">
              <h4>Filter by sport</h4>
              <h2>スポーツから絞り込み</h2>
            </article>
            <article className="section-all">
              <p>全てを表示</p>
              <div className="expand-icon">
                <FontAwesomeIcon className="arrow-icon" icon={faArrowRightLong}/>
              </div>
          </article>
          </section>
          
          <div className="section-contents">
            {
              popularData.items.map((item, index) => {
                return(
                  <article className="gallery-item" key={index}>
                    <article className="item-text">
                      <h5>{item.price}/night</h5>
                      <div className="item-bottom">
                        <h5>{item.title}</h5>
                        <h6>{item.location}</h6>
                      </div>
                    </article>
                    <div className="gallery-image">
                      <img src={require('../../assets/images/' + item.image)} alt=""/>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </section>
        <section className="section-services">
          <section className="section-header">
            <article className="section-title">
                <h4>Other services</h4>
                <h2>その他サービス</h2>
            </article>
            <article className="section-all">
              <p>全てを表示</p>
              <div className="expand-icon">
                <FontAwesomeIcon className="arrow-icon" icon={faArrowRightLong}/>
              </div>
            </article>
          </section>
          <section className="service-gallery">
            <article className="service-item">
              <div className="service-title">
                <h5>Find a group</h5>
                <h2>グループを探す</h2>
              </div>
              <div className="gallery-image">
                <img src={groupImage}/>
              </div>
            </article>
            <article className="service-item">
              <div className="service-title">
                <h5>Become a partner</h5>
                <h2>パートナーになる</h2>
              </div>
              <div className="gallery-image">
                <img src={partnerImage}/>
              </div>
              
            </article>
            <article className="service-item">
              <div className="service-title">
                <h5>Find a court</h5>
                <h2>コートを探す</h2>
              </div>
              <div className="gallery-image">
                <img src={courtImage}/>
              </div>
              
            </article>
          </section>
        </section>
        <hr/>
        <section className="section-footer">
            <article className="footer-left">
              <p>shinkaについて</p>
              <p>お問い合わせ</p>
              <p>プライバシーポリシー</p>
              <p>利用規約</p>
            </article>
            <article className="footer-right">
              <h2>shinpo</h2>
              <p>© Andrew Ozeki. All Rights Reserved</p>
            </article>
        </section>
      </section>
    </main>
    
  )
}

export default Landing;