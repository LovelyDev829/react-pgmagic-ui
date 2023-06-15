import './App.scss';
import Header from './components/Header';
import image_001 from './assets/image-001.png'
import image_002 from './assets/image-002.png'
import image_003 from './assets/image-003.png'
import image_004 from './assets/image-004.png'
import face_000 from './assets/face-000.png'
import face_001 from './assets/face-001.png'
import face_002 from './assets/face-002.png'
import face_003 from './assets/face-003.png'
import face_004 from './assets/face-004.png'
import face_005 from './assets/face-005.png'

import { ReactComponent as Button001Icon } from './assets/button-001.svg';
import { ReactComponent as Button002Icon } from './assets/button-002.svg';
import { ReactComponent as Button003Icon } from './assets/button-003.svg';
import { ReactComponent as Button004Icon } from './assets/button-004.svg';

import { ReactComponent as Tool001Icon } from './assets/tool-001.svg';
import { ReactComponent as Tool002Icon } from './assets/tool-002.svg';
import { ReactComponent as Tool003Icon } from './assets/tool-003.svg';
import { ReactComponent as CheckIcon } from './assets/check.svg';
import { ReactComponent as CrossIcon } from './assets/cross.svg';
import { ReactComponent as Product001Icon } from './assets/product-001.svg';
import { ReactComponent as Product002Icon } from './assets/product-002.svg';
import { ReactComponent as Product003Icon } from './assets/product-003.svg';
import { ReactComponent as Product004Icon } from './assets/product-004.svg';
import { ReactComponent as VectorIcon } from './assets/vector.svg';
import { ReactComponent as QuoteIcon } from './assets/quote.svg';

import { ReactComponent as ArrowLeftIcon } from './assets/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from './assets/arrow-right.svg';

import { ReactComponent as RingsIcon } from './assets/rings.svg';

import { ReactComponent as SocialFacebookIcon } from './assets/social-facebook.svg';
import { ReactComponent as SocialTwitterIcon } from './assets/social-twitter.svg';
import { ReactComponent as SocialInstagramIcon } from './assets/social-instagram.svg';
import { ReactComponent as SocialLinkedinIcon } from './assets/social-linkedin.svg';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='section'>
        <div className='background-image'>
          <div className='blur'></div>
          <img src={image_001} alt="image_001" />
        </div>
        <div className='info-box'>
          <div className='title'>Fantastic four robots</div>
          <div className='items'>
            <div className='item'>
              <div className='button'>
                <Button001Icon />
              </div>
              <div className='right'>
                <span>PG_MAGIC_FOREX</span>
                <span>4XC 30 days free offer</span>
              </div>
            </div>
            <div className='item'>
              <div className='button'>
                <Button002Icon />
              </div>
              <div className='right'>
                <span>PG MAGIC MULTI</span>
                <span>All assets</span>
              </div>
            </div>
            <div className='item'>
              <div className='button'>
                <Button003Icon />
              </div>
              <div className='right'>
                <span>PG MAGIC FTMO</span>
                <span>FTMO Challenge</span>
              </div>
            </div>
            <div className='item'>
              <div className='button'>
                <Button004Icon />
              </div>
              <div className='right'>
                <span>PG MAGIC CRYPTO</span>
                <span>Crypto the future</span>
              </div>
            </div>
          </div>
          <div className='button'>REGISTER NOW</div>
        </div>
      </div>
      <div className='section'>
        <div className='curve-area'></div>
        <div className='curve-area'>
          <img src={image_002} alt="image_002" />
          <div className='text-box'>
            <span>HOW IT WORK</span>
            <span>Solution for everyone with our artificial intelligence.</span>
            <div className='items'>
              <div className='item'>
                <span className='left'>01</span>
                <div className='right'>
                  <span>Robot Forex Trading</span>
                  <span>Automated Trading: Our advanced robot Forex trading system utilizes cutting-edge algorithms to execute trades automatically, saving time and effort while maximizing profit potential.</span>
                </div>
              </div>
              <div className='item'>
                <span className='left'>02</span>
                <div className='right'>
                  <span>CFD Trading</span>
                  <span>Contract for Difference (CFD) Explained: Our platform offers CFD trading, allowing users to speculate on the price movements of various financial instruments without owning the underlying asset, providing flexibility and access to a wide range of markets.</span>
                </div>
              </div>
              <div className='item'>
                <span className='left'>03</span>
                <div className='right'>
                  <span>Crypto Trading</span>
                  <span>Cryptocurrency Trading Made Easy: Our platform offers seamless crypto trading, allowing users to buy, sell, and trade cryptocurrencies with ease, leveraging the volatility and potential profitability of this emerging asset class.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='curve-area'></div> */}
      </div>
      <div className='section'>
        <div className='curve-area'></div>
        <span className='sub-title'>FEATURE</span>
        <span className='title'>Advanced Tools for Profitable Decision-Making</span>
        <div className='box-line'>
          <div className='box'>
            <Tool001Icon />
            <span>Advanced Indicators</span>
            <span>Utilize a wide range of powerful indicators for precise market analysis.</span>
          </div>
          <div className='box'>
            <Tool002Icon />
            <span>Live News Updates</span>
            <span>Stay updated with live news feeds to make informed trading decisions.</span>
          </div>
          <div className='box'>
            <Tool003Icon />
            <span>Risk Management Tools</span>
            <span>Set stop-loss and take-profit orders to manage risk effectively.</span>
          </div>
        </div>
      </div>
      <div className='section'>
        <span className='sub-title'>ASKED QUESTIONS</span>
        <span className='title'>Something about PGMAGIC</span>
        <div className='row'>
          <div className='left'>
            <div className='box'>
              <div className='top'>PGMAGIC</div>
              <div className='bottom'>
                Redefining Automated Trading Excellence. With its state-of-the-art algorithms, advanced risk management, and consistent performance, PGMAGIC stands as one of the world's top-rated trading robots, delivering exceptional results and unmatched profitability in today's dynamic financial markets.
              </div>
            </div>
            <div className='box'>
              <span>Free Lifetime Updates.</span>
              <CheckIcon />
            </div>
            <div className='box'>
              <span>Excellent Customer Support.</span>
              <CheckIcon />
            </div>
            <div className='box'>
              <span>Easy & User Friendly Services.</span>
              <CheckIcon />
            </div>
          </div>
          <div className='right'>
            <img src={image_003} alt="image_003" />
          </div>
        </div>
      </div>
      <div className='section'>
        <span className='sub-title'>PRODUCTS</span>
        <span className='title'>How our products work</span>
        <div className='item-line'>
          <div className='item'>
            <span>01</span>
            <Product001Icon />
            <span>PGmagic Forex</span>
            <span>Discover the Power of Pgmagic Forex, a cutting-edge robot specializing in currency pairs. Try it for free with our 30-day trial, and unlock your potential in the forex market</span>
          </div>
          <div className='item'>
            <span>02</span>
            <Product002Icon />
            <span>PGmagic Forex</span>
            <span>Discover the Power of Pgmagic Forex, a cutting-edge robot specializing in currency pairs. Try it for free with our 30-day trial, and unlock your potential in the forex market</span>
          </div>
          <div className='item'>
            <span>03</span>
            <Product003Icon />
            <span>PGmagic Forex</span>
            <span>Discover the Power of Pgmagic Forex, a cutting-edge robot specializing in currency pairs. Try it for free with our 30-day trial, and unlock your potential in the forex market</span>
          </div>
          <div className='item'>
            <span>04</span>
            <Product004Icon />
            <span>PGmagic Forex</span>
            <span>Discover the Power of Pgmagic Forex, a cutting-edge robot specializing in currency pairs. Try it for free with our 30-day trial, and unlock your potential in the forex market</span>
          </div>
        </div>
      </div>
      <div className='section'>
        <span className='sub-title'>PRICING</span>
        <span className='title'>Choose your pricing plan</span>
        <div className='month-year-button'>
          <div className='button-box'>
            <div className='button'>Monthly</div>
            <div className='button'>Yearly</div>
          </div>
          <span>SAVE UP TO 30%</span>
          <VectorIcon />
        </div>
        <div className='card-line'>
          <div className='card'>
            <span>PGmagic Free</span>
            <span>
              <span>€</span>
              <span>0</span>
              <span>/mo</span>
            </span>
            <div className='items'>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
            </div>
            <div className='button'>Get Started</div>
            <span>Enjoy PGMAGIC MULTI, an EA for both beginner and experienced traders.
              This EA works on all brokers and platforms, supporting both mt4 and mt5.</span>
          </div>
          <div className='card'>
            <span>PGmagic Free</span>
            <span>
              <span>€</span>
              <span>0</span>
              <span>/mo</span>
            </span>
            <div className='items'>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
            </div>
            <div className='button'>Get Started</div>
            <span>Enjoy PGMAGIC MULTI, an EA for both beginner and experienced traders.
              This EA works on all brokers and platforms, supporting both mt4 and mt5.</span>
          </div>
          <div className='card'>
            <span>PGmagic Free</span>
            <span>
              <span>€</span>
              <span>0</span>
              <span>/mo</span>
            </span>
            <div className='items'>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
            </div>
            <div className='button'>Get Started</div>
            <span>Enjoy PGMAGIC MULTI, an EA for both beginner and experienced traders.
              This EA works on all brokers and platforms, supporting both mt4 and mt5.</span>
          </div>
          <div className='card'>
            <span>PGmagic Free</span>
            <span>
              <span>€</span>
              <span>0</span>
              <span>/mo</span>
            </span>
            <div className='items'>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CheckIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
              <div className='item'>
                <span>Unlimited open order</span>
                <CrossIcon />
              </div>
            </div>
            <div className='button'>Get Started</div>
            <span>Enjoy PGMAGIC MULTI, an EA for both beginner and experienced traders.
              This EA works on all brokers and platforms, supporting both mt4 and mt5.</span>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='curve-area'></div>
        <div className='curve-area'>
          <div className='left'>
            <span className='sub-title'>PRICING</span>
            <span className='title'>Choose your pricing plan</span>
            <QuoteIcon />
            <span className='quote'>Mark T.: "O desempenho do EA com commodities superou minhas expectativas. É uma ferramenta valiosa para os diversificadores."</span>
            <div className='buttons'>
              <div className='button'><ArrowLeftIcon /></div>
              <div className='button'><ArrowRightIcon /></div>
            </div>
          </div>
          <div className='right'>
            <RingsIcon />
            <img src={face_000} alt="face_000" />
            <img src={face_001} alt="face_001" />
            <img src={face_002} alt="face_002" />
            <img src={face_003} alt="face_003" />
            <img src={face_004} alt="face_004" />
            <img src={face_005} alt="face_005" />
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='curve-area'></div>
        <span className='sub-title'>Contact Us</span>
        <span className='title'>Any question or remarks? Just write us a message!</span>
        <div className='contact-card'>
          <div className='left'>
            <span>I will help you!</span>
            <img src={image_004} alt="image_004" />
            <div className='social'>
              <SocialFacebookIcon />
              <SocialTwitterIcon />
              <SocialInstagramIcon />
              <SocialLinkedinIcon />
            </div>
          </div>
          <div className='right'>
            <div className='row'>
              <div className='input-section'>
                <span>First Name</span>
                <input />
              </div>
              <div className='input-section'>
                <span>First Name</span>
                <input />
              </div>
            </div>
            <div className='row'>
              <div className='input-section'>
                <span>Email</span>
                <input />
              </div>
              <div className='input-section'>
                <span>Phone Number</span>
                <input />
              </div>
            </div>
            <div className='row'>
              <div className='input-section'>
                <span>Select Subject?</span>
                <div className='checkboxes'>
                  <div className='checkbox'>
                    <input type='checkbox' />
                    <span>Robot PGMAGIC</span>
                  </div>
                  <div className='checkbox'>
                    <input type='checkbox' />
                    <span>Payments</span>
                  </div>
                  <div className='checkbox'>
                    <input type='checkbox' />
                    <span>Others</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='input-section'>
                <span>Message</span>
                <input />
              </div>
            </div>
            <div className='button'>Send Message</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
