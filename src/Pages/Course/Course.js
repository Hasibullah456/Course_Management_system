import { useParams } from "react-router-dom";
import { Courses } from "../../data";
import CourseItme from "../../Components/Course/CourseItem";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
function Course(){
    
    const courseId=useParams().courseId;
    const courseInfo=Courses.find(course=>course.id==courseId);
    console.log(courseInfo);
    
     
     

    return(
        <div className="container">
         <Row>
            <Col md={5}  >
            <img className="img-fluid" src={courseInfo.img}  />
            </Col>
            <Col className="my-2" md={7}  >
            <h2>{courseInfo.title}</h2>
            <p>نام مدرس: {courseInfo.teacher}</p>
            <p>قبل از شروع آموزش مفاهیم ریکت ، مفاهیم مهم javascript که توی react خیلی پر کاربرد هستن رو بررسی میکنیم با هم (درک این پیش نیاز ها به شدت ضروریه و اگه این پیش نیاز ها رو به خوبی تمرین کنید و با دقت ویدئو ها رو ببینید، ریکت رو هم میتونید خیلی راحت یاد بگیرید</p>
            </Col>
         </Row>
        </div>
        
    
    )
}
export default Course;