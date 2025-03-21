import React from 'react'
import dayjs from 'dayjs';

const InterviewCard = ({interviewId,userId,role,type,techstack,createdAt}:InterviewCardProps) => {
    const feedback=null as Feedback | null;
    const normalisedType= /mix/gi.test(type)?"Mixed":type;
    const formattedData= dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D,YYYY')
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        <div className="card-interview">
            <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
                <p className='badge-text'>{normalisedType}</p>
            </div>
        </div>
       
    </div>
  )
}

export default InterviewCard
