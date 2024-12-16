import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
    console.log("Category:", props.category);
    console.log("Courses:", props.courses);

    const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    function getCourses() {
        if (!props.courses) {
            console.error("No courses data available.");
            return [];
        }

        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[category] || [];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
                <Card
                    course={course}
                    key={course.id}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                />
            ))}
        </div>
    );
};

export default Cards;
