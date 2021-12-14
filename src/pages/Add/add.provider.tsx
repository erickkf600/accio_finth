import React, { createContext, useContext, useState } from 'react'

export const ResumeContext = createContext<{
    resume: any[]
    setResume: any
}>({
    resume: [],
    setResume: () => {},
})

export const ResumeProvider = (props: any) => {
    const getResume: Array<any> = JSON.parse(
        sessionStorage.getItem('pre-register') || '[]',
    )
    const [resume, setResume] = useState<any>(getResume)
    return (
        <ResumeContext.Provider value={{ resume, setResume }}>
            {props.children}
        </ResumeContext.Provider>
    )
}
export default ResumeProvider

export const useResumeContext = () => useContext(ResumeContext)
