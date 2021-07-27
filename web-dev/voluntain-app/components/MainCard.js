import styles from '../styles/Home.module.css'
import { CourseCard } from './CourseCard';
import CardColumns from 'react-bootstrap/CardColumns'
import { CardGroup } from 'react-bootstrap';

export const MainCard = (props)=> {

    return(
        <CardGroup className="d-flex">
            {/* get course inform from backend */}
            {props.courses.map((course) => (
                <CourseCard
                title={course.title} 
                img={"/"+course.title+".png"}
                content={course.about}
                link={"/" + course.id}
                level={course.level}
                />  
            ))}
        </CardGroup>
    );
}