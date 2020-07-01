import React from 'react'

const Title = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}
  
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}
  
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map( part =>
        <Part part={part} key={part.id}/>
      )}
    </div>
  )
}
  
const Total = ({ course }) => {
    const sum = course.parts.reduce( (acc, val) => { return acc + val.exercises },0)
        return(
            <strong>Total of  {sum} exercises</strong>
        )
}

const Course = ({courses}) =>{
   return(
     <div>
       {courses.map( course =>
         <div key={course.id}>  
           <Title course={course}  />
           <Content course={course}  />
           <Total course={course}  />
         </div>
       )}
     </div>
   )
}

export default Course
