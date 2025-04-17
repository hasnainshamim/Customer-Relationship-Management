import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router'
import Layout from '../../screens/Layout'

export const MainLayout = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/layout' element={<Layout />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}