import {Row, Col} from 'react-bootstrap'
import './Footer.css';
function Footer(){
    return(
        <div className="footer">
            <Row>
                <Col>
                <h2>رسالت افغان تکنالوژی</h2>
                <p>ما متحد به آرایه طرح سیستم های با حال و مطابق ضروریات  روز مدرن به شما میسازیم</p>
                </Col>
                <Col>
                <img className='footerSymbol'
                 src="https://cdn.zarinpal.com/badges/trustLogo/1.png" alt="" />
                </Col>
            </Row>
        </div>
        
    )
}
export default Footer;