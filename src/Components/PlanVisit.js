import React from 'react'
import Button from './Button/Button'


const PlanVisit = () => {
    return (
        <>
             <div className="bg-primary flex py-8 justify-center gap-8 items-baseline flex-wrap px-5">
                <h4 className="text-lg md:text-2xl font-medium text-center text-gray-200">Want to visit our school to know us better?</h4> <Button type="primary" as="link" to="/contact">PLAN A VISIT</Button>
             </div>
        </>
    )
}

export default PlanVisit
