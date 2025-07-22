import Mynavbar from "../../Components/Navbar/Navbar";
import {Row,Col,Container} from 'react-bootstrap'
import ProPig from './../../assets/Images/programming.svg'
import CourseItme from "../../Components/Course/CourseItem";
import bootstrapImg from "../../assets/Images/bootstrap.png"
import Footer from "../../Components/Footer/Footer";
import {Courses} from "../../data";

function Home(){
    const[courses,SetCourses]=(Courses)
    return(
    
        <>
        <Mynavbar />
        <Container fluid="md" >
        
    
        <Row className="align-items-center my-5">
            <Col lg={6}>
           <h1>برنامه نوسی با افغان تکنالوژی</h1>
           <p style={{textAlign:'justify'}}>
            
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p> 
            </Col>
            <Col lg={6}><img src={ProPig} className="img-fluid py-4" /></Col>
        </Row>
        <Row >
            <h2 className="py-4">دوره های آموزشی</h2>
            {
                Courses.map( course=>(
                    <Col md={6} lg={4} xl={3}>
                    <CourseItme {...course}></CourseItme>
                    </Col>
                ))
            }
            
            
        </Row>
        
        </Container>
        <Footer />
        
        </>
    )
}
export default Home;